"use client";
import { CartContext } from "@/app/_context/CartContext";
import CartApis from "@/app/_utils/CartApis";
import OrderApis from "@/app/_utils/OrderApis";
import { useUser } from "@clerk/nextjs";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";

const CheckoutForm = ({ amount }) => {
  const { cart, setCart } = useContext(CartContext);
  const { user } = useUser();

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [ipFetched, setIpFetched] = useState(false);

  useEffect(() => {
    const fetchIPAddress = async () => {
      try {
        const response = await fetch("https://api64.ipify.org?format=json");
        const data = await response.json();
        setIpAddress(data.ip);
        setIpFetched(true); // Set the flag once IP address is fetched
      } catch (error) {
        console.error("Error fetching IP address:", error);
        setIpAddress("Unable to fetch IP address.");
        setIpFetched(true); // Set the flag even if IP address fetching fails
      }
    };

    fetchIPAddress();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !ipFetched) {
      return; // Wait until Stripe, Elements, and IP address are available
    }

    setLoading(true);

    try {
      // Create the order
      await createOrder();

      // Submit the payment
      const { error: submissionError } = await elements.submit();
      if (submissionError) {
        throw new Error(submissionError.message);
      }

      const res = await fetch("api/create-intent", {
        method: "POST",
        body: JSON.stringify({
          amount: amount,
        }),
      });
      const clientSecret = await res.json();
      const result = await stripe.confirmPayment({
        clientSecret,
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/payment-confirm",
        },
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

      // Payment successful
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  const createOrder = async () => {
    let productIds = cart.map((el) => el?.product?.id);
    const data = {
      data: {
        email: user?.primaryEmailAddress?.emailAddress,
        username: user?.username,
        amount,
        address: ipAddress,
        products: productIds,
      },
    };

    const res = await OrderApis.createOrder(data);
    if (res) {
      cart.forEach((el) => {
        CartApis.deleteCartItem(el?.id).then((result) => {});
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-32 md:mx-[320px] mt-12">
        <PaymentElement />
        <button className="bg-primary p-2 mt-3 text-white rounded-md w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

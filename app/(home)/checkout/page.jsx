"use client";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_components/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  "pk_test_51OuueWFhYrmB04TdbJyC1JoX1zYTBOxUZKTfeaYtLe9K6BEFc8MSOm9HP5CUff7Ky0KXIgTlRxQPwYVNamdUT47300gVyL4uD7"
);
const page = () => {
  const searchParams = useSearchParams();
  const options = {
    mode: "payment",
    currency: "usd",
    amount: Number(searchParams.get("amount")) * 100,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={Number(searchParams.get("amount"))} />
    </Elements>
  );
};

export default page;

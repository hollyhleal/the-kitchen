import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

const stripePromise = loadStripe(
  "pk_test_51MylV6Ans49T1zFVI0lEfhzJwwjOQm0SnqWLyMmhH1zTj9HE6wZDTXKLLYAIVYbxc3BciZ2jy8zJx7ui3CeiVGr400JZAasbtx"
);

const checkOut = () => {
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkOut.session });
      });
    }
  }, [data]);
};

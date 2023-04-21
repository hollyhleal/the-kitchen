import { gql } from "@apollo/client";

export const QUERY_CHECKOUT = gql`
  query getCheckout($reservations: [ID]!) {
    checkout(reservations: $reservations) {
      session
    }
  }
`;

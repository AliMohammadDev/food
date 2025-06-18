import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AxiosError } from "axios";



export type CheckoutResponse = {
  url: string;
};

export type DeliveryInformationInput = {
  firstName: string;
  lastName: string;
  emailD: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
};



export const useCheckout = (
  onSuccess?: (data: CheckoutResponse) => void,
  onError?: (messages: string[]) => void
) => {
  const mutation = useMutation<CheckoutResponse, AxiosError<{ message: string[] }>, DeliveryInformationInput>({
    mutationFn: async (deliveryInfo: DeliveryInformationInput) => {
      try {
        const res = await axios.post<CheckoutResponse>("stripe/checkout", deliveryInfo);
        return res.data;
      } catch (error) {
        const err = error as AxiosError<{ message: string[] }>;
        throw err;
      }
    },
    onSuccess: (data) => {
      onSuccess?.(data);
    },
    onError: (error) => {
      onError?.(error.response?.data.message || ["Unknown error"]);
    }
  });

  return mutation;
};

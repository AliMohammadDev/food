import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AxiosError } from "axios";



export type CheckoutResponse = {
  url: string;
};

export type DeliveryInformationInput = {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export const useCheckout = (onSuccess?: (data: CheckoutResponse) => void) => {
  const mutation = useMutation<CheckoutResponse, AxiosError<{ server_error: string }>, DeliveryInformationInput>({
    mutationFn: async (deliveryInfo: DeliveryInformationInput) => {
      try {
        const res = await axios.post<CheckoutResponse>("stripe/checkout", deliveryInfo);
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      if (onSuccess) onSuccess(data);
    },
  });

  return mutation;



};
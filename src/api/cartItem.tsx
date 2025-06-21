import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import Cookie from "cookie-universal";



export type CartItemInput = {
  itemId: number;
  quantity?: number;
}

export type CartItem = {
  id: number;
  cart: {
    id: number;
    status: string;
    createdAt: string;
    updatedAt: string;
  };
  item: {
    id: number;
    name: string;
    image: string;
    price: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
  };
  quantity: number;
  subtotal: number;
  createdAt: string;
  updatedAt: string;
};

export type CartItemsResponse = {
  message: string;
  data: CartItem[];
  total: number;
  pagination: {
    current_page: number;
    total_pages: number;
    total_items: number;
    items_per_page: number;
    current_page_items_count: number;
    has_next_page: boolean;
    has_previous_page: boolean;
  };
};

export type CartItemResponse = {
  message: string;
  data: CartItem;
};


export const useGetCartItems = () => {
  const query = useQuery({
    queryKey: ['cartItem'],
    queryFn: async () => {
      const res = await axios.get<CartItemsResponse>('cart-item');
      return res.data.data;
    }
  });
  return query;
}




export const useAddCartItem = (onSuccess?: (data: CartItemResponse) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<CartItemResponse, AxiosError<{ server_error: string }>, CartItemInput>({
    mutationFn: async (data: CartItemInput) => {
      try {
        const res = await axios.post<CartItemResponse>("cart-item", {
          itemId: data.itemId,
          quantity: data.quantity,
        });

        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cartItem"] });
      if (onSuccess) onSuccess(data);
    },
  });

  return mutation;
};


export const useUpdateCartItem = (onSuccess?: (data: CartItemResponse) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<CartItemResponse, AxiosError<{ server_error: string }>, CartItemInput>({
    mutationFn: async (data: CartItemInput) => {
      try {
        const res = await axios.patch<CartItemResponse>(
          `cart-item/${data.itemId}`,
          {
            itemId: data.itemId,
          }
        );
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cartItem"] });
      if (onSuccess) onSuccess(data);
    },
  });
  return mutation;
}


export const useDeleteCartItem = (onSuccess?: (data: CartItemResponse) => void) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<CartItemResponse, AxiosError<{ server_error: string }>, string>({
    mutationFn: async (id: string) => {
      try {
        const res = await axios.delete<CartItemResponse>(`cart-item/${id}`);
        return res.data;
      }
      catch (error) {
        const err = error as AxiosError<{ server_error: string }>;
        const message = err.response?.data.server_error;
        throw new Error(message || "there was an error");
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["cartItem"] });
      if (onSuccess) onSuccess(data);
    },
  });
  return mutation;
}


import { useQuery } from "@tanstack/react-query";
import axios from "axios";



export type ItemInput = {
    id: string;
    name: string;
    image: FileList;
    category: number | { id: number; name: string };
}
export type ItemResponse = {
    data: ItemInput[];
    success: boolean;
    message: string;
};


export const useGetItems = () => {
    const query = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            const res = await axios.get<ItemResponse>('items');
            return res.data.data;
        }
    });
    return query;
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type CategoryInput = {
    id: string;
    name: string;
    image: FileList;
    createdAt: string;
}
export type CategoryResponse = {
    data: CategoryInput[];
    success: boolean;
    message: string;
};


export const useGetCategories = () => {
    const query = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axios.get<CategoryResponse>('categories');
            return res.data.data;
        }
    });
    return query;
}
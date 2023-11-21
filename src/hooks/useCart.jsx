import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
    // tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: cart=[]} = useQuery({
        queryKey:['cart'],
        queryFn: async() => {
            const res = await axiosSecure.get(`http://localhost:5000/carts?email=${user.email}`)
            return res.data;
        }
    })

    return [cart, refetch]
};

export default useCart;
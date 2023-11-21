import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAndToCart = food => {
        console.log(food)
        if(user && user.email){
            // ToDo: send cart item to the database
            console.log(user.email.food);
            const cartItem = {
                menuId: _id,
                email:user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId){
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                 // send the user to the login page
                 
                  navigate('/login',{state: {from: location}})
                }
              });
        }
    }

    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-[#111827] text-white absolute right-0 px-2 py-1 mr-8 mt-4 opacity-80">${price}</p>
            <div className="card-body text-center">
                <h2 className="font-bold text-xl text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button 
                    onClick={() => handleAndToCart(item)}
                    className="btn btn-outline text-[#BB8506] border-0 border-b-4 ">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
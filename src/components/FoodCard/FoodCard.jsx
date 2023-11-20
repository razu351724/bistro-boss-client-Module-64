const FoodCard = ({item}) => {
    
    const {name, image, price, recipe, } = item;
    const handleAndToCart = food => {
        console.log(food)
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
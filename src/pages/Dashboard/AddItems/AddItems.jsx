import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div>
            <SectionTitle heading="What's new ?" subHeading=" add an item"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="form-control w-full ">
                            <span className="label-text">Recipe name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            {...register("name")}
                            className="input input-bordered w-full "
                        />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select defaultValue="default" {...register('category', { required: true })}
                                className=" py-3 px-2 rounded-lg border w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="salad">Salad</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        {/* price */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register('price', { required: true })}
                                className="input input-bordered w-full" />
                        </div>
                    </div>
                    {/* recipe details */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe details*</span>
                        </label>
                        <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </div>
                    <div className="form-control w-full my-6">
                        <input  {...register('image', { required: true })}  type="file" className="file-input w-full max-w-xs" />
                    </div>
                    <button className="flex px-5 py-3 text-white" style={{ background: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)' }}>
                        Add Item <FaUtensils className="ml-4" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img,}) => {
    return (
        <div className="pt-8">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-8 my-14">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-4">
            <button className="btn btn-outline text-black border-0 border-b-4 ">ORDER YOUR FAVOURITE FOOD</button>
            </div>
            
        </div>
    );
};

export default MenuCategory;
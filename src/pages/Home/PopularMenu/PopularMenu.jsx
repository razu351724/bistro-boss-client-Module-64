import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    
    // এটা বাদ দিয়ে কাস্টম আমরা কাস্টম হুক ব্যবহার করছি ।।
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItems = data.filter(item => item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // }, [])

    return (
        <section className="mb-10">
            <SectionTitle
                heading={'From Our menu'}
                subHeading={'Popular Items'}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item} 
                    ></MenuItem>)
                }
            </div>
            <div className="text-center my-4">
            <button className="btn btn-outline text-black border-0 border-b-4 ">View Ful Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;
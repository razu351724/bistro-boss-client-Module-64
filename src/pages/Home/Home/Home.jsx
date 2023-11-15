import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import SwiperHome from "../Category/SwiperHome";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testmonials from '../Testmonials/Testmonials'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <SwiperHome></SwiperHome>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testmonials></Testmonials>
        </div>
    );
};

export default Home;
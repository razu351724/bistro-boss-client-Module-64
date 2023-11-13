import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import  '../Featured/Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-10">
            <SectionTitle
            subHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center gap-10 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="#" />
                </div>
                <div className="md:ml-10 space-y-2 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit blanditiis, consectetur hic id modi aut, exercitationem asperiores labore eaque, dolore non atque praesentium odio repudiandae deserunt quaerat culpa laboriosam aspernatur.</p>
                    <button className="btn btn-outline text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
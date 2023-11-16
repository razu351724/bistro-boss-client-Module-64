import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    console.log(category)
    const desserts = menu.filter(item => item.category === "dessert");
    const soup = menu.filter(item => item.category === "soup");
    const salad = menu.filter(item => item.category === "salad");
    const pizza = menu.filter(item => item.category === "pizza");
    const drinks= menu.filter(item => item.category === "drinks");
    const offered = menu.filter(item => item.category === "offered");


    return (
        <div>
            <Helmet>
                <title>Bistro | Order</title>
            </Helmet>
            <Cover img={orderCoverImg} title='order Food'></Cover>
            {/* react Tabs */}
            <div className="text-center">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>offered</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={offered}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
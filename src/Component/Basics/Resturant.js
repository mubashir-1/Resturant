import React, { useState } from 'react'
import "./Style.css";
import Menu from './MenuApi'
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
    ...new Set(Menu.map((currentElement) => {
        return currentElement.category;
    })),
    'All'

]



export default function Resturant() {

    const [menuData, setmenuData] = useState(Menu)
    const [menulist, setMenulist] = useState(uniqueList)



    const filterItem = (category) => {

        if (category === "All") {
            setmenuData(Menu)
            return;
        }

        const updatedList = Menu.filter((currentElement) => {
            return currentElement.category === category;
        })
        setmenuData(updatedList)
    
    }
    console.log(filterItem)


    return (

        <div>

            <Navbar filterItem={filterItem} menulist={menulist} />
            <MenuCard menuData={menuData} />
        </div>
    )
}

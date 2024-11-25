import React from "react";
import GoodsCard from "./GoodsCard";
import "./Task2.css";

function Task2() {
    const goods = [
        { name: "Яблуко", price: 5, image: "/images/item1.jpg" },
        { name: "Груша", price: 7, image: "/images/item2.jpg" },
        { name: "Апельсин", price: 10, image: "/images/item3.jpg" },
        { name: "Виноград", price: 15, image: "/images/item4.jpg" },
        { name: "Персик", price: 12, image: "/images/item5.jpg" },
        { name: "Слива", price: 8, image: "/images/item6.jpg" },
    ];

    return (
        <div className="task2">
            {goods.map((item, index) => (
                <GoodsCard key={index} {...item} />
            ))}
        </div>
    );
}

export default Task2;

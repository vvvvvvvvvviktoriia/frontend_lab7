import React from "react";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <h1>Лабораторна робота №7</h1>
            <p>Оберіть завдання:</p>
            <div className="links">
                <a href="/task1" className="link-btn">Завдання 1</a>
                <a href="/task2" className="link-btn">Завдання 2</a>
            </div>
        </div>
    );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <h1>Лабораторна робота №7</h1>
            <p>Оберіть завдання:</p>
            <div className="links">
                {/* Используем Link для навигации */}
                <Link to="/task1" className="link-btn">Завдання 1</Link>
                <Link to="/task2" className="link-btn">Завдання 2</Link>
            </div>
        </div>
    );
}

export default Home;


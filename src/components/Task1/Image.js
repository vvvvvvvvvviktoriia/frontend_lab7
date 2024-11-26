import React, { useState } from "react";
import "./Task1.css";

function Image() {
    const [images, setImages] = useState([]); // Список доданих зображень

    const addImage = () => {
        const newImage = {
            id: Date.now(), // Унікальний ID
            width: 450,
            src: `${process.env.PUBLIC_URL}/images/barcelona.jpg`,
            link: "https://www.barcelona.cat/en", // Силка, на яку веде зображення
        };
        setImages((prevImages) => [...prevImages, newImage]);
    };

    const increaseSize = (id) => {
        setImages((prevImages) =>
            prevImages.map((img) =>
                img.id === id ? { ...img, width: img.width + 50 } : img
            )
        );
    };

    const decreaseSize = (id) => {
        setImages((prevImages) =>
            prevImages.map((img) =>
                img.id === id && img.width > 50
                    ? { ...img, width: img.width - 50 }
                    : img
            )
        );
    };

    const removeImage = (id) => {
        setImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    return (
        <div>
            {/* Головне зображення */}
            <div className="image-container">
                <a href="https://www.barcelona.cat/en" target="_blank" rel="noopener noreferrer">
                    <img
                        src={`${process.env.PUBLIC_URL}/images/barcelona.jpg`}
                        alt="Барселона"
                        width={450}
                        className="image"
                    />
                </a>
            </div>

            {/* Кнопки для нових зображень */}
            <div className="button-container">
                <button onClick={addImage}>Додати зображення</button>
            </div>

            {/* Додані зображення */}
            {images.map((img) => (
                <div key={img.id} className="image-container">
                    <a href={img.link} target="_blank" rel="noopener noreferrer">
                        <img
                            src={img.src}
                            alt={`Додане зображення ${img.id}`}
                            width={img.width}
                            className="image"
                        />
                    </a>
                    <div className="button-container">
                        <button onClick={() => increaseSize(img.id)}>Збільшити</button>
                        <button onClick={() => decreaseSize(img.id)}>Зменшити</button>
                        <button onClick={() => removeImage(img.id)}>Видалити</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Image;

import React, { Component } from "react";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleEducation: true,
            toggleHobby: true,
        };
    }

    handleEducationClick = () => {
        const element = document.getElementById("education-line");
        if (this.state.toggleEducation) {
            element.style.backgroundColor = "#FFCCCB";
            element.style.color = "#FF0500";
        } else {
            element.style.backgroundColor = "#FFFACD";
            element.style.color = "#FFD700";
        }
        this.setState((prevState) => ({
            toggleEducation: !prevState.toggleEducation,
        }));
    };

    handleHobbyClick = () => {
        const element = document.querySelector(".hobby-line");
        if (this.state.toggleHobby) {
            element.style.backgroundColor = "#FFFACD";
            element.style.color = "#FFD700";
        } else {
            element.style.backgroundColor = "#FFCCCB";
            element.style.color = "#FF0500";
        }
        this.setState((prevState) => ({
            toggleHobby: !prevState.toggleHobby,
        }));
    };

    render() {
        return (
            <div>
                <p>Дата народження: 21 квітня, 2005 року</p>
                <p>Місце народження: Одеса, Україна</p>
                <p
                    id="education-line"
                    onClick={this.handleEducationClick}
                    style={{ cursor: "pointer" }}
                >
                    Освіта: Ліцей №4, м.Чорноморськ; НТУУ "КПІ", м.Київ
                </p>

                <h3
                    className="hobby-line"
                    onClick={this.handleHobbyClick}
                    style={{ cursor: "pointer" }}
                >
                    Хобі:
                </h3>
                <ul>
                    <li>Подорожі</li>
                    <li>Спорт</li>
                    <li>Прогулянки</li>
                    <li>Кулінарія</li>
                </ul>

                <h3>Улюблені фільми:</h3>
                <ol>
                    <li>"Зелена миля", 1999</li>
                    <li>"Зелена книга", 2018</li>
                    <li>"Покинь, якщо кохаєш", 2024</li>
                    <li>"Проста послуга", 2018</li>
                </ol>

                <p>
                    Барсело́на (кат. Barcelona, вимовляється літературною каталанською
                    [bəɾsəł'onə], у півн.-зах. діалектах [baɾseł'onɛ], у валенсійському
                    діалекті [baɾseł'ona], алгерським діалектом [balsaɾ'ona], ісп.
                    Barcelona, вимовляється [baɾθeˈlona], окс. Barcelona, фр. Barcelone,
                    вимовляється [baʁseˈlɔn]) — місто в Іспанії, столиця автономної
                    області Каталонії і провінції Барселона...
                </p>
            </div>
        );
    }
}

export default Content;

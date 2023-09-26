import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Home({ dishes, setDishes, onClickFilterTime, onClickVegan }) {
    const { t, i18n } = useTranslation();
    const l = i18n.resolvedLanguage;
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        Axios({
            url: env.API_URL + "/dishes/",
        })
            .then((response) => {
                setIsLoaded(true);
                setDishes(response.data);
            })
            .catch((error) => {
                setIsLoaded(true);
                setError(error);
            });
    });

    const cookTime = [
        {
            time: 20,
            image: "url(images/dishes/test-image-icon.png)"
        },
        {
            time: 30,
            image: "url(images/dishes/test-image-icon.png)"
        },
        {
            time: 40,
            image: "url(images/dishes/test-image-icon.png)"
        }
    ];

    const timeCookingRows = cookTime.map((item, i, a) => {
        return (
            <Link key={i} to="/search" onClick={() => onClickFilterTime(item.time)} >
                <div className="filter-button">
                    <div className="filter-image" style={{ backgroundImage: "url(images/dishes/test-image-icon.png)" }}></div>
                    {
                        i === 0 ?
                            <div className="filter-text">{t('home.lessThan')} {item.time} min</div>
                            :
                            i === a.length - 1 ?
                                <div className="filter-text">{t('home.moreThan')} {item.time} min</div>
                                :
                                <div className="filter-text">{t('home.between')} {item.time} min {t('home.and')} {a[i + 1].time} min</div>
                    }
                </div>
            </Link>
        );
    });

    const veganDishes = dishes.map(dish => {
        if (!dish.vegan)
            return;
        return (
            <Link key={dish._id} to="/search/dish" onClick={() => onClickVegan(dish)}>
                <div className="filter-button">
                    <div className="filter-image" style={{ backgroundImage: dish.image }}></div>
                    <div className="filter-text">{dish[l + 'Name']}</div>
                </div>
            </Link>
        )
    });
    if (error) {
        return <div>Error</div>
    } else if (!isLoaded) {
        return <div>Is loading</div>
    } else {
        return (
            <div className="main-div">
                <div className="main-container">
                    <div className="header-home">{t('home.headerHome')}</div>
                    <div className="sub-header">{t('home.subHeaderHome')}</div>
                    <Link to="/fridge">
                        <img src={"images/" + l + "MyFridge.png"} alt="My refrigerator" style={{ width: "100%" }}></img>
                    </Link>
                    <div className="header-filter">{t('home.headerFilter')}</div>
                    <div className="sub-header">{t('home.subHeaderFilter')}</div>
                    <div className="filter-container">
                        {timeCookingRows}
                    </div>
                    <div className="header-filter">{t('home.vegansTitle')}</div>
                    <div className="sub-header">{t('home.vegansSubTitle')}</div>
                    <div className="filter-container">
                        {veganDishes}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
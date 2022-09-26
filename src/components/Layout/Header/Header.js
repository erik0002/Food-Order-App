import { Fragment } from "react";

import mealsImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = () => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="mealsImage"/>
        </div>
    </Fragment>
};


export default Header;

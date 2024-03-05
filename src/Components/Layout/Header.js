import React from 'react';
import classes from '../Layout/Header.module.css';
import mealsImage from '../../assests/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Error loading' />
            </div>
        </React.Fragment>
    );
};

export default Header;
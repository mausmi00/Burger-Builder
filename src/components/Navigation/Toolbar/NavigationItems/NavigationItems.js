import React from 'react';
import classes from './NavigationItem.module.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = () => (
    <ul className = {classes.NavigationItems}>
        <NavigationItem link = "/" active>Burger Builder</NavigationItem>
        <NavigationItem link = "/">Checkout</NavigationItem>
       

    </ul>

);

export default navigationItems;
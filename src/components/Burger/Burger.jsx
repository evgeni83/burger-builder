import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = ( props ) => {
    const transformedIngredients = Object.keys( props.ingredients ).map( ingredientName => {
        return [ ...Array( props.ingredients[ ingredientName ] ) ].map( ( _, i ) => {
            return <BurgerIngredient key={ ingredientName + i } type={ ingredientName }/>;
        } );
    } );
    return (
        <div className={ classes.Burger }>
            <BurgerIngredient type='bread-top'/>
            { transformedIngredients }
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
};

export default Burger;
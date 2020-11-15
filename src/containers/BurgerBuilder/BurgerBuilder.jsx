import React, { Component } from 'react';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Burger from '../../components/Burger/Burger';

const INGREDIENT_PRICES = {
    salad: 5,
    bacon: 4,
    meat: 13,
    cheese: 7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 40,
    };

    addIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[ type ];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ type ] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[ type ];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState( {
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        } );
    };

    removeIngredientHandler = ( type ) => {
        const oldCount = this.state.ingredients[ type ];
        if ( oldCount <= 0 ) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[ type ] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[ type ];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState( {
            ingredients: updatedIngredients,
            totalPrice: newPrice,
        } );
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for ( const key in disabledInfo ) {
            disabledInfo[ key ] = disabledInfo[ key ] <= 0;
        }

        return (
            <>
                <Burger ingredients={ this.state.ingredients }/>
                <BuildControls
                    ingredientAdded={ this.addIngredientHandler }
                    ingredientRemoved={ this.removeIngredientHandler }
                    disabled={ disabledInfo }
                    price={ this.state.totalPrice }/>
            </>
        );
    }
}

export default BurgerBuilder;
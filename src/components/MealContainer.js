import React from 'react'
import {connect}  from "react-redux"
import {buyMeal, returnMeal} from "../redux/meals/mealActions"

function MealContainer(props) {
    return (
        <div>
            <h1>Number of Meal: {props.numOfMeals}</h1>
            <button onClick={props.buyMeal}>Buy Meals</button>
            <button onClick={props.returnMeal}>Return Meals</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        numOfMeals: state.meal.numOfMeals
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyMeal: () => dispatch(buyMeal()),
        returnMeal: () => dispatch(returnMeal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MealContainer)

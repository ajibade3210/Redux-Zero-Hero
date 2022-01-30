import React from "react";
import { buySnack, returnSnack } from "../redux/snack/snackAction";
import {connect} from "react-redux"

function SnackContainer (props) {
    return (
        <div>
            <h1>Number Of Snack:{ props.numOfSnack} </h1>
            <button onClick={props.buySnack}>Buy Snack</button>
            <button onClick={props.returnSnack}>Return Snack</button>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        numOfSnack: state.snack.numOfSnack
    }
}

//this sends out action
const mapDispatchToProps = (dispatch) => {
    return {
        buySnack: () => dispatch(buySnack()),
        returnSnack: () => dispatch(returnSnack())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (SnackContainer)
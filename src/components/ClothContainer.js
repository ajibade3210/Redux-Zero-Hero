import React from 'react'
import { getCloth, giveCharity } from '../redux/clothes/clothAction'
import {connect}  from "react-redux"

function ClothContainer(props) {
    return (
        <div>
            <h1>Way to 2K22: {props.numOfCloth}</h1>
            <button onClick={props.getCloth}>Get Cloth</button>
            <button onClick={props.giveCharity}>Give Charity</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        numOfCloth: state.cloth.numOfCloth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        giveCharity: () => dispatch(giveCharity()),
        getCloth: () => dispatch(getCloth())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ClothContainer)

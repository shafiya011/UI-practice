import { buyCake } from '../Redux_comp/Cakes/cakesAction';
import { IceAction } from '../Redux_comp/IceCream/IceAction';
import React, {useState} from 'react'

import { connect } from "react-redux";
// import { useState } from 'react';

function NewCakeContainer(props) {
    const[number,setNumber]= useState(1)
    return (
        <div>
            <h2>Number of Cakes- {props.numOfCakes-number}</h2>
            <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
            <button onClick={()=>props.buyCake(number)}>Buy Cake</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        numOfCakes: state.cake.numOfCakes
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyCake:(number)=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
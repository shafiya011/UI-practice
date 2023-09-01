// import { buyCake } from '../Redux_comp/Cakes/cakesAction';
import { IceAction } from '../Redux_comp/IceCream/IceAction';
import React from 'react'
import { connect } from "react-redux";

function IceContainer(props) {
    return (
        <div>
            <h2>Number of Ice- {props.numOfIce}</h2>
            <button onClick={props.buyIce}>Buy Ice</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return{
        numOfIce: state.IceCream.numOfIce
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyIce:()=>dispatch(IceAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (IceContainer)

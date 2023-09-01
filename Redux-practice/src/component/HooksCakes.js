import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { buyCake } from '../Redux_comp/Cakes/cakesAction';

function HooksCakes() {
    const numOfCakes = useSelector(state=>state.cake.numOfCakes)
    const dispatch= useDispatch()

    return (
        <div>
            <h2>number of cakes hooks: {numOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>BUY NOW</button>
        </div>
    )
}

export default HooksCakes

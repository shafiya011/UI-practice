import React from 'react'
import  Connect  from 'react-redux'

function itemContainer(props) {
  return (
    <div>
      <h2>
        Item - {props.item}
      </h2>
    </div>
  )
}
const mapStateToProps =(state,ownProps)=>{
    const itemState = ownProps.cake?state.cake.numOfCakes:state.iceCream.numOfIce
    return{
        item:itemState
    }
}

export default Connect(mapStateToProps)(itemContainer)

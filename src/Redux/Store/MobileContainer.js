import React from 'react'
import { connect } from 'react-redux'
import { buyMobile } from '../MobileAction'

const MobileContainer = (props) => {
  return (
    <div className='container p-5'>
        <h2>No of mobiles :{props.noOfMobiles}</h2>
        <p>{props.noOfMobiles > 5 ? "Avilable": props.noOfMobiles===0? "Out of stock" : "limited "}</p>
        <button onClick={props.buyMobile} disabled={props.noOfMobiles === 0}  >Buy now</button>

    </div>
  )
}

const mapDispatchToprops=(dispatch)=>{
    return{
        buyMobile:()=>dispatch(buyMobile())
    }
}

const mapStateToprops=(state)=>{
    return{
        noOfMobiles:state.noOfMobiles
    }
}
export default connect(mapStateToprops,mapDispatchToprops)(MobileContainer)
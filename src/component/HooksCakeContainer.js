import React from 'react';
import {useSelector, useDispatch} from 'react-redux'

import {buyCake} from '../redux'

const HooksCakeContainer = () => {
    const numOfCake=useSelector(state => state.cakes)
    // const newNumOfCake=numOfCake.map(item =>  item.numOfCake)
    //  console.log('newNumOfCake' , newNumOfCake)
    const dispatch=useDispatch()
    return (
        <div>
            {
                numOfCake.map(item => <h2>num of cake lllllll {item.numOfCake}</h2>)
            }
            {/* <h2>num of cake {numOfCake}</h2> */}
            <button onClick={()=>dispatch(buyCake())}>buy cake </button>
        </div>
    );
}

export default HooksCakeContainer;

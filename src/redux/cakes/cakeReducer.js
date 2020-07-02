import {BUY_CAKE,CREATE_CAKE,DELETE_CAKE} from './cakeType'
const intialState={
       cakes:[
        { id:1,
        name:'chocolet cake',
        type:'fasting',
        numOfCake:10
       },
       { id:2,
        name:'chocolet cake',
        type:'fasting',
        numOfCake:10
       },
    { 
        id:3,
    name:'chocolet cake',
       type:'fasting',
        numOfCake:10
        }
       ],
}

const reducer = (state = intialState,action)=>{
    const {type,payload} = action
       console.log('from reducer ', action.payload)
     switch(type){
        case BUY_CAKE:{
            return{
                ...state,
                cakes:state.cakes.map(item => 
                    {  if(item.id === parseInt(payload,10)) {
                       return { ...item,numOfCake:item.numOfCake - 1} 
                    } else{
                        return item
                    }
                         })
            }
        }
        case  DELETE_CAKE:{
            return {
                ...state,
                cakes:state.cakes.filter(itme => itme.id !== parseInt(payload,10))
               
            }
        }
        case CREATE_CAKE :{
             return {
                 ...state,
                 cakes:[...state.cakes , action.payload] 
             }
        }
        default:return state
     }
    }
export default reducer
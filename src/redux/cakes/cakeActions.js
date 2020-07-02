import {BUY_CAKE,CREATE_CAKE,DELETE_CAKE} from './cakeType'

export const buyCake=(id)=>{
    return {
        type:BUY_CAKE,
        payload:id
    }
}
export const createCake=(post)=>{
    return {
        type:CREATE_CAKE,
         payload:post
    }
}
export const deleteCake =(id)=>{
    return {
        type:DELETE_CAKE,
        payload:id
    }
}



export function add(num){

    return {
        type:"ADD",
        payload:num
    }

}


export function subtract(num){

    return {
        type:"SUB",
        payload:num
    }

}




export function reset(){

    return {
        type:"RESET",
        payload:0

    }

}




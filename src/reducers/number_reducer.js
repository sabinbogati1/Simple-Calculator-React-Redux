export default function (state=0,action){


    switch (action.type){
        case "ADD":
        return state+ action.payload;

        case "SUB":
        return state- action.payload;


        case "RESET":
        return 0 ;



   }

    return state;






}
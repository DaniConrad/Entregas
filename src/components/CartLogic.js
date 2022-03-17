import React from "react";
import Cards from './Cards';

const Logic = () =>{
   const [Count, SetItem] = useState(0);

    const addItem = (prop) =>{
        if (prop === '+') {
            SetItem(Count +1);
        }else{
            SetItem(Count -1);
        }
    } 
}

export default Logic;

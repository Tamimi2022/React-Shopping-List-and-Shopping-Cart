import React from "react";

function ListItem({item, clickItem, showQuantities}) { //Change from props
    console.log(item, clickItem);
    return(
        
        <li key={item.id} 
        className="list-item" 
        onClick={clickItem} 
        value={item.title}>

           <div>{item.title}</div>
           {showQuantities && (
               <div className="item-amount">Amount: {item.amount}</div>
           )}
        </li>
        
    )
}
export default ListItem
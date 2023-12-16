import React from "react";

function List(props) {
  const { toDos,delteOneItem } = props.props;

  return (
    <>
      {toDos.map((item,ind) => {
        return (
        <li key={item+ind} >
            <div className="chbxdiv">
              <input type="checkbox" />
              <p>{item}</p>
            </div>
            <div className="listDiv">
              <i className="fa-regular fa-pen-to-square"></i>
              <i onClick={()=>delteOneItem(ind)} className="fa-solid fa-trash"></i>
            </div>
         </li> 
        );
      })}
      
      </>
    
  );
}

export default List;

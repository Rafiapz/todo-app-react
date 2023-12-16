import React from "react";

function List(props) {
  const { toDos, delteOneItem, checkedfn } = props.props;

  return (
    <>
      {toDos.map((item, ind) => {
        return (
          <li className="listMain" key={item + ind}>
            <div className="chbxdiv">
              <input
                checked={item.status}
                onClick={(event) =>
                  event.target.checked
                    ? checkedfn(item, true)
                    : checkedfn(item, false)
                }
                type="checkbox"
              />
              <p>{item.item}</p>
            </div>
            <div className="listDiv">
              <i className="fa-regular fa-pen-to-square"></i>
              <i
                onClick={() => delteOneItem(ind)}
                className="fa-solid fa-trash"
              ></i>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default List;

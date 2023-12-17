import React from "react";
import EditForm from "../Form/EditForm";

function List(props) {
  const { toDos, delteOneItem, checkedfn, editTodo } = props.props;

  return (
    <>
      {toDos.map((item, ind) =>
        item.isEditing ? (
          <EditForm
            key={ind + item}
            props={props.props}
            value={item.item}
            index={ind}
          />
        ) : (
          <li
            className={item.status ? "listMain lmchecked" : "listMain"}
            key={item + ind}
          >
            <div className="chbxdiv">
              <input
                checked={item.status}
                onChange={(event) =>
                  event.target.checked
                    ? checkedfn(item, true)
                    : checkedfn(item, false)
                }
                type="checkbox"
              />
              <p>{item.item}</p>
            </div>
            <div className="listDiv">
              <button disabled={item.status} onClick={() => editTodo(ind)}>
                <i className="fa-regular fa-pen-to-square"></i>
              </button>
              <button disabled={item.status} onClick={() => delteOneItem(ind)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        )
      )}
    </>
  );
}

export default List;

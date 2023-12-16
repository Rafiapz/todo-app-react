import React from 'react'

function Form(props) {

 const {item,itemsSetting,addItem}=props.props

  return (
    <form action="">
    <input type="text"  value={item} onChange={itemsSetting} placeholder="Enter taks here...." />
    <button className="btnn" onClick={addItem} type="submit" >
      Add
    </button>
  </form>

  )
}

export default Form
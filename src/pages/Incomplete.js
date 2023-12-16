import React,{useEffect} from 'react'

function Incomplete(props) {

    const { toDos } = props.props;

    useEffect(() => {});
    return (
      <div className="completedDiv">
        <h1>Completed Tasks</h1>
        <ol className="olofCompleted" >
          {toDos.map((obj,ind)=>(
              !obj.status?<li key={Date.now()+ind+obj} >{obj.item}</li>:null
          ))}
        </ol>
      </div>
    );



}

export default Incomplete
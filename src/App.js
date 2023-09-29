import { useState } from 'react';

function App() {
  var [array,setArray] = useState([{id:1,title:"John"}])

  var [enteredv,setEnteredv] = useState("")
  var [updatev,setupdatedv] = useState("")

  //handle input change
  function handlechange(e)
  {
    setEnteredv(e.target.value)
  }

  // Addition
  function addItem()
  {
    setArray([...array,{id:array.length+1,title:enteredv}])
    setEnteredv("")
  }

  //Deletion
  function deleteItem(id)
  {
    var temp = array.filter(function(item){
      if(item.id!==id)
      {
        return true
      }
    })
    setArray(temp)
  }


  return (
    <div>
      {/* ------------------------ENTER AN ELEMENT TO ADD---------------------------------------- */}
      <input value={enteredv} onChange={handlechange}></input> 
      <button onClick={addItem}>ADD</button>
      {/* ------------------------VIEW EVERY ITEM IN AN ARRAY------------------------------------- */}
      <div>
        {array.map(function(arrayItem,index){
          return (
          <div key={index}>
             <span>{arrayItem.title}</span>
             <button onClick={()=>deleteItem(arrayItem.id)}>Delete</button>
          </div>)
        })}
      </div>
    </div>
  );
}
export default App;

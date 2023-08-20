import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [groupby, setGroupby] = useState("status");
  const [orderby, setOrderby] = useState("priority");

  function handleChange(event){
    if(event.target.id === "group"){
      setGroupby(event.target.value);
    }else{
      setOrderby(event.target.value);
    }
  }

  return (
    <div className="App">
      <div className='select'>
      <label>Grouping :</label>
      <select id="group" value={groupby} onChange={handleChange}>
        <option value="status">Status</option>
        <option value="users">Users</option>
        <option value="priority">Priority</option>
      </select>

      <label>Ordering :</label>
      <select id="order" value={orderby} onChange={handleChange}>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
      <Board group={groupby} order={orderby} />
    </div>
  );
}

export default App;
import React, { useState } from 'react'

import './App.css';
import Task from './svg/task-svgrepo-com.svg'


function App() {

  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {

    if (!item) {
      alert('There must be an item')
      return;
    }

    const newItem = {
      id: Math.floor(Math.random() * 1000),
      value: item
    };
    setItems(oldList => [...oldList, newItem]);
    setItem('');
    console.log(items);
  }

  const deleteItem = (id) => {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }

  return (
    <>
      {/*Header*/}
      <div className='div-todo-header'>
        <h1 className='h1-todo'>To Do List App</h1>
        <img className='todo-svg' src={Task} alt="Todo svg" />
      </div>

      {/*Add a task*/}
      <div className='div-input'>
        <input
          type="text"
          placeholder='Add an item here...'
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
      </div>

      {/*List*/}
      <div className='div-ul'>
        <ul>

          {items.map(i => {
            return (
              <>
                <li key={i.id}>
                  {i.value}
                  <button className='delete-button' onClick={() => deleteItem(i.id)}>❌</button>
                </li>
              </>
            )
          })}

        </ul>
      </div>
    </>
  );
}

export default App;

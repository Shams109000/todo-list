import React, { memo, useState, useEffect } from 'react';
import './Service.css'
function Service() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    let getFromLS = JSON.parse(localStorage.getItem('list'));
    getFromLS && setList(getFromLS);
  }, []);

  useEffect(() => {
    list?.length > 0 && localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  function AddData() {
    if (!name) {
      alert('Please write something');
    } else {
      const data = {
        id: Math.random(),
        name: name,
      };
      setList([data, ...list]);
      setName('');
    }
  }

  function Delete(id) {
    const del = list.filter((val) => {
      return val.id !== id;
    });
    setList(del);
  }

  function Update(id) {
    setToggle(false);
    const upd = list.filter((val) => {
      return val.id === id;
    });
    setName(upd[0].name);
    setEdit(id);
  }

  function UpdateData() {
    const fullyupdate = list.map((val) => {
      if (val.id === edit) {
        val.name = name;
      }
      return val;
    });
    setList(fullyupdate);
    setEdit(null);
    setName('');
    setToggle(true);
  }

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {toggle ? (
        <button className='btn btn-dark' onClick={AddData}>Add Task</button>
      ) : (
        <button onClick={UpdateData}>Update Task</button>
      )}

      <div className="task-list">
        {list && list.length > 0 ? (
          list.map((val) => {
            return (
              <div className="task-item" key={val.id}>
                <h5>{val.name}</h5>
                <button onClick={() => Delete(val.id)}>Delete</button>
                <button onClick={() => Update(val.id)}>Edit</button>
              </div>
            );
          })
        ) : (
          <p>No tasks yet</p>
        )}
      </div>
    </div>
  );
}

export default memo(Service);

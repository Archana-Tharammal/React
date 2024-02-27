
/*import './Style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

import React, { useState } from "react";
import ReactDOM from "react-dom/client";


import Counter from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Component1 from './UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Component1 />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Ref';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);

import {useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./UseCallback";

const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    
    const increment =() => {
    setCount((c) => c+1);
};
const addTodo =useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
},[todos]);

return (
    <>
        <Todos todos={todos} addTodo={addTodo} />
    
    <hr />
    <div>
        Count: {count}
        <button onClick={increment}>+</button>
    </div>
    </>
);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./UseCallback";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './UseMemo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Home = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setData(data));
   }, []);
  
    return (
      <>
        {data &&
          data.map((item) => {
            return <p key={item.id}>{item.title}</p>;
          })}
      </>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Home />);
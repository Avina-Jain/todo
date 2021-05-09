import logo from './logo.svg';
import React from 'react';
import './App.css';
import TodoList from './components/TodoList'
import Tabs from './components/Tabs'
import './components/TodoList.css'

function App() {
  return (
    <div className="App">
      <TodoList />
      <Tabs />
    </div>
  );
}

export default App;

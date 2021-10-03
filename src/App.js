import TodoList from './TodoList/TodoList';

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
// const store = configureStore({
// 	reducer: '',
// 	middleware: [...getDefaultMiddleware(),sagaMiddleware]
// })




function App() {

  return (
    <>
      <TodoList />
    </>
  );
}

export default App;

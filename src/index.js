import React from "react";
import ReactDOM from "react-dom";
import TodoApp, {todoApp} from './App'
import { Provider } from 'react-redux';
import { createStore } from "redux";

ReactDOM.render(
    <Provider store={createStore(todoApp)}>
        <TodoApp/>
    </Provider>,
    document.getElementById("root")
);

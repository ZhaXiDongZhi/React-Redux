import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Routerindex from './router';
import  reducers from "./redux/reducre"
import { createStore } from "redux";
let  store = createStore(reducers);

  export default class IndexRouter extends React.Component{
     render(){
     	return(
           <Provider store={store}>
     		 <Routerindex></Routerindex>
     		</Provider>
     	)
     }
  }

ReactDOM.render(<IndexRouter/>, document.getElementById('root'));


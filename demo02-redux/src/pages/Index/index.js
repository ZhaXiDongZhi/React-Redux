import React from 'react';
import { connect } from 'react-redux';
import Todolist from "../todolist";
 class index extends React.Component{

  constructor(props){
    super(props);

  }


	render(){
    let {inputVal,list,onchange,onclickAdd,itemIndex} = this.props;
		return (
			<div>
        <Todolist
          inputVal = {inputVal}
          list = {list}
          onchange = {onchange}
          onclickAdd = {onclickAdd}
          itemIndex = {itemIndex}
        />
			</div>
		)
	}
};

const propslist = (state)=>{
     return {
        inputVal:state.inputVal,
        list:state.list
     }
}

const propsdispatch = (dispatch)=>{
     return {
        onchange(e){
          let action = {
                type:'todolist',
                value:e.target.value
              }
          dispatch(action)
        },
        onclickAdd(){
          let action = {
                type:'datalist'
              }
          dispatch(action)
        },
        itemIndex(index) {
           let action = {
            type:'listIndex',
            index
           }
           dispatch(action)
        }
     }
}

export default connect(propslist,propsdispatch)(index)

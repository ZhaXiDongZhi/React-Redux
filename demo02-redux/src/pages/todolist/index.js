import React from 'react';
import { Button ,Input ,List} from 'antd';
import 'antd/dist/antd.css';

const Todolist  = (props)=>{
    let {inputVal,list,onchange,onclickAdd,itemIndex} = props;

    return (

      <div>
           <div style={{width:"400px",margin:'0 auto'}}>
             <div style={{margin:"10px"}}>
                    <Input type="text"
                      placeholder={inputVal}
                      style={{width:'250px',marginRight:'10px'}}
                      onChange = {onchange}
                     /> 
                     <Button type="primary" onClick = {onclickAdd}>增加</Button> 
             </div>
             <div>
               <List
                 bordered
                 dataSource = {list}
                 renderItem = {(item,index) =>(
                    <List.Item onClick={()=>{itemIndex(index)}}>
                        {item}
                    </List.Item>)}
                 />
             </div>
           </div>
      </div>
      
    )
}

export default  Todolist;
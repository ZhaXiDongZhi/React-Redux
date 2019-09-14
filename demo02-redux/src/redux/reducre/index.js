const data = {
	inputVal:'zhaxi',
	list:["a","b"]
}

export default function reducre(state=data,action){
	console.log(action.index);
	switch(action.type){
		case "todolist": 
				let  newVal = JSON.parse(JSON.stringify(state));
			   	newVal.inputVal = action.value;
		  		return newVal;
		case "datalist": 
				let  newVal2 = JSON.parse(JSON.stringify(state));
			   	newVal2.list.push(newVal2.inputVal)
		  		return newVal2;
		case "listIndex": 
				let  newVal3 = JSON.parse(JSON.stringify(state));
			   	     newVal3.list.splice(action.index,1)
		  		return newVal3;
		   		default:
		     	 	return state;
	}
}
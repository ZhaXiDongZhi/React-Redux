import  React  from "react"
import { HashRouter as Router,Route,Switch } from "react-router-dom"
import home from "./pages/Index"

export default class IndexRouter extends React.Component{
	render(){
		return(
			<Router>
			    <Switch>
			      <Route path="/" component={home}/>
			    </Switch>
			</Router>
			)
	}
}

import React , {Component} from 'react';
import CardList from '../com/CardList';
import SearchBox from '../com/SearchBox';
import Scroll from '../com/Scroll';
import './App.css'


class App extends Component{                        //React.Component
	constructor(){
		super();
		this.state = {
			robots: [],
			searchfield:''
		}
	}

	onSearchChange = (event)=> {
         this.setState({searchfield:event.target.value});
        // console.log(filteredRobots);
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		  .then(response =>{
		  	return response.json();
		  })
		  .then(users => {
		  	return this.setState({robots:users});
		  });
		// this.setState({robots:robots});
	}
	render(){
         
	     const filteredRobots = this.state.robots.filter(
	         (robot) =>{
	         	return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	         } 
	     	);
	    if(this.state.robots.length === 0){
	    	return <h1>Loading...</h1>
	    }else{
	    	return(<div className='tc'>
				<h1 className='f1' >ROBO FRIENDS</h1>
				<SearchBox onSearchChange={this.onSearchChange}/>
	            <Scroll>
	            <CardList robots={filteredRobots}/>
	            </Scroll>
           </div>);
          }
	    }
		
 }
	

export default App;
// const App = ()=>{
// 	return(<div className='tc'>
// 				<h1>ROBO FRIENDS</h1>
// 				<SearchBox/>
// 	            <CardList robots={robots}/>
//            </div>);
// }

// export default App;
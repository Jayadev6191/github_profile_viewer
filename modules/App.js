import React from 'react'
import d3 from 'd3'
import Navbar from '../components/Navbar'
import Main from '../components/Main'


export default React.createClass({
  getInitialState: function(){
    return{
        page: 'home'
    }
  },
  componentWillMount: function(){
    console.log("component will mount","hi");
  },
  componentDidMount: function(){
    console.log("component did mount","hi");
  },
  render() {
    console.log("render");
    return (
    	<div>
    		<Navbar color="dark" brand="Github Profile Viewer"/>
        <Main/>
    	</div>
    )
  }
})

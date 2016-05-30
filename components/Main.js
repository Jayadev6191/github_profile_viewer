import React from 'react'
import { render } from 'react-dom'
import Profile from './Profile'

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username: 'Jayadev6191',
      userData: [],
      userRepos: [],
      perPage: 5

    }
  }
  getUserData(){
    $.ajax({
      url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType:"json",
      cache: false,
      success:function(data){
        this.setState({userData: data})
        console.log(data);
      }.bind(this),
      error:function(xhr, status, err){
        alert(err)
      }.bind(this)
    });
  }

  componentWillMount(){
    console.log("component will mount","hi");
  }
  componentDidMount(){
    console.log("component did mount","hi");
    this.getUserData()
  }
  render() {
    return (
      <div id="main">
        <div className="container">
          <div className="row">
            <Profile userData={this.state.userData}/>
          </div>
        </div>
      </div>
    )
  }
}

Main.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};

Main.defaultProps = {
  clientId: "d20cce4879d5d9fa997d",
  clientSecret: "be505a98d5d04b8120589fe5b099e2dccdeb9ec7"
};


export default Main;

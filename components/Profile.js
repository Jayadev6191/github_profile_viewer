import React from 'react'
import { render } from 'react-dom'

class Profile extends React.Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <div className="panel-title">
          {this.props.userData.name}
          </div>
        </div>
        <div className="panel-body">
          <div className="row">
              <div className="col-md-4">
              <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}}/>
              </div>
              <div className="col-md-8">
                <div className="row">
                    <div className="col-md-12" id="buttons">
                      <span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                      <span className="label label-success">{this.props.userData.public_gists} Gists</span>
                      <span className="label label-info">{this.props.userData.followers} Followers</span>
                      <span className="label label-danger">{this.props.userData.following} Following</span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">
                            <li className="list-group-item"><strong>Username: </strong>{this.props.userData.name}</li>
                            <li className="list-group-item"><strong>Location: </strong>{this.props.userData.location}</li>
                            {(() => {
                              let email;
                              if(this.props.userData.email){
                                  email = '<li className="list-group-item"><strong>Email Address: </strong>{this.props.userData.email}</li>'
                              }
                            })()}
                        </ul>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;

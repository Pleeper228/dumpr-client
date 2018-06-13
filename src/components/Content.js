import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {LoginForm} from './LoginForm'
import {Bathrooms} from './Bathrooms'
import {BathroomDetails} from './BathroomDetails'
import {UpdateBathroomForm} from './UpdateBathroomForm'
import {DeleteBathroom} from './DeleteBathroom'
import {Users} from './Users'
import {CreateUserForm} from './CreateUserForm'
import {CreateBathroomForm} from './CreateBathroomForm'
import {SignOut} from './SignOut'

export class Content extends React.Component {
  render() {
    return (
      <div className='content'>
        <Route path='/app/signup' component={() => <CreateUserForm handleCreateUser={this.props.handleCreateUser} />} />
        <Route path='/app/login' component={() => <LoginForm isAuthenticated={this.props.isAuthenticated} onSuccess={this.props.handleLoginSuccess}/>} />
        <Route path='/app/createbathroom' component={() => <CreateBathroomForm error={this.props.error} handlePost={this.props.handlePost} />} />
        <Route path='/app/bathrooms' component={() => <Bathrooms bathrooms={this.props.bathrooms} />} />
        <Route path='/app/details/:bathroomId' component={(props) => <BathroomDetails bathrooms={this.props.bathrooms} routeProps={props}/>} />
        <Route path='/app/update/:bathroomId' component={(props) => <UpdateBathroomForm error={this.props.error} handlePut={this.props.handlePut} bathrooms={this.props.bathrooms} routeProps={props}/>} />
        <Route path='/app/delete/:bathroomId' component={(props) => <DeleteBathroom error={this.props.error} handleDelete={this.props.handleDelete} routeProps={props} />} />
        <Route path='/app/users' component={() => <Users users={this.props.users} />} />
        <Route path='/app/signout' component={() => <SignOut logout={this.props.logout} />} />
      </div>
    )
  }
}

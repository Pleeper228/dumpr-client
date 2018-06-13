import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import {getHeaders, handleErrors} from '../api/fetchDefaults'
import {setAuthHeader} from '../api/fetchDefaults'
import {Header} from './Header'
import {Subheader} from './Subheader'
import {Splash} from './Splash'
import {Content} from './Content'
import {Bathrooms} from './Bathrooms'
import {BathroomDetails} from './BathroomDetails'
import {Users} from './Users'
import {CreateUserForm} from './CreateUserForm'
import {CreateBathroomForm} from './CreateBathroomForm'
import {UpdateBathroomForm} from './UpdateBathroomForm'
import {DeleteBathroom} from './DeleteBathroom'
import {LoginForm} from './LoginForm'
import {LogoutButton} from './LogoutButton'
import {Footer} from './Footer'
import api from '../api'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bathrooms: [],
      users: [],
      isAuthenticated: false,
      currentUser: {},
      currentView: 'bathrooms',
      errorOrRedirect: ''
    }
    this.handleLoginSuccess = this.handleLoginSuccess.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handlePost = this.handlePost.bind(this)
    this.handlePut = this.handlePut.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    let username = localStorage.getItem('username')
    let password = localStorage.getItem('password')

    if (username && password) {
      api.users.logIn(username, password)
      .then(user => {
        setAuthHeader(username, password)
        this.setState({
          isAuthenticated: true,
          currentUser: user
        })
      })
      .catch(err => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')
      })
    }

    fetch('https://dumpr-server.herokuapp.com/api/v1/bathrooms/')
    .then(res => res.json())
    .then(res => {
      this.setState({
        bathrooms: res
      })
    })

    fetch('https://dumpr-server.herokuapp.com/api/v1/users/')
    .then(res => res.json())
    .then(res => {
      this.setState({
        users: res
      })
    })
  }

  changeView() {

  }

  handleLoginSuccess(credentials, user) {
    api.setAuthHeader(credentials.username, credentials.password)
    localStorage.setItem('username', credentials.username)
    localStorage.setItem('password', credentials.password)
    this.setState({
      isAuthenticated: true,
      currentUser: user
    })
  }

  logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
    this.setState({
      isAuthenticated: false,
      currentUser: {}
    })
  }

  handleUserSubmit(event) {
    event.preventDefault()
    console.log('heyyoooo')

    var data = new FormData(event.target)
    fetch('https://dumpr-server.herokuapp.com/api/v1/users/', {
      method: 'POST',
      body: JSON.stringify({
        user_name: data.get('username'),
        password: data.get('password')
      }),
      headers: new Headers({"Content-Type": "application/json"}),
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({
          errorOrRedirect: res.message
        })
      } else {
        console.log('heyyoooo')
        window.location = 'https://dumpr-client.herokuapp.com//app/login'
        // this.setState({
        //   response: <Redirect to='/app/login' />
        // })
      }
    })
  }

  handlePost(event) {
    event.preventDefault()
    let currentBathrooms = this.state.bathrooms
    var data = new FormData(event.target)
    fetch('https://dumpr-server.herokuapp.com/api/v1/bathrooms/', {
      method: 'POST',
      body: JSON.stringify({
        establishment_name: data.get('establishment_name'),
        address: data.get('address'),
        photo_url: data.get('photo_url'),
        description: data.get('description'),
        rating: parseFloat(data.get('rating'))
      }),
      headers: getHeaders()
    })
    // .then(handleErrors)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({
          errorOrRedirect: 'You need to be logged in to update a bathroom!'
        })
      } else {
        window.location = 'https://dumpr-client.herokuapp.com/app/bathrooms'
        // this.setState({
        //   errorOrRedirect: <Redirect to='/app/bathrooms' />
        // })
      }
    })
  }

  handlePut(event, bathroomId) {
    event.preventDefault()

    let currentBathroom = this.state.bathrooms.filter(bathroom => bathroom.id == bathroomId)
    let data = new FormData(event.target)

    fetch(`https://dumpr-server.herokuapp.com/api/v1/bathrooms/${bathroomId}`, {
      method: 'PUT',
      body: JSON.stringify({
        establishment_name: data.get('establishment_name'),
        address: data.get('address'),
        photo_url: data.get('photo_url'),
        description: data.get('description'),
        rating: parseFloat(data.get('rating'))
      }),
      headers: getHeaders()
    })
    // .then(handleErrors)
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({
          errorOrRedirect: 'You need to be logged in to update a bathroom!'
        })
      } else {
        currentBathroom.establishment_name = data.get('establishment_name')
        currentBathroom.addres = data.get('address')
        currentBathroom.photo_url = data.get('photo_url')
        currentBathroom.description = data.get('description')
        currentBathroom.rating = data.get('rating')

        window.location = 'https://dumpr-client.herokuapp.com/app/bathrooms'
        // this.setState({
        //   errorOrRedirect: <Redirect to='/app/bathrooms' />
        // })
      }
    })
  }

  handleDelete(event, bathroomId) {
    let currentBathrooms = this.state.bathrooms
    let currentBathroom = currentBathrooms.filter(bathroom => bathroom.id == bathroomId)
    let currentIndex = currentBathrooms.indexOf(currentBathroom[0])

    event.preventDefault()
    fetch(`https://dumpr-server.herokuapp.com/api/v1/bathrooms/${bathroomId}`, {
      method: 'DELETE',
      headers: getHeaders()
    })
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        this.setState({
          errorOrRedirect: 'You need to be logged in to delete a bathroom!'
        })
      } else {
        currentBathrooms.splice(currentIndex, 1)
        this.setState({
          bathrooms: currentBathrooms
        })
        window.location = 'https://dumpr-client.herokuapp.com/app/bathrooms'
      }
    })
  }

  render() {
    return (
      <Router>
        <div className='app'>
          <Route path='/' component={() => <Header isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser}  logout={this.logout} />} />
          <Route path='/app' component={() => <Subheader currentView={this.state.currentView} isAuthenticated={this.state.isAuthenticated} />} />
          <Route exact path='/' component={Splash} />
          <Route path='/app' component={() => <Content error={this.state.errorOrRedirect} handleCreateUser={this.handleUserSubmit} handleDelete={this.handleDelete} handlePost={this.handlePost} handlePut={this.handlePut} isAuthenticated={this.state.isAuthenticated} handleLoginSuccess={this.handleLoginSuccess} bathrooms={this.state.bathrooms}
          users={this.state.users} logout={this.logout}/>} />
          <Route path='/' component={Footer} />
        </div>
      </Router>
    )
    // (
    //   <div className="App">
    //     {this.renderHeader()}
    //     <main className='content container'>
    //       <BathroomsContainer bathrooms={this.state.bathrooms} />
    //       <LoginForm onSuccess={this.handleLoginSuccess}/>
    //       <LogoutButton logout={this.logout}/>
    //       {/* <CreateBathroomForm /> */}
    //     </main>
    //   </div>
    // );
  }
}

export default App;

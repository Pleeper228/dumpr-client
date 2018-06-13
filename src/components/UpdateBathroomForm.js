import React from 'react'
import{getHeaders} from '../api/fetchDefaults'
import {Route, Redirect} from 'react-router-dom'
import './update-bathroom-form.css'

export class UpdateBathroomForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      responseOrRedirect: null
    }
    this.handlePut = this.handlePut.bind(this)
  }

  renderUpdateForm() {
    let currentBathroom = this.props.bathrooms.filter(bathroom => bathroom.id == this.props.routeProps.match.params.bathroomId)
    if (currentBathroom[0]) {
      return (
        <div className='update-bathroom-container'>
          <h2>Updating {currentBathroom[0].establishment_name}</h2>
          <form className='update-bathroom-form' onSubmit={(event) => this.props.handlePut(event, this.props.routeProps.match.params.bathroomId)}>
            <div className='input-wrapper'>
              <label htmlFor='establishment_name'>Establishment Name</label>
              <input name='establishment_name' type='text' defaultValue={currentBathroom[0].establishment_name} required></input>
              <label htmlFor='address'>Address</label>
              <input name='address' type='text' defaultValue={currentBathroom[0].address} required></input>
              <label htmlFor='photo_url'>Photo URL</label>
              <input name='photo_url' type='text' defaultValue={currentBathroom[0].photo_url} required></input>
              <label htmlFor='description'>Description</label>
              <textarea name='description' rows='7' defaultValue={currentBathroom[0].description} required></textarea>
              <label htmlFor='rating'>Rating</label>
              <input name='rating' type='number' step='0.1' min='0' max='10' defaultValue={currentBathroom[0].rating} required></input>
              <input type='submit' value='Save'></input>
            </div>
          </form>
          <div className='error-msg'>{this.props.error}</div>
        </div>
      )
    } else {
      return <p>Loading...</p>
    }
  }

  handlePut(event) {
    event.preventDefault()
    var data = new FormData(event.target)
    fetch(`https://dumpr-server.herokuapp.com/api/v1/bathrooms/${this.props.routeProps.match.params.bathroomId}`, {
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
          responseOrRedirect: 'You need to be logged in to update a bathroom!'
        })
      } else {
        this.setState({
          responseOrRedirect: <Redirect to='/app/bathrooms' />
        })
      }
    })
  }

  render() {
    return (
      this.renderUpdateForm()
    )
  }
}

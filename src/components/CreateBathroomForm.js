import React from 'react'
import {getHeaders, handleErrors} from '../api/fetchDefaults'
import {Route, Redirect} from 'react-router-dom'
import './create-bathroom-form.css'

export class CreateBathroomForm extends React.Component {
  render() {
    return (
      <div className='create-bathroom-container'>
        <div>Create New Bathroom</div>
        <form className='create-bathroom-form' onSubmit={this.props.handlePost}>
          <div className='input-wrapper'>
            <label htmlFor='establishment_name'>Establishment Name</label>
            <input name='establishment_name' type='text' required></input>
            <label htmlFor='address'>Address</label>
            <input name='address' type='text' required></input>
            <label htmlFor='photo_url'>Photo URL</label>
            <input name='photo_url' type='text' required></input>
            <label htmlFor='description'>Description</label>
            <textarea name='description' rows='7' required></textarea>
            <label htmlFor='rating'>Rating</label>
            <input name='rating' type='number' step='0.1' min='0' max='10' required></input>
            <input type='submit' value='Add'></input>
          </div>
        </form>
        <div className='error-msg'>{this.props.error}</div>
        {this.props.error}
      </div>
    )
  }
}

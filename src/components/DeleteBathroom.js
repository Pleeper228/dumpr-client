import React from 'react'
import{getHeaders} from '../api/fetchDefaults'
import {Route, Redirect} from 'react-router-dom'
import './delete-bathroom.css'

export class DeleteBathroom extends React.Component {
  render() {
    return (
      <div className='delete-container'>
        <h1 className='confirm-delete'>Are you sure you want to delete this bathroom?</h1>
        <button className='delete-button' onClick={(event) => this.props.handleDelete(event, this.props.routeProps.match.params.bathroomId)}>Confirm Delete</button>
        <div className='error-msg'>{this.props.error}</div>
      </div>
    )
  }
}

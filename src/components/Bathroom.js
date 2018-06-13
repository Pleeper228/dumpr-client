import React from 'react'
import {Link} from 'react-router-dom'
import './bathroom.css'

export class Bathroom extends React.Component {
  render () {
    return (
      <Link to={{pathname:'/app/details/' + parseInt(this.props.bathroom.id), query: this.props.bathroom}}>
        <div className='bathroom'>
          <img src={this.props.bathroom.photo_url} alt='' />
          <div className='bathroom-details-preview'>
            <h3>{this.props.bathroom.establishment_name}</h3>
            <p>{this.props.bathroom.address}</p>
            <p>Rating: {this.props.bathroom.rating}/10</p>
          </div>
        </div>
      </Link>
    )
  }
}

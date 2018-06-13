import React from 'react'
import {Bathroom} from './Bathroom'

export class BathroomsContainer extends React.Component {
  render () {
    return (
      <div className='bathrooms-container'>
        <h2>Bathrooms</h2>
        <div className='bathrooms'>
          {this.props.bathrooms.map((bathroom, index) => {
            return <Bathroom key={index} bathroom={bathroom} />
          })}
        </div>
      </div>
    )
  }
}

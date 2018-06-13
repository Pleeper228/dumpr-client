import React from 'react'
import {BathroomsContainer} from './BathroomsContainer'

export class Bathrooms extends React.Component {
  render() {
    return (
        <BathroomsContainer bathrooms={this.props.bathrooms}/>
    )
  }
}

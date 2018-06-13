import React from 'react'
import {Link} from 'react-router-dom'
import './bathroom-details.css'


export class BathroomDetails extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     bathroom: []
  //   }
  //   this.getBathroom = this.getBathroom.bind(this)
  // }

  // componentDidMount() {
    // this.getBathroom()
    // fetch(`http://localhost:3000/api/v1/bathrooms/${this.props.match.params.bathroomId}`)
    // .then(res => res.json())
    // .then(res => {
    //   this.setState({
    //     bathroom: res
    //   })
    // })
  // }
  //
  // getBathroom() {
  //
  // }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  renderDetails() {
    let currentBathroom = this.props.bathrooms.filter(bathroom => bathroom.id == this.props.routeProps.match.params.bathroomId)
    if (currentBathroom[0]) {
      return (
        <div className='bathroom-details-container'>
          <div className='details-img-wrapper'>
            <img className='bathroom-details-img' src={currentBathroom[0].photo_url} alt=''/>
          </div>
          <div className='bathroom-details'>
            <h1 className='bathroom-details-name'>{currentBathroom[0].establishment_name}</h1>
            <p className='bathroom-details-address'>{currentBathroom[0].address}</p>
            <p className='bathroom-details-description'>{currentBathroom[0].description}</p>
            <p className='bathroom-details-rating'>{currentBathroom[0].rating} / 10 Stars</p>
            <div className='bathroom-details-buttons'>
              <Link to={{pathname:'/app/update/' + parseInt(this.props.routeProps.match.params.bathroomId), query: currentBathroom}}><button className='update-button'>Make Changes</button></Link>
              <Link to={'/app/delete/' + parseInt(this.props.routeProps.match.params.bathroomId)}><button className='delete-button'>Delete Bathroom</button></Link>
            </div>
          </div>
        </div>
      )
    } else {
      return <p>Couldn't find bathroom details!</p>
    }
  }

  displayUpdateForm(event) {
    event.preventDefault()

  }

  render() {
    return (
      <div>
        {this.renderDetails()}
      </div>
    )
  }
}

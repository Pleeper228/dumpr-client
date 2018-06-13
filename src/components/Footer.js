import React from 'react'
import './footer.css'

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-container'>
          <p>Copyright &copy; 2018</p>
          <nav className="social-media">
            <a href="#" className="fa fa-facebook"><span className="_hidden"></span></a>
            <a href="#" className="fa fa-twitter"><span className="_hidden"></span></a>
            <a href="#" className="fa fa-instagram"><span className="_hidden"></span></a>
          </nav>
        </div>
      </footer>
    )
  }
}

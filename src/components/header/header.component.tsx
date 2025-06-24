/* eslint-disable react/react-in-jsx-scope */
import { BsCart3 } from 'react-icons/bs'

import './header.styles.css'

const Header = () => {
  return (
    <div className="header-container">
      <h2 className="header-title">SEA THREAD</h2>

      <div className="header-items">
        <div className="header-item">Explore</div>
        <div className="header-item">Login</div>
        <div className="header-item">Sign-up</div>
        <div className="header-item">
          <BsCart3 size={25} />
          <p style={{ marginLeft: 26 }}>5</p>
        </div>
      </div>
    </div>
  )
}

export default Header
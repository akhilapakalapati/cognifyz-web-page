import './index.css'
import {Link} from 'react-router-dom'


const Navbar = () => (
  <>
  <div className="flex-box">
    <div className="nav-container">
      <img src="https://cognifyz.com/wp-content/uploads/2023/11/cognifyz-1.png" alt="Cognifyz" className="Cognifyz-img"/>
      <div className="nav-box">
        <Link to="/">
        <h1>Home</h1>
        </Link>
        <Link to="/about">
        <h1>About</h1>
        </Link>
        <Link to="/Service">
        <h1>Service</h1>
        </Link>
        <Link to="/Courses">
        <h1>Course</h1>
        </Link>
        <Link to="/Interships">
        <h1>Interships</h1>
        </Link>
        <Link to="/contact">
        <h1>Contact us</h1>
        </Link>
      </div>
    </div>
   </div>
  </>
)

export default Navbar

import './index.css'
import {Link} from 'react-router-dom'
import Navbar from '../Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-main-box">
        <div className='home-left-box'>
          <div>
            <h1 className="heading-Empowering">Empowering Futures, Transforming Careers.</h1>
            <br/>
            <h1 className="home-main-heading">Transforming the way of Education.</h1>
            <p className='para-home'>"Face challenges as opportunities, much like Cognifyz Technologies navigates
              innovation. With determination and belief in your potential, every hurdle
              becomes a stepping stone to success."</p>
          </div>
          <br/>
          <div>
          <Link to="/contact">
          <buttton className="btn-start">Get Start</buttton>
          </Link>
        </div>
        </div>
        <div className='home-right-box'>
        <img src="https://themexriver.com/wp/glox-demo/wp-content/uploads/2022/05/bn1.png" alt="home-img"/>
        </div>
      </div>
    </>
  )
}

export default Home
import Navbar from '../Navbar'
import './index.css'

const Contact=()=>{
    return(
        <>
        <Navbar/>
        <div className='main-background-contact'>
            <h1 className='heading-1-contact'>Contact Us</h1>
            <p>Start your journey with Cognifyz Technologies, where innovation meets your aspirations. Connect with us to initiate your plans and let's craft the future together!</p>
            <br/>
            <div className='eamil-box'>
                <h1>Get Start And Find Your Planing</h1>
                <p>What the producers meant, of course, was Two Weeks’ Notice. they learn nothing from A Hard Day’s Night?</p>
                <div className='row-1'>
                    <br/>
                    <img src="https://themexriver.com/wp/glox-demo/wp-content/uploads/2022/05/comment.svg"/>
                    <div>
                        <h1>Mail Address:</h1>
                        <p>cognifyztechnologies@gmail.com</p>
                    </div>
                </div>
                <div className='row-1'>
                    <br/>
                    <img src="https://themexriver.com/wp/glox-demo/wp-content/uploads/2022/05/location.svg"/>
                    <div>
                        <h1>Office Address:</h1>
                        <p>Nagpur, Maharashtra</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
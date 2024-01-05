import './index.css'
import Navbar from '../Navbar'


const About = () => {
    return (
        <>
        <Navbar/>
        <div>
            <h1 className='about-main'>About us</h1>
            <div className='about-part-1'>
                <div className='left-about'>
                    <img src="https://cognifyz.com/wp-content/uploads/2022/06/rocket-2.png" alt="about-img"/>
                </div>
                <div className='right-about'>
                    <h1 className='heading-1-about'>Innovate or Stagnate, Technology waits for no one</h1>
                    <br/>
                    <p>Cognifyz Technologies is a technology company that provides software solutions for businesses. The company offers a range of products and services, including artificial intelligence (AI), machine learning (ML), and data analytics tools.</p>
                    <br/>
                    <p>One of the main offerings of Cognifyz Technologies is their AI-powered chatbot platform, which can be integrated with various communication channels such as websites, social media, and messaging apps. The chatbot platform allows businesses to automate their customer support and engagement, reduce response time, and improve customer satisfaction.</p>
                    <br/>
                    <p>Cognifyz Technologies also provides ML-based solutions for predictive analytics, fraud detection, and recommendation engines. These tools help businesses to analyze large amounts of data and make data-driven decisions in real-time.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
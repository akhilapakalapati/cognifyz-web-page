import './index.css'
import Coursescard from '../Coursescard'
import Navbar from '../Navbar'


const CoursesList = [
    {
        id: 1,
        heading: "AI/ML Automation",
    },
    { 
        id: 2,
        heading: "Data & Analytics",
    },
];

const Courses=()=>{
    return(
        <>
        <Navbar/>
        <div className='main-background-service'><h1>Your Gateway to Limitless Learning</h1>
        <div>
        <ul className="products-list">
    {CoursesList.map(course => (
        <Coursescard key={course.id} CoursesListData={course} />
    ))}
</ul>
        </div>
        </div>
        </>
    )
}

export default Courses
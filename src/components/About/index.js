// Write your JS code here
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h1 className="heading">About Route</h1>
      <LogoutButton />
    </div>
  </>
)
export default About

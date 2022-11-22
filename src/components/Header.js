import TeacherLogo from '../img/brandLogo2.png';
import ChalkboardBG from '../img/chalkboard-1337809_1920.jpg';

const Header = () => {
    return (
        <div 
            className='main-header'
            style={{ 
                backgroundImage: `url(${ChalkboardBG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                paddingTop: '50px',
                paddingBottom: '75px'
            }}
        >
            <img className='main-logo mt-5' src={TeacherLogo} alt="logo brand" />
            <h1 className='mt-5'>THE TEACHERS' CLUB</h1>
        </div>
    )
}

export default Header
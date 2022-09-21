import TeacherLogo from '../img/brandLogo2.png';

const Header = () => {
    return (
        <div>
            <img className='main-logo mt-5' src={TeacherLogo} alt="logo brand" />
            <h1 className='mt-5'>THE TEACHERS' CLUB</h1>
        </div>
    )
}

export default Header
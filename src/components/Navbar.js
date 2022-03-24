import glob_icon from '../images/glob-icon.png';

export const Navbar = ()=>{
    return(
        <nav className="navbar">
            <img src={glob_icon} alt="global icon" className='nav__icon'/>
            <h3 className='nav_title'>my travel journal.</h3>
        </nav>
    )
};
import glob_icon from '../images/glob-icon.png';

export const Navbar = ()=>{
    return(
        <nav className="navbar">
            <img src={glob_icon} alt="global icon"/>
            <h3>my travel journal.</h3>
        </nav>
    )
};
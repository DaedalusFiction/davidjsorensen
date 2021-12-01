import daedalusLogo from '../images/logo.png';


const Header = () => {
    return (
        <div className="flex justify-between p-4 bg-green-600" id="home">
            <a href="#home"><img className="" src={daedalusLogo} alt="Nautilus shell" /></a>
            <ul className="flex header-list">
                <a className="text-xl font-semibold text-gray-100 hover:underline" href="#">Portfolio</a>
                <a className="text-xl font-semibold text-gray-100 hover:underline px-7" href="#">About Me</a>
                <a className="text-xl font-semibold text-gray-100 hover:underline" href="#">Contact</a>
                
                
            </ul>
        </div>
        
    )
}

export default Header

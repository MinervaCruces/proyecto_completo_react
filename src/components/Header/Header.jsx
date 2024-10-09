import './Header.css'
import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'


export default function Header(){
    return(
    <>
        <header className="cabezal">
            <div className='container mx'>
                <div className='logo'><Logo /></div>
                <div className='menunav'><Navbar /></div>
            </div>
        </header>
    </>)
}
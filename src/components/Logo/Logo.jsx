import './Logo.css'
export default function Logo(){
    const Logo = '../../../Public/Logo.png'
    return(
    <>
        <a href="/" className="milogo"><img src={Logo} alt="Logo"/></a>  
        <div className='text-logo'>
        <p>Murci Store</p>
        </div>
    </>)
}
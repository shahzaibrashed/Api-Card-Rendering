import './Navbar.css'

const Navbar = ({label})=>{
return(
    <div className='parentProduct'>
        <div className='NavbarLogo'><img src="https://qadam-shoes-app.web.app/qadam.logo.png" height='100%' width='100%' alt="No Image" /></div>

<div className='navImg'><i class="fa fa-shopping-cart" aria-hidden="true"></i><span>{label}</span></div>

    </div>
)
}
export default Navbar;
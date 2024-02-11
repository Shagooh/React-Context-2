import { NavLink } from 'react-router-dom'


const Navbar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? 'active' : 'inactive')

    return (
        <nav>
            <div className='links'>
                <NavLink to='/' className={`base ${setActiveClass}`}>Home</NavLink>
                <NavLink to='/pokemones' className={`base ${setActiveClass}`}>Pokemones</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
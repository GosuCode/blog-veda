import user from '../../assets/user.png'
import logo from '../../assets/logo.png'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../helpers/AuthContext'
import { useContext, useState } from 'react'
import User from './User'

const Navbar = () => {
    const [show, setShow] = useState(false);
    const { setSearch } = useContext(AuthContext)

    return (
        <>
            <nav className='flex fixed justify-between border-b z-10 border-slate-400 w-full px-4 md:px-28 bg-white'>
                <div className="flex gap-2">
                    <Link to={'/'} className='flex items-center'>
                        <img src={logo} alt="" className='h-14 rounded-full m-1 p-1' />
                        <span className='text-2xl font-bold'>WIRE.</span>
                    </Link>
                    <div className='md:grid items-center ml-3 hidden'>
                        <div className='flex w-[420px] h-10 px-2 py-[6px] border border-slate-400 rounded-sm'>
                            <input type="search" name="" id="" placeholder="Search..."
                                className='md:w-full focus:outline-none lg:w-50'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <FiSearch className='text-2xl' />
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        Welcome <strong className='uppercase'>User </strong>!
                    </div>
                    <div className='h-12 cursor-pointer grid items-center' onClick={() => setShow(!show)}>
                        <img src={user} alt="user-profile" className='h-full absolute rounded-full m-1 p-2' />
                    </div>
                </div>
            </nav>
            {show && <User />}
        </>
    )
}

export default Navbar

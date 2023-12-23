import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { auth, provider } from '../firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut, signInWithPopup } from 'firebase/auth'
import { Bars3BottomRightIcon, XMarkIcon, BeakerIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
  const signIn = async () =>{
    await signInWithPopup(auth, provider)
    .then(res=>{console.log(res); navigator("/")})
    .catch(err=>console.log(err))
  }
  let [open,setOpen]=useState(false);
  const [user] = useAuthState(auth)
  const logOut = async () => {
    await signOut(auth)
  }
  return (
    <div className='w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-15 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                <BeakerIcon className='w-7 h-7 text-[#c816f0]'/>
                <span>Image GenAI</span>
            </div>
      {/* Menu icon */}
        <div onClick={()=>setOpen(!open)} className='absolute py-2 right-5 top-6 cursor-pointer  md:hidden w-7 h-7'>
                {
                    open ? <XMarkIcon/> : <Bars3BottomRightIcon />
                }
        </div>
        <ul  className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          <li className='md:ml-8 md:my-0 my-7'>
            <Link className="link" to={"/"}>Home</Link>
          </li>
          {user &&
            <li className='md:ml-8 md:my-0 my-7'>
              <Link className="link" to='/generate'>Generate</Link>
            </li>
          }
          {user?
          <li className='md:ml-8 md:my-0 my-7'>
            <div className="d-flex"><img className="logo" src={user.photoURL} alt={user.displayName} />
          <button onClick={logOut}>
            Logout
          </button>
          </div>
          </li> :
          <li className='md:ml-8 md:my-0 my-7'>
            <Link className="link" onClick={signIn}>Login</Link>
          </li>
        }
        </ul>
      </div>
    </div>
  )
}

export default NavBar

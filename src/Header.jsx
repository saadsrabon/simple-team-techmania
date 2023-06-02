import logo from '../src/assets/logo/logo.png'
import avatar from '../src/assets/banar/download.jpg'
const Header = () => {
  return (
    <div>
        <div className="navbar  bg-gray-800">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl"><img className='w-24' src={logo} alt="" /></a>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={avatar} />
          </div>
        </label>
        <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        
         <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a >Admission</a></li>
          <li><a>Teachers Panel</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
    </div>

  )
}

export default Header
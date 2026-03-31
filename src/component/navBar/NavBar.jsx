import { FaCartShopping } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <h1 className='font-bold text-3xl py-2 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h1>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 flex items-center">
        <div className='relative'>
          <button><FaCartShopping></FaCartShopping></button>
        </div>
        <a>Login</a>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get in Touch</a>
      </div>
    </div>
  );
};

export default NavBar;
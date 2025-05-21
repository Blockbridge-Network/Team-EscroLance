import { Link } from 'react-router-dom';
import weblogo from '../assets/images/logo.png';
import ConnectWallet from '../components/ConnectWallet';

const Navbar = () => {
  
  return (
    <>
    {/* Header Section */}
    <header className="w-full h-[70px] flex flex-row justify-center">
      <div className="w-[20%] h-full inline-flex flex-row justify-center items-center gap-[5px]">
        <div className="w-[40px] h-[50px] flex justify-center items-center">
          <img src={weblogo} className="inline pr-2 pb-1" alt="Logo" />
        </div>
        <div>
          <p className="font-medium text-2xl text-white">ESCROWLANCE</p>
        </div>
      </div>
      <div className="w-[60%] h-full">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex flex-row justify-center items-center gap-10">
            <li>
              <Link to="/" className="
                 relative inline-block hover:text-white
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-black before:transition-all before:duration-300 hover:before:w-full
              ">Home</Link>
            </li>
            {/* <li>
              <Link href="#" className="
                 relative inline-block 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-white before:transition-all before:duration-300 hover:before:w-full
              ">How it Works</Link>
            </li> */}
            <li>
              <Link to="/add-job" title="Post a Job" className="
                 relative inline-block 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-white before:transition-all before:duration-300 hover:before:w-full
              ">Hire Talent</Link>
            </li>
            <li>
              <Link to="/jobs" title="Find Work" className="
                 relative inline-block 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-white before:transition-all before:duration-300 hover:before:w-full
              ">Browse Jobs</Link>
            </li>
            <li>
              <Link href="#" className="
                 relative inline-block 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-white before:transition-all before:duration-300 hover:before:w-full
              ">About Us</Link>
            </li>
            <li>
              <Link href="#" className="
                 relative inline-block 
                 before:content-[''] before:absolute before:bottom-0 before:left-0 before:h-[1.5px] before:w-0
                 before:bg-white before:transition-all before:duration-300 hover:before:w-full
              ">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="w-[20%] h-full bg-green-500-500 flex justify-center items-center">
         <ConnectWallet />
      </div>
    </header>
    </>
  )
}

export default Navbar;
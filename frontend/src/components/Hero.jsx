import { Link } from 'react-router-dom';
import heroimg from '../assets/images/hero_bg.png';
import './css/button2.css';
import ConnectWallet from '../components/ConnectWallet';

const Hero = ({
    title = ' Explore The Largest',
    subtitle = 'Escrowlance is Decentralized platform that ensures trust, transparency, and fair compensation for freelancers using smart contracts, on-chain reputation, and NFT recognition.'
 }) => {
  return (
    // <section className="bg-indigo-700 py-20 mb-4">
    //   <div
    //     className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    //   >
    //     <div className="text-center">
    //       <h1
    //         className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
    //       >
    //         {title}
    //       </h1>
    //       <p className="my-4 text-xl text-white">
    //         {subtitle}
    //       </p>
    //     </div>
    //   </div>
    // </section>

      <section>
      <div className="w-full h-[600px] flex flex-row">
        <div className="w-[50%] h-full flex flex-col justify-center px-[100px]">

          <div className="text-[50px] font-bold text-white leading-tight">
            <div>{title}</div>
            <div>
              <span className="bg-gradient-to-br from-[#ff025a] via-[#ab18a2] to-[#3d25ed] text-transparent bg-clip-text">
                Web3
              </span>{' '}
              Marketplace
            </div>
          </div>
      
          <p className="font-normal text-slate-400 pb-[20px]">
            {subtitle}
          </p>
          <div className="flex flex-row gap-1 pl-5">
            {/* <div className="px-4 py-3 bg-[#031D93] font-semibold rounded-md">Connect Wallet</div> */}
            <ConnectWallet />
            

            <article>
              <Link href="#" className="w-full h-full flex justify-center items-center" >
                Learn More
              </Link>
            </article>
          </div>
        </div>


        <div className="w-[50%] h-full flex justify-center overflow-y-hidden">

        <div className="absolute top-1/2 right-[150px] -translate-y-1/2 translate-x-1/2 w-[150px] h-[500px] rounded-l-full bg-[#EA00BA] opacity-50 blur-[150px] animate-pulse pointer-events-none z-10"></div>
        <div className="absolute bottom-[-25px] right-[500px] -translate-y-1/2 translate-x-1/2 w-[400px] h-[100px] rounded-t-full bg-gradient-to-br from-[blue] via-[blue] to-[#EA00BA] opacity-100 blur-[150px] animate-pulse duration-500 pointer-events-none z-30"></div>


          <div className="w-[400px] h-[full] bg-center z-20">
            <img src={heroimg} className="w-full h-full z-20" alt="heroimg" />
          </div>
        </div>
      </div>
      </section>
  )
}

export default Hero
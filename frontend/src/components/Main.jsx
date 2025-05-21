import React from 'react'
// import { Link } from 'react-router-dom';
import about1 from '../assets/images/about1.png';
import about2 from '../assets/images/blogs/image4.jpg';
import about3 from '../assets/images/about5.jpg';
import about4 from '../assets/images/about5.jpg';
import blog1 from '../assets/images/blogs/image1.jpg';
import blog2 from '../assets/images/blogs/image2.jpg';
import blog3 from '../assets/images/blogs/image3.jpg';
import test1 from '../assets/images/testimonials/image-01.jpg';
import test2 from '../assets/images/testimonials/image-02.jpg';
import test3 from '../assets/images/testimonials/image-03.jpg';
import test4 from '../assets/images/testimonials/image-04.jpg';
import bgImage from '../assets/images/bg2.jpg';
import { Link } from 'react-router-dom';




const Main = () => {
  return (
    <>
      <section>
      <div className="w-full h-[250px] bg-black p-8">
          <p className="text-[22px] font-medium text-white mb-4">Backed by 1,000+ partners globally — including giants like Binance and Ethereum.</p>
          <div className="w-full flex flex-row gap-10 justify-evenly items-center">
             {/* <div> */}
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                <path fill="#F0B90B" d="m7.068 12-2.03 2.03L3.003 12l2.03-2.03zm4.935-4.935 3.482 3.483 2.03-2.03L12.003 3 6.485 8.518l2.03 2.03zm6.964 2.905L16.937 12l2.03 2.03 2.03-2.03zm-6.964 6.965L8.52 13.452l-2.03 2.03L12.003 21l5.512-5.518-2.03-2.03zm0-2.905 2.03-2.03-2.03-2.03L9.967 12z"/>
               </svg>


               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                <path fill="#F6A500" d="M15.829 13.626V9h.93v4.626z"/>
                <path fill="#fff" d="M4.993 15H3v-4.626h1.913c.93 0 1.471.507 1.471 1.3 0 .513-.348.845-.588.955.287.13.655.423.655 1.04 0 .863-.609 1.33-1.458 1.33m-.154-3.82h-.91v1.065h.91c.395 0 .615-.214.615-.533 0-.317-.22-.532-.615-.532m.06 1.877h-.97v1.137h.97c.42 0 .622-.259.622-.571s-.201-.565-.622-.565zm4.388.046V15h-.923v-1.898l-1.431-2.728h1.01l.889 1.864.877-1.864h1.01zM13.355 15h-1.993v-4.626h1.913c.93 0 1.47.507 1.47 1.3 0 .513-.347.845-.588.955.287.13.655.423.655 1.04 0 .863-.608 1.33-1.457 1.33m-.155-3.82h-.91v1.065h.91c.395 0 .616-.214.616-.533 0-.317-.22-.532-.616-.532m.06 1.877h-.97v1.137h.97c.422 0 .622-.259.622-.571s-.2-.565-.622-.565zm6.495-1.876V15h-.929v-3.82h-1.245v-.806H21v.806z"/>
               </svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                  <path fill="#FF5C16" d="m19.821 19.918-3.877-1.131-2.924 1.712h-2.04l-2.926-1.712-3.875 1.13L3 16.02l1.179-4.327L3 8.034 4.179 3.5l6.056 3.544h3.53L19.821 3.5 21 8.034l-1.179 3.658L21 16.02z"/>
                  <path fill="#FF5C16" d="m4.18 3.5 6.055 3.547-.24 2.434zm3.875 12.52 2.665 1.99-2.665.777zm2.452-3.286-.512-3.251-3.278 2.21h-.002v.001l.01 2.275 1.33-1.235zM19.82 3.5l-6.056 3.547.24 2.434zm-3.875 12.52-2.665 1.99 2.665.777zm1.339-4.326v-.002zl-3.279-2.21-.512 3.25h2.451l1.33 1.236z"/>
                  <path fill="#E34807" d="m8.054 18.787-3.875 1.13L3 16.022h5.054zm2.452-6.054.74 4.7-1.026-2.614-3.497-.85 1.33-1.236zm5.44 6.054 3.875 1.13L21 16.022h-5.055zm-2.452-6.054-.74 4.7 1.026-2.614 3.497-.85-1.331-1.236z"/>
                  <path fill="#FF8D5D" d="m3 16.02 1.179-4.328h2.535l.01 2.276 3.496.85 1.026 2.613-.527.576-2.665-1.989H3zm18 0-1.179-4.328h-2.535l-.01 2.276-3.496.85-1.026 2.613.527.576 2.665-1.989H21zm-7.235-8.976h-3.53l-.24 2.435 1.251 7.95h1.508l1.252-7.95z"/>
                  <path fill="#661800" d="M4.179 3.5 3 8.034l1.179 3.658h2.535l3.28-2.211zm5.594 10.177H8.625l-.626.6 2.222.54zM19.821 3.5 21 8.034l-1.179 3.658h-2.535l-3.28-2.211zm-5.593 10.177h1.15l.626.6-2.224.541zm-1.209 5.271.262-.94-.527-.575h-1.509l-.527.575.262.94"/>
                  <path fill="#C0C4CD" d="M13.02 18.948V20.5h-2.04v-1.552z"/>
                  <path fill="#E7EBF6" d="m8.055 18.785 2.927 1.714v-1.552l-.262-.94zm7.89 0L13.02 20.5v-1.552l.262-.94z"/>
              </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                  <path fill="#8FFCF3" d="M12 3v6.651l5.625 2.516z"/>
                  <path fill="#CABCF8" d="m12 3-5.625 9.166L12 9.653z"/>
                  <path fill="#CBA7F5" d="M12 16.478V21l5.625-7.784z"/>
                  <path fill="#74A0F3" d="M12 21v-4.522l-5.625-3.262z"/>
                  <path fill="#CBA7F5" d="m12 15.43 5.625-3.263L12 9.652z"/>
                  <path fill="#74A0F3" d="M6.375 12.167 12 15.43V9.652z"/>
                  <path fill="#202699" fill-rule="evenodd" d="m12 15.43-5.625-3.263L12 3l5.624 9.166zm-5.252-3.528 5.161-8.41v6.114zm-.077.229 5.238-2.327v5.364zm5.418-2.327v5.364l5.234-3.037zm0-.198 5.161 2.296-5.161-8.41z" clip-rule="evenodd"/>
                  <path fill="#202699" fill-rule="evenodd" d="m12 16.406-5.625-3.195L12 21l5.624-7.79zm-4.995-2.633 4.904 2.79v4.005zm5.084 2.79v4.005l4.905-6.795z" clip-rule="evenodd"/>
             </svg>

              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                  <path fill="#0500FF" d="M3.9 5.6 12 3v18c-5.786-2.4-8.1-7-8.1-9.6z"/>
                  <path fill="url(#trust__a)" d="M20.1 5.6 12 3v18c5.786-2.4 8.1-7 8.1-9.6z"/>
                  <defs>
                      <linearGradient id="trust__a" x1="17.948" x2="11.967" y1="1.74" y2="20.797" gradientUnits="userSpaceOnUse">
                          <stop offset=".02" stop-color="#00F"/>
                          <stop offset=".08" stop-color="#0094FF"/>
                          <stop offset=".16" stop-color="#48FF91"/>
                          <stop offset=".42" stop-color="#0094FF"/>
                          <stop offset=".68" stop-color="#0038FF"/>
                          <stop offset=".9" stop-color="#0500FF"/>
                      </linearGradient>
                  </defs>
              </svg>


               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                 <path fill="#E6007A" d="M15.172 4.853c0 1.022-1.424 1.853-3.177 1.853-1.752 0-3.176-.831-3.176-1.853S10.249 3 11.995 3c1.748 0 3.177.831 3.177 1.853m0 14.294c0 1.022-1.424 1.853-3.177 1.853-1.752 0-3.176-.831-3.176-1.853s1.43-1.853 3.176-1.853c1.748 0 3.177.831 3.177 1.853M7.416 9.432c.9-1.55.905-3.23.021-3.737-.89-.514-2.33.333-3.23 1.884-.9 1.552-.9 3.23-.02 3.738.889.508 2.329-.334 3.229-1.885m12.378 3.246c.889.503.884 2.149-.011 3.674-.9 1.524-2.345 2.35-3.23 1.847-.894-.503-.889-2.15.006-3.674.9-1.524 2.345-2.35 3.235-1.847M7.442 18.21c.89-.503.885-2.15-.015-3.674-.895-1.525-2.34-2.35-3.23-1.848-.895.508-.89 2.15.01 3.674.895 1.525 2.34 2.356 3.23 1.853zM19.794 7.585c.9 1.55.9 3.224.015 3.732-.884.514-2.329-.328-3.229-1.885-.89-1.55-.9-3.224-.016-3.732.89-.514 2.33.328 3.23 1.885"/>
               </svg>

               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                  <path fill="url(#polygon__a)" d="m16.364 15.217 4.27-2.435a.73.73 0 0 0 .366-.627V7.284a.72.72 0 0 0-.366-.627l-4.27-2.435a.74.74 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v8.704l-2.994 1.707-2.994-1.707v-3.415l2.994-1.707 1.974 1.127V9.702l-1.608-.918a.75.75 0 0 0-.732 0l-4.27 2.435a.72.72 0 0 0-.366.627v4.87c0 .258.14.498.366.627l4.27 2.436a.75.75 0 0 0 .732 0l4.27-2.436a.72.72 0 0 0 .366-.626V8.012l.053-.03 2.94-1.677 2.994 1.707v3.415l-2.994 1.707-1.972-1.124v2.291l1.606.916a.75.75 0 0 0 .732 0z"/>
                  <defs>
                      <linearGradient id="polygon__a" x1="2.942" x2="20.119" y1="17.194" y2="7.101" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#A726C1"/>
                          <stop offset=".88" stop-color="#803BDF"/>
                          <stop offset="1" stop-color="#7B3FE4"/>
                      </linearGradient>
                  </defs>
                </svg>
{/* 
               <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 24 24">
                <path fill="#0052FF" d="M12 3a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9"/>
                <path fill="#fff" d="M12.002 15.164a3.163 3.163 0 1 1 3.116-3.691h3.187a6.328 6.328 0 1 0 0 1.054h-3.188a3.16 3.16 0 0 1-3.115 2.637"/>
               </svg> */}


             {/* </div> */}
          </div>
      </div>

    
    </section>

    
    <section>
       <div className="w-full h-[700px] flex flex-row">
          <div className="w-[50%] h-full flex justify-center items-center">
           <div className="absolute left-0 w-[200px] h-[500px] rounded-l-full bg-[#EA00BA] opacity-50 blur-[150px] animate-pulse pointer-events-none "></div>
            <div
              className="w-[400px] h-[470px] -rotate-15 rounded-4xl bg-gradient-to-r about1 flex justify-center items-center z-10"
            >
               <img src={about1} className="w-full h-[80%]" />
              
           </div>

           {/* <div className="absolute top-1/2 left-[150px] -translate-y-1/2 translate-x-1/2 w-[150px] h-[500px] rounded-l-full bg-[#EA00BA] opacity-50 blur-[150px] animate-pulse pointer-events-none z-10"></div> */}
           <div className="absolute ml-[400px] mt-[300px] w-[200px] h-[220px] rounded-4xl overflow-hidden bg-white about2-anim z-20">
               <img src={about2} className="w-full h-full" />
           </div>
           <div className="absolute -ml-[300px] mt-[500px] w-[150px] h-[180px] rounded-4xl overflow-hidden bg-white about3-anim z-0">
           
               <img src={about3} className="w-full h-full" />

           </div>
           <div className="absolute -ml-[450px] mt-[-400px] w-[100px] h-[130px] rounded-4xl overflow-hidden bg-white about3-anim z-20">
           
               <img src={about4} className="w-full h-full" />
           </div>


          </div>
          <div className="w-[50%] h-full px-8 py-[100px] flex flex-col">
              <div className="w-[100px] h-[35px] mb-4 flex justify-center items-center border-[1px] border-slate-400 rounded-full text-[#FF00C4] font-medium shadow-sm shadow-[#FF00C4]">
                About Us
              </div>
              <div className="text-[50px] font-bold text-white leading-tight mb-4">
                Welcome to Escrowlance Where Freedom Meets Work.
              </div>
              <p className="font-normal text-slate-400 mb-2">
                At Escrowlance, we're not just building a platform — we're creating a movement.
                 A global freelance marketplace where freedom, fairness, and transparency are the foundation.
                  Built on blockchain, our ecosystem connects freelancers and clients directly, without middlemen, delays, or hidden fees. <span className="text-[#FF00C4]">What Makes Escrowlance Different.</span>
              </p>
              <ul className="flex flex-col gap-2 ml-4">
                <li><span className="text-[#FF00C4] font-bold">-</span> Smart Contract-Powered Escrow</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Zero Commission for Freelancers</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Decentralized Dispute Resolution</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Token-Based Reputation System</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Global, Borderless Payments</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Open Governance</li>
                <li><span className="text-[#FF00C4] font-bold">-</span> Privacy by Design</li>
              </ul>
          </div>
       </div>
    </section>
      
    {/* Find a Freelancer */}
    <section>
      <div className="w-full h-[500px] flex justify-center mt-[150px] mb-[50px]">
        <div className="w-[80%] h-[450px] py-14 px-20 rounded-4xl bg-opacity-50 bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>

          <div>
            <p className="text-[50px] font-bold text-white">Find a Freelancer</p>
            <p className="font-medium text-2xl text-slate-100 mb-8">
              Hire a Freelancer and get to work quickly and cost-effectively. Find blockchain developers,
              growth hackers, security and penetration testers, copywriters, designers, social media managers,
              digital assistants, and many more in our decentralized freelancers marketplace of more than 20 000 proven experts.
            </p>
            <div className="inline text-[24px] font-semibold p-4 border-2 border-white hover:bg-[#fff] hover:text-[#140035] rounded-full cursor-pointer">
              <Link to="/add-job" className='w-ful h-full'>Post a Job</Link>
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* Why Us */}
    <section>
      <div className="text-[50px] font-bold text-white ml-[100px]">Why Us</div>
       <div className="w-full p-8 flex flex-row flex-wrap justify-center gap-4 bg-gradient-to-b from-[#0F0823] via-[#ff00c399] to-[#0F0823] via-80% from-20% mb-16">
        
      {/* bg designs */}

      {/* end bg designs */}

          <div className="card w-[30%] min-w-[200px] p-4">
            <p className="text-[30px] font-bold">Low fees</p>
            <p className="">
              Our decentralized freelance market ecosystem lowers fees by directly connecting Clients and Freelancers P2P.
              By skipping 3rd party fees, Clients and Freelancers pay only up to 3%.
            </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
            <p className="text-[30px] font-bold">Escrow</p>
              <p className="">
                With escrow, Freelancers have the guarantee of payment for their services,
                while the Client’s funds are safe until the Freelancer produces the expected work.
                As it’s based on smart contracts, escrow can’t be manipulated in any way, and makes trust — a must!
              </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
            <p className="text-[30px] font-bold">Option of paying with crypto</p>
             <p className="">
               Building a global community with an option to use global currency,
               we create better economic opportunities for Clients and Freelancers from all over the world.
             </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
             <p className="text-[30px] font-bold">Affiliate program</p>
             <p className="">
             We scale earning opportunities by enabling users to earn 20% of escrowed jobs their affiliates
              make through the platform or 10% of each day their affiliates are subscribed to Visibility package.
             </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
          <p className="text-[30px] font-bold">Transparency</p>
             <p className="">
               By implementing an automated dispute system and reputation stored on the blockchain,
               we’re building a trustworthy platform all stakeholders can rely on.
             </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
             <p className="text-[30px] font-bold">Business simplified</p>
             <p className="">
               Post a job or apply for one in a minute. No browser plugins, 3rd party apps, credit card details,
               or wallet-linking necessary. Fast, efficient & easy - the way blockchain is meant to be.
             </p>
          </div>
       </div>
    </section>


    <section>
      <div className="text-[50px] font-bold text-white ml-[100px]">News & BLogs</div>
      <div className="w-full p-8 flex flex-row flex-wrap justify-center gap-4">

      <div className="card w-[30%] min-w-[200px] p-4">
            <div className="w-full h-[350px] pb-4">
               <img src={blog1} className="w-full h-full p-0 rounded-xl" />
            </div>
            <p className="text-[30px] font-semibold truncate">The Future of Freelancing Is Decentralized</p>
            <p className="">
              Say goodbye to high platform fees and middlemen. With Escrowlance,
              freelancers and clients connect directly, backed by smart contracts for secure, transparent transactions.
            </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4 shadow-lg shadow-[#FF00C4]">
            <div className="w-full h-[350px] pb-4">
            <img src={blog2} className="w-full h-full p-0 rounded-xl" />
            </div>
            <p className="text-[30px] font-bold truncate">Escrow-Powered Deals: Secure Payments, Guaranteed Work</p>
              <p className="">
                Never worry about being scammed again. Our built-in crypto escrow system ensures freelancers get paid
                only when the job is done — and clients get what they pay for.
              </p>
          </div>
          <div className="card w-[30%] min-w-[200px] p-4">
            <div className="w-full h-[350px] pb-4">
            <img src={blog3} className="w-full h-full p-0 rounded-xl" /> 
            </div>
            <p className="text-[30px] font-bold truncate">Global Talent, Borderless Opportunities</p>
             <p className="">
                Whether you're in Lagos or Lisbon, Escrowlance opens the door to global freelance jobs and talent.
                No limits. Just freedom to work and hire from anywhere.
             </p>
          </div>

      </div>
    </section>

    
    {/* Find a Job */}
    <section>
      <div className="w-full h-[500px] flex justify-center mt-[150px] mb-[50px]">
        <div className="w-[80%] h-[450px] py-14 px-20 rounded-4xl bg-opacity-50 bg-cover" style={{ backgroundImage: `url(${bgImage})` }}>
            <p className="text-[50px] font-bold text-white">Find a Job</p>
            <p className="font-medium text-2xl text-slate-100 mb-8">
              Discover remote jobs, crypto gigs, and freelance projects tailored to your skills. From software development and graphic design
              to writing, consulting, and blockchain work — Escrowlance gives you the freedom to work on your own terms, get paid securely,
              and grow your global career without middlemen.
            </p>
            <div className="inline text-[24px] font-semibold p-4 border-2 border-white hover:bg-[#fff] hover:text-[#140035] rounded-full cursor-pointer">
              <Link to="/jobs" className='w-ful h-full'>Browse Jobs</Link>
            </div>
        </div>
      </div>
    </section>


{/* Testimonials */}
    <section>
      
    <div className="text-[50px] font-bold text-white ml-[100px]">Testimonials</div>
    <div className="w-full flex justify-center flex-wrap gap-[30px] px-[100px] mb-[100px]">


      <div className="basis-[calc(50%-30px)] min-w-[200px] h-[250px] bg-[url('/bg1.jpg')] bg-cover rounded-2xl shadow-md shadow-[#ff00c4] p-4">
        <div className="p-4 inline-flex flex-row gap-4">
           <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
               <img src={test1} className="w-full h-full" />
           </div>
           <div className="flex flex-col">
             <p className="text-[24px] text-white font-medium">Jason Keys</p>
             <p>CEO & Founder @ Dreampeet.</p>
           </div>
           
        </div>
        <div className="text-slate-100">“The emergence of decentralized platforms like this freelance marketplace marks a pivotal shift in the global economy. As an official deeply involved in workforce development and digital transformation, I am inspired by the way this platform redefines how freelancers and clients connect.”</div>
      </div>



      <div className="basis-[calc(50%-30px)] min-w-[200px] h-[250px] bg-[url('/bg1.jpg')] bg-cover rounded-2xl shadow-md shadow-[#ff00c4] p-4">
        <div className="p-4 inline-flex flex-row gap-4">
           <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
           <img src={test2} className="w-full h-full" />
           </div>
           <div className="flex flex-col">
             <p className="text-[24px] text-white font-medium">Mariya Merry</p>
             <p>CEO & Founder @ Betex.</p>
           </div>
           
        </div>
        <div className="text-slate-100">“The emergence of decentralized platforms like this freelance marketplace marks a pivotal shift in the global economy. As an official deeply involved in workforce development and digital transformation, I am inspired by the way this platform redefines how freelancers and clients connect.”</div>
      </div>




      <div className="basis-[calc(50%-30px)] min-w-[200px] h-[250px] bg-[url('/bg1.jpg')] bg-cover rounded-2xl shadow-md shadow-[#ff00c4] p-4">
        <div className="p-4 inline-flex flex-row gap-4">
           <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
           <img src={test3} className="w-full h-full" />
           </div>
           <div className="flex flex-col">
             <p className="text-[24px] text-white font-medium">Andria Jolly</p>
             <p>CEO & Founder @ CryptoX.</p>
           </div>
           
        </div>
        <div className="text-slate-100">“The emergence of decentralized platforms like this freelance marketplace marks a pivotal shift in the global economy. As an official deeply involved in workforce development and digital transformation, I am inspired by the way this platform redefines how freelancers and clients connect.”</div>
      </div>




      <div className="basis-[calc(50%-30px)] min-w-[200px] h-[250px] bg-[url('/bg1.jpg')] bg-cover rounded-2xl shadow-md shadow-[#ff00c4] p-4">
        <div className="p-4 inline-flex flex-row gap-4">
           <div className="w-[60px] h-[60px] rounded-lg overflow-hidden">
           <img src={test4} className="w-full h-full" />
           </div>
           <div className="flex flex-col">
             <p className="text-[24px] text-white font-medium">Devid Willium</p>
             <p>CEO & Founder @ Coinbase.</p>
           </div>
           
        </div>
        <div className="text-slate-100">“The emergence of decentralized platforms like this freelance marketplace marks a pivotal shift in the global economy. As an official deeply involved in workforce development and digital transformation, I am inspired by the way this platform redefines how freelancers and clients connect.”</div>
      </div>

    </div>
    
    </section>
    {/* Testimonials */}
    </>
  )
}

export default Main
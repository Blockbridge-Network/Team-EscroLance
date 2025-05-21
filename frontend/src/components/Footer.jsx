import React from 'react';
import weblogo from '../assets/images/logo.png';
import ext_link1 from '../assets/images/footer/bitcoin.svg';
import ext_link2 from '../assets/images/footer/facebook.svg';
import ext_link3 from '../assets/images/footer/twitter.svg';
import ext_link4 from '../assets/images/footer/x.svg';
import ext_link5 from '../assets/images/footer/telegram.svg';

const Footer = () => {
  return (
    
    <section>
    <div className="w-full h-[350px] bg-[#0F0823] px-[100px]">
      <div className="w-full h-[300px] flex flex-row">
        <div className="w-[40%] h-full py-[50px]">
          <div className="mb-[10px] inline-flex flex-row justify-center items-center gap-[5px]">
                  <div className="w-[40px] h-[50px] flex justify-center items-center">
                  <img src={weblogo} className="w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-2xl text-white">ESCROWLANCE</p>
                </div>
          </div>
          <div className="w-full px-[30px] mb-[30px]">
            <p className="text-[18px] text-slate-300 leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae quam nec ante fringilla vel at erat convallis elit.</p>
          </div>

          <div className="px-[30px] flex flex-row gap-[20px]">
            <div className="w-[30px] h-[30px] rounded-full bg-white">
                <img src={ext_link1} className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-white">
            <img src={ext_link2} className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-white">
            <img src={ext_link3} className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-white">
            <img src={ext_link4} className="w-full h-full" />
            </div>
            <div className="w-[30px] h-[30px] rounded-full bg-white">
            <img src={ext_link5} className="w-full h-full" />
            </div>
          </div>
        </div>


        <div className="w-[20%] h-full py-[50px]">
          <p className="text-[30px] font-medium">Quick Links</p>
          <ul className="pl-[10px] leading-7">
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Home</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">How it Works</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Hire Talent</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Browse Jobs</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">About Us</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Blogs</li>
          </ul>
        </div>
        <div className="w-[20%] h-full py-[50px]">
          <p className="text-[30px] font-medium">Supports</p>
          <ul className="pl-[10px] leading-7">
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Setting & Privacy</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Help & Support</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">Terms & Conditions</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">24/7 Supports</li>
            <li className="text-[17px] foont-medium text-slate-300 hover:text-blue-600">On Point FAQ</li>
          </ul>
        </div>
        <div className="w-[35%] h-full py-[50px]">
          <p className="text-[30px] font-medium">Subscribe Now</p>
          <p className="text-[18px] font-normal text-slate-300 mb-[20px]">Enter your email address for receiving valuable newsletters.</p>
          
          <div className="w-full h-[60px] flex flex-row rounded-md overflow-hidden">
             <div className="w-[80%] h-full bg-slate-200">
               <input
                 type="search"
                 className="w-full h-full bg-slate-200 text-[#05052B] pl-[10px] outline-0"
                 placeholder="Enter your email address"
               />
             </div>
             <div className="w-[20%] h-full bg-slate-200 p-1">
               <button className="w-full h-full bg-[#ff00c4] hover:bg-[#05052B] hover:text-[#ff00c4] text-[#05052B] rounded-md transition-colors">
                 Submit
               </button>
             </div>
          </div>

        </div>
      </div>
      <div className="w-full h-[1px] bg-[#ff00c4]"></div>
      <div className="w-full h-[100px] flex justify-center items-center bg-[#0F0823]">
        <p className="text-[20px] text-white">© 2025 Powered by Escrowlance. All Rights Reserved.</p>
      </div>
    </div>
  </section>

  )
}

export default Footer
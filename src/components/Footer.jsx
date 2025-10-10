import React from 'react';
import { Globe, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="Footer"className="relative bg-[#4f3424] opacity-85 text-white py-12 px-6 sm:px-8 lg:px-16 rounded-t-3xl shadow-2xl">
      
      <div className="absolute top-0 left-0 w-full h-16 footer-blur"></div>
      <div className="max-w-6xl mx-auto">
        

        <div className="grid md:grid-cols-2 gap-8 mb-12 text-center md:text-left">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-black">
            <h1 className="font-bold text-[25px] mb-5 tracking-wide">Contact Information</h1>
            <ul className="space-y-4">
              <li className="flex sm:items-center sm:justify-center md:justify-start gap-3">
                <Mail className="w-fit sm:h-6 h-[30px]" />
                <a 
                  href="mailto:acm-kjsce@somaiya.edu" 
                  className=" transition-colors duration-300 "
                >
                    <div className='w-[100%] flex text-[15px] font-semibold pt-0.5'> acm-kjsce@somaiya.edu</div>
                 
                </a>
              </li>
              <li className="flex sm:items-center sm:justify-center md:justify-start gap-3">
                <MapPin className="w-fit sm:h-6 h-[30px] " />
                <div className=' w-fit text-[15px] font-semibold '>KJ Somaiya School of Engineering</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-black">
            <div className="font-bold text-[25px] mb-5 tracking-wide text-center">Connect With Us</div>
            <div className="flex justify-center space-x-6">
                <a 
                href="https://kjsce.acm.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label='Redirecting to website of ACM-KJSSE'
                className="hover:scale-110 transition-transform duration-300"
              ><Globe className="w-8 h-8 text-sky-900" /></a>

                <a 
                href="https://chat.whatsapp.com/GmQPjLq067VFN57pTgazNM" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label='Redirecting to website of ACM-KJSSE'
                className="hover:scale-110 transition-transform duration-300"
              ><img src="/whatsappIcon.png" className='h-8'/></a>

              <a 
                href="https://instagram.com/kjsse_acm" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label='Redirecting to Instagram Page of ACM-KJSSE'
                className="hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="text-[#e1306c] w-8 h-8" />
              </a>
              <a 
                href="https://www.linkedin.com/company/kjsce-acm-student-chapter" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label='Redirecting to LinkedIn Page of ACM-KJSSE'
                className="hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="text-[#0077b5] w-8 h-8" />

              </a>
            </div>
          </div>
        </div>

          <div className="md:text-9xl text-6xl flex text-center justify-center font-bold
            bg-clip-text text-white font-primary">
            ARTEMIS 2025
          </div> 


        <div className="text-center text-sm font-medium mt-10 border-t-2 border-[#21223d] pt-6">
          <p className="mb-2 text-base font-semibold">Made with ❤️ by ACM-KJSSE</p>
          <p className="text-sky-300">&copy; {new Date().getFullYear()} ACM-KJSSE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

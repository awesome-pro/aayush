import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

function Cta() {
  return (
    <div className="bg-blue-50 py-12 px-6 lg:px-16 rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Image Container */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-8">
          <div className="relative flex-shrink-0">
            <Image
              src="/images/about-1.png"
              alt="Patient"
              className="w-60 h-40 sm:w-80 sm:h-48 object-cover rounded-md border-4 border-white shadow-lg"
              width={320}
              height={180}
            />
          </div>
          <div className="relative flex-shrink-0">
            <Image
              src="/images/about-2.png"
              alt="Patient"
              className="w-60 h-40 sm:w-80 sm:h-48 object-cover rounded-md border-4 border-white shadow-lg md:hidden"
              width={320}
              height={180}
            />
          </div>
        </div>

        {/* Text Container */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <p className="text-blue-400 font-bold text-sm lg:text-base mb-4">
            HELPING PATIENTS FROM AROUND THE GLOBE!
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-wide">
            Patient <span className="text-blue-400">Caring</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm sm:text-base">
            Our goal is to deliver quality care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be your first and best choice for healthcare.
          </p>
          <ul className="list-none space-y-4 text-blue-950 font-semibold text-sm sm:text-base">
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg mr-2" />
              Stay Updated About Your Health
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg mr-2" />
              Check Your Results Online
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg mr-2" />
              Manage Your Appointments
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cta;

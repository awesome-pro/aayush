import { faCheckCircle, faHandHoldingHeart, faHospital, faUserDoctor, faVialVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

function Cta() {
  return (
    <div>
      <div className="patient-caring-div flex flex-row items-center justify-around p-10 bg-blue-100 rounded-lg shadow-lg">
    <div className="images-container flex">
      <Image src="/images/about-1.png" alt="Patient" className="w-80 h-48 object-cover rounded-md border-4 border-white shadow-lg z-10 -mr-8 mt-32" width={200} height={200}/>
      <Image src="/images/about-2.png" alt="patient" className="w-80 h-48 object-cover rounded-md border-4 border-white shadow-lg -ml-8" width={200} height={200}/>
    </div>
    <div className="text-container ml-4 w-1/3">
    <p className="text-blue-400 font-bold mb-2">HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
      <h2 className="text-4xl font-extrabold mb-2 tracking-wide">Patient <span className="text-blue-400">Caring</span></h2>
      <p className="text-gray-500 mb-2 text-base">Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner.We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
      <ul className="list-disc flex flex-col gap-y-4 text-blue-950 font-semibold text-lg">
        <div><FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg" /> Stay Updated About Your Health</div>
        <div><FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg"  /> Check Your Results Online</div>
        <div><FontAwesomeIcon icon={faCheckCircle} className="text-blue-400 text-lg"  /> Manage Your Appointments</div>
      </ul>
    </div>
  </div>
    </div>
  )
}

export default Cta
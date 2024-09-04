/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { faArrowLeft, faArrowRight, faCheckCircle, faHandHolding, faHandHoldingHeart, faHospital, faUserDoctor, faVialVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { dummySkills } from "@/data";

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);
  let displayedDoctors = dummySkills.slice(currentIndex, currentIndex + 3);

  const handlArrowClick = (direction : string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? dummySkills.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === dummySkills.length - 1 ? 0 : prevIndex + 1));
    }
  };

  const handlArrowClick2 = (direction : string) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? dummySkills.length - 1 : prevIndex - 1));
    } else {
      setCurrentIndex((prevIndex) => (prevIndex === dummySkills.length - 1 ? 0 : prevIndex + 1));
    }
  };

 

  return (
    <>
    <div className="bg-blue-100">
    <div className='pt-20 max-w-screen-xl flex relative flex-col justify-center items-center bg-blue-100 ml-40'>

        <div className='flex bg-blue-100 flex-col-reverse md:flex-row justify-around max-w-0.7 w-full rounded-2xl'>

            <div className=' flex-col items-center justify-around  w-full md:w-1/2'>

                <h1 className='bg-cyan-900 inline-block text-transparent bg-clip-text text-2xl font-semibold tracking-wide'>
                Skip the travel! Take Online
                </h1>
                <br />
                <br />
                <h1 className='bg-cyan-900 inline-block text-transparent bg-clip-text text-5xl font-semibold tracking-normal'>
                Doctor <span className="text-blue-400">Consultation</span>
                </h1>
                <br />

                 <div className='mt-3 text-xl text-gray-500 gap-4 flex-col flex' >
                <p className='flex flex-wrap gap-3 font-semibold'>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                </p>
            </div>
                <br />
                <div className='flex flex-col md:flex-row gap-5'>
                  <Link href='/consult'>
                    <Button className='border-2 rounded-3xl px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white w-52'>
                      Consult Aarogya AI
                    </Button>
                    </Link>
                </div>


            <br />
            </div>
            <div className='flex justify-center items-center'>
                <img
                src="/images/doctor-photo.png"
                alt='Loading image'
                className='rounded-3xl bg-clip-border w-10/12 mb-10'
               
                />
            </div>


            <div className='flex flex-col items-center justify-center mt-48 min-h-full'>
            <div className='flex flex-row md:absolute md:left-0 justify-between bottom-0 bg-gray-50 p-4 rounded-t-lg w-full max-w-screen-xl px-10 py-10 z-50 shadow-lg'>
                    <div className='flex justify-center items-center'>
                    {/* <SearchBar value="Ex Doctor, Hospital" /> */}
                    <Link href={"/symptoms"}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl px-4 py-3 font-semibold">Book Doctor by Symptoms</Button>
                    </Link>
                    </div>
                    <div className='flex justify-center items-center'>
                    {/* <SearchBar value="Ex Surgeon, Cardiologist" /> */}
                    <Link href={"/consult-ai"}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl px-4 py-3 font-semibold">Book Doctor by AI</Button>
                    </Link>
                    </div>
                    <div className='flex justify-center items-center'>
                    {/* <SearchBar value="Set Your location" /> */}
                    <Link href={"/find-doctor"}>
                    <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-3xl px-4 py-3 font-semibold">Book Doctor by Search</Button>
                    </Link>
                    </div>
                </div> 
                </div>
                </div>
        </div>
        </div>

         <div className="flex items-center justify-center gap-5 pt-10 pb-4 w-full">
      <div className="max-w-screen-lg p-4 bg-white">
      <div className="flex justify-center items-center p-5">
      </div>
      </div>
      </div>

      <div className="specialization-box flex flex-col bg-blue-50">
        <div className="flex items-center justify-center">
      <h2 className="text-3xl font-bold mb-7 mt-10 text-blue-900">Find By Specialisation</h2>
      </div>
      <div className="flex flex-wrap gap-7 justify-center items-center max-w-screen-2xl my-2">

      </div>
      <div className="flex items-center justify-center m-5">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">View All</button>
      </div>
    </div> 

    <div className="flex items-center justify-center gap-5 pt-10 pb-4 w-full">
      <div className="max-w-screen-lg p-4 bg-white">
      <div className="flex justify-center items-center p-5">
      </div>
      <div className="flex items-center justify-center">
      <h2 className="text-3xl font-bold mb-4 mt-10 text-blue-900">Our Medical Specialist</h2>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
     {displayedDoctors.map((skill) => (
      // eslint-disable-next-line react/jsx-key
      <div className="flex flex-col justify-center items-center">
        <div key={skill.id} className="border h-96 w-80 border-gray-300 p-4 rounded-t-full bg-blue-200 flex flex-col justify-center items-center ">
          <img src={skill.image} alt='/' className='h-1/2 w-1/2' />
        </div>
        <h1 className="text-gray-600">Hiuohpbini</h1>
        <h2 className="text-gray-400">yfugiviy</h2>
        </div>
      ))}
      </div>
      <div className="flex items-center justify-center gap-5 pb-4">
      <FontAwesomeIcon icon={faArrowLeft} onClick={() => handlArrowClick("left")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      <FontAwesomeIcon icon={faArrowRight} onClick={() => handlArrowClick("right")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      </div>
      </div>
      </div>

    <div className="flex items-center justify-center gap-5 pt-4 pb-4 w-full">
      <div className="max-w-screen-lg p-4 bg-white">
      <div className="flex justify-center items-center p-5">
      </div>
      <div className="flex items-center justify-center flex-col">
      <h2 className="text-base font-bold mb-4 mt-4 text-blue-400">Blog & News</h2>
      <h2 className="text-3xl font-bold mb-4 text-blue-900">Read Our Latest News</h2>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
     {displayedDoctors.map((skill) => (
      // eslint-disable-next-line react/jsx-key
      <div className="flex flex-col justify-center items-center">
        <div key={skill.id} className="border h-60 w-80 border-gray-300 p-4 rounded-sm bg-blue-200 flex flex-col justify-center items-center ">
          <img src={skill.image} alt='/' className='h-1/2 w-1/2' />
        </div>
        <h1 className="text-gray-600">Hiuohpbini</h1>
        <h2 className="text-gray-400">yfugiviy</h2>
        </div>
      ))}
      </div>
      <div className="flex items-center justify-center gap-5 pb-4">
      <FontAwesomeIcon icon={faArrowLeft} onClick={() => handlArrowClick2("left")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      <FontAwesomeIcon icon={faArrowRight} onClick={() => handlArrowClick2("right")} className="text-gray-600 p-3 text-lg hover:text-black rounded-full bg-white" />
      </div>
      </div>
      </div>

      <div className="our-family-page flex flex-wrap items-center justify-center bg-blue-50">
      {/* Left side - Family page description */}
      <div className="left-side w-full md:w-1/3 p-8 flex justify-center flex-col pl-7">
      <h2 className="text-sm font-semibold mb-4 text-blue-400">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h2>
        <h2 className="text-4xl font-extrabold mb-4 text-blue-950">Our Families</h2>
        <p className="text-gray-400">
        We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence..
        </p>
      </div>

      {/* Right side - Family members photos */}
      <div className="right-side w-full md:w-1/3 p-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl">
          <FontAwesomeIcon icon={faHandHoldingHeart} className="text-4xl text-blue-400" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Happy Patients</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl">
          <FontAwesomeIcon icon={faHospital} className="text-4xl text-orange-600" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Hospitals</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl">
          <FontAwesomeIcon icon={faVialVirus} className="text-4xl text-yellow-500" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Laboratories</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl">
            <FontAwesomeIcon icon={faUserDoctor} className="text-4xl text-green-400" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Expert Doctor</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

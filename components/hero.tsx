/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { faArrowLeft, faArrowRight, faCheckCircle, faHandHolding, faHandHoldingHeart, faHospital, faUserDoctor, faVialVirus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { dummySkills } from "@/data";
import { dummyDoctors, latestNews, specialization } from "../components/data/doctors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [index, setIndex] = useState(5);

  return (
    <>
      <div className="bg-blue-100 py-20 px-4 lg:px-10">
        <div className='flex flex-col lg:flex-row justify-between items-center max-w-screen-xl mx-auto gap-8'>
          
          {/* Text Section */}
          <div className='lg:w-1/2 text-center lg:text-left'>
            <h1 className='bg-cyan-900 inline-block text-transparent bg-clip-text text-2xl md:text-4xl font-semibold tracking-wide mb-4'>
              Welcome to <span className="text-blue-400">Aarogya</span>
            </h1>
            <h1 className='bg-cyan-900 inline-block text-transparent bg-clip-text text-3xl md:text-5xl font-bold tracking-normal mb-6'>
              Your Health is Our Priority
            </h1>
            <p className='text-xl text-gray-600 mb-6'>
              Connect instantly with a 24x7 specialist or choose to video visit a particular hospital.
            </p>
            
            {/* Buttons Section */}
            <div className="flex flex-col lg:flex-row justify-center lg:justify-start gap-4 lg:mt-10">
              <Link href='/appointments'>
                <Button className='bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3'>
                  Manage OPD
                </Button>
              </Link>

              <Link href='/services'>
                <Button className='rounded-3xl bg-primary/5 min-w-48' variant={'ghost'}>
                  All Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className='lg:w-1/2 flex justify-center'>
            <img
              src="/images/doctor-photo.png"
              alt='Doctor Image'
              className='w-full max-w-md rounded-2xl shadow-lg'
            />
          </div>
        </div>
      </div>

      {/* Specialization Section */}
      <div className="specialization-box py-10 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-10 text-blue-900">Find By Hospital Specialization</h2>
        <div className="flex flex-wrap gap-8 justify-center items-center max-w-screen-xl mx-auto">
          {specialization.slice(0, index).map((specialization, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={specialization.image}
                alt={specialization.name}
                className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-full shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-blue-900">{specialization.name}</h3>
            </div>
          ))}
        </div>
        <button
          className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          onClick={() => setIndex(specialization.length)}
        >
          View All
        </button>
      </div>

      {/* Medical Specialist Section */}
      <div className="py-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">Our Medical Specialist</h2>
        <div className="max-w-screen-xl mx-auto">
          <Slider {...settings}>
            {dummyDoctors.map((doctor) => (
              <div key={doctor.id} className="p-4">
                <div className="border h-60 w-72 border-gray-300 rounded-xl shadow-lg bg-blue-50 flex flex-col items-center justify-center">
                  <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover rounded-md" />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-700">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.specialty}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Latest News Section */}
      <div className="py-10 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">Read Our Latest News</h2>
        <div className="max-w-screen-xl mx-auto">
          <Slider {...settings}>
            {latestNews.map((news) => (
              <div key={news.id} className="p-4">
                <div className="border h-60 w-72 border-gray-300 rounded-xl shadow-lg bg-yellow-50 flex flex-col items-center justify-center">
                  <img src={news.image} alt={news.title} className="h-full w-full object-cover rounded-md" />
                </div>
                <h3 className="text-lg font-semibold mt-4 text-gray-700">{news.title}</h3>
                <p className="text-gray-500">{news.summary}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Our Family Section */}
      <div className="our-family-page flex flex-col md:flex-row items-center justify-center bg-blue-50 py-10">
        {/* Left side */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-sm font-semibold text-blue-400">CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h2>
          <h2 className="text-4xl font-extrabold mb-4 text-blue-950">Our Families</h2>
          <p className="text-gray-600">
            We will work with you to develop individualised care plans, including management of chronic diseases.
            If we cannot assist, we can provide referrals or advice about the type of practitioner you require.
          </p>
        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 p-8 grid grid-cols-2 gap-6">
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl rounded-lg">
            <FontAwesomeIcon icon={faHandHoldingHeart} className="text-4xl text-blue-400" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Happy Patients</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl rounded-lg">
            <FontAwesomeIcon icon={faHospital} className="text-4xl text-orange-600" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Hospitals</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl rounded-lg">
            <FontAwesomeIcon icon={faVialVirus} className="text-4xl text-yellow-500" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Laboratories</p>
          </div>
          <div className="bg-white flex items-center justify-center flex-col h-40 shadow-xl rounded-lg">
            <FontAwesomeIcon icon={faUserDoctor} className="text-4xl text-green-400" />
            <p className="text-center font-bold text-2xl p-2">5000+</p>
            <p className="text-center font-semibold">Qualified Doctors</p>
          </div>
        </div>
      </div>
    </>
  );
}

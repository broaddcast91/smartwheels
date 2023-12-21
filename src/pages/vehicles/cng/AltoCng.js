import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Header from '../../../components/header/Header';
import { CgSpinner } from 'react-icons/cg';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { Tab } from '@headlessui/react';
import { Helmet } from 'react-helmet';

const ertigaSlidersdata = [
  {
    original: require('../../../assets/cng/alto/Alto_CNG_Web-Banner_01.jpg'),
  },
];

function AltoCng() {
  return (
    <>
      <Header />
      <Helmet>
        <title>
          Maruti Suzuki Alto CNG On Road Price in Uttar Pradesh | Maruti Alto
          CNG Mileage
        </title>
        <meta
          name='title'
          content='Maruti Suzuki Alto CNG On Road Price in Uttar Pradesh | Maruti Alto CNG Mileage'
        />
        <meta
          name='description'
          content='Maruti Suzuki Alto CNG on road price in Uttar Pradesh starts at ₹5.03 Lakh. Alto S-CNG Mileage, Fuel Efficiency, Tank Capacity. Alto CNG advanced safety features. Visit nearest Smartwheels Showroom today for more info and offers'
        />
      </Helmet>
      <div className='bg-gray-50 py-8 '>
        <div className='container mx-auto md:px-5'>
          <div className='flex justify-between text-[#21641d] mx-5 lg:mx-0'>
            <p className='text-xl lg:text-4xl uppercase font-bold'>
              NEW ALTO S-CNG
            </p>
            <div>
              <p className='text-xl lg:text-2xl font-bold'>
                <span className='text-xs'>Starts at</span> ₹ 4.76 Lakh*
              </p>
              <span className='text-xs text-red-500'>Ex-Showroom</span>
            </div>
          </div>
          <div className='mainslidermobile mx-6 '>
            <ErtigaSlider />
          </div>
          <div className='grid grid-col-1 md:grid-cols-1 lg:grid-cols-1 gap-9 mt-3 mx-6 lg:mx-0'>
            <div className='col-span-1 sm:col-span-1 lg:col-span-2 altoslider'>
              <ErtigaSlider />
            </div>
          </div>
        </div>

        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-5 px-5 gap-9'>
          <div className='container mx-auto  mt-5 px-5 gap-9'>
            <p className='leading-loose text-lg text-justify'>
              The New Alto S-CNG is among the line-up of environment-friendly
              cars offered by Maruti Suzuki that come equipped with the
              revolutionary S-CNG technology. With 30.1 kW @ 6000 rpm of power
              and 60 Nm @ 3500 rpm of torque, the New Alto S-CNG is peppy to
              drive. The car’s tank capacity allows it to hold up to 60 L(Water
              equivalent filling capacity). The New Alto S-CNG from Maruti
              Suzuki can provide an average mileage is 31.59 km/kg.
            </p>
            <p className='leading-loose text-lg text-justify'>
              The New Alto S-CNG features a factory-fitted S-CNG kit that has a
              leak proof design to help ensure that safety is not compromised.
              The use of advanced components contributes to the engine’s longer
              lifespan. The New Alto S-CNG by Maruti Suzuki comes equipped with
              dual interdependent ECUs and an Intelligent Injection System, with
              which it manages to offer smoother pickup, great drivability, and
              an overall superior performance.
            </p>
          </div>
          <CarEnquiry />
        </div>
        <div className='container mx-auto mt-5 px-5 gap-9'>
          <Tab.Group>
            <div className=' flex items-center justify-end py-8'>
              <Tab.List className='space-x-1'>
                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                      : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
                  }
                >
                  Features
                </Tab>

                <Tab
                  className={({ selected }) =>
                    selected
                      ? 'bg-[#1b72b7] text-gray-200 px-4 py-2 rounded shadow'
                      : 'bg-gray-300 text-black hover:bg-[#124f80] hover:text-gray-300 mb-3 px-4 py-2 rounded shadow'
                  }
                >
                  Specifications
                </Tab>
              </Tab.List>
            </div>
            <div>
              <Tab.Panels>
                {/* exterior */}
                <Tab.Panel>
                  <div className='flex items-center bg-gray-100  justify-between'>
                    <p className='flex-1 border px-5 py-3'>Features</p>
                    <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
                  </div>

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Exterior</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Body Coloured Outside door Handles
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Body Coloured Bumpers
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheel Covers (Full)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>INTERIOR</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Dual-tone interiors
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              B &#38; C Pillar Upper Trims
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              C Pillar Lower Trim (Molded)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seat Upholstery (Fabric+Vinyl)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Silver Accent Inside Door Handles
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Silver Accent on Steering Wheel
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Silver Accent on Louvers
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>COMFORT</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Air Conditioner With Heater
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Power Steering
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Power Windows
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Assist Grips (Co - Dr. +)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Digital Clock (In Speedometer Display)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Sun Visor (Dr.+Co Dr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              RR Seat Head Test - Integrated Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Remote Back Door Opener
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Remote Fuel Lid Opener
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>UTILITY</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Console Bottle Holder
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Console Bottle Holder
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Door Trim Map Pocket (Dr.)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Door Trim Map Pocket (Passenger)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>SAFETY</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Headlight Leveling
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              RR Seat belt ELR Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              High Mounted Stop Lamp
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Immobiliser
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Front Wiper &#38; Washer (2 Speed + intermittent)
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tubeless Tyres
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Collapsible Steering Column
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Rear Door Child Lock
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Driver Side Airbag
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Passenger Airbag
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Reverse Parking Sensor
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              ABS with EBD
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Sear Belt Reminder - Dr. + Co - Dr.
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Speed Alert System
                            </p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                            <p className='flex-1 border px-5 py-3'>✔</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </Tab.Panel>

                {/* interior */}
                <Tab.Panel>
                  <div className='flex items-center bg-gray-100  justify-between'>
                    <p className='flex-1 border px-5 py-3'>Specifications</p>
                    <p className='flex-1 border px-5 py-3'>LXI CNG</p>
                    <p className='flex-1 border px-5 py-3'>LXI (O) CNG</p>
                  </div>

                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>
                            Dimensions
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Length
                            </p>
                            <p className='flex-1 border px-5 py-3'>3455 mm</p>
                            <p className='flex-1 border px-5 py-3'>3455 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Width
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1490 mm (Without side molding)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1490 mm (Without side molding)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Width
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1515 mm (With side molding)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1515 mm (With side molding)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Overall Height
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1475 mm (Unladen)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              1475 mm (Unladen)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Wheelbase
                            </p>
                            <p className='flex-1 border px-5 py-3'>2360 mm</p>
                            <p className='flex-1 border px-5 py-3'>2360 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Turning Radius
                            </p>
                            <p className='flex-1 border px-5 py-3'>4.6 m</p>
                            <p className='flex-1 border px-5 py-3'>4.6 m</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tread (Front)
                            </p>
                            <p className='flex-1 border px-5 py-3'>1295 mm</p>
                            <p className='flex-1 border px-5 py-3'>1295 mm</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tread (Rear)
                            </p>
                            <p className='flex-1 border px-5 py-3'>1290 mm</p>
                            <p className='flex-1 border px-5 py-3'>1290 mm</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Weight</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Kerb Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>845 kg</p>
                            <p className='flex-1 border px-5 py-3'>850 kg</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Gross Vehicle Weight
                            </p>
                            <p className='flex-1 border px-5 py-3'>1185 kg</p>
                            <p className='flex-1 border px-5 py-3'>1185 kg</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Engine</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Engine Type
                            </p>
                            <p className='flex-1 border px-5 py-3'>F8D</p>
                            <p className='flex-1 border px-5 py-3'>F8D</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Swept Volume
                            </p>
                            <p className='flex-1 border px-5 py-3'>796 CC</p>
                            <p className='flex-1 border px-5 py-3'>796 CC</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Number of Cylinders
                            </p>
                            <p className='flex-1 border px-5 py-3'>3</p>
                            <p className='flex-1 border px-5 py-3'>3</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Power (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              30.1 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              30.1 kW @ 6000 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Power (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              35.3 kW @ 6000 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              35.3 kW @ 6000 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Torque (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              60 Nm @3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              60 Nm @3500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Maximum Torque (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              69 Nm @3500 rpm
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              69 Nm @3500 rpm
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              No. of Valves
                            </p>
                            <p className='flex-1 border px-5 py-3'>12</p>
                            <p className='flex-1 border px-5 py-3'>12</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Transmission
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              5 Speed MT
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              5 Speed MT
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>
                            Suspension System
                          </span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Front</p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson strut
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              MacPherson strut
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>
                              3-Link Rigid Axle Suspension
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              3-Link Rigid Axle Suspension
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Capacity</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Seating Capacity
                            </p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                            <p className='flex-1 border px-5 py-3'>4</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (CNG)
                            </p>
                            <p className='flex-1 border px-5 py-3 '>
                              60L (Water Equivalent Filling Capacity)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              60L (Water Equivalent Filling Capacity)
                            </p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Fuel Tank Capacity (Petrol)
                            </p>
                            <p className='flex-1 border px-5 py-3'>35 L</p>
                            <p className='flex-1 border px-5 py-3'>35 L</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Tyres</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>
                              Tyre Size
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              145/80 R12 (Tubeless)
                            </p>
                            <p className='flex-1 border px-5 py-3'>
                              145/80 R12 (Tubeless)
                            </p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full justify-between border px-5 py-3 text-left text-sm font-medium hover:bg-gray-200 focus:outline-none'>
                          <span className='text-base uppercase'>Brakes</span>
                          <ChevronDownIcon
                            className={`${
                              open ? 'rotate-180 transform' : ''
                            } h-5 w-5 text-black font-bold`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='pb-2 text-sm text-gray-500'>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Front</p>
                            <p className='flex-1 border px-5 py-3'>Disc</p>
                            <p className='flex-1 border px-5 py-3'>Disc</p>
                          </div>
                          <div className='flex items-center text-base justify-between'>
                            <p className='flex-1 border px-5 py-3 '>Rear</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                            <p className='flex-1 border px-5 py-3'>Drum</p>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </Tab.Panel>
              </Tab.Panels>
            </div>
          </Tab.Group>
          <br></br>
          <div className='text-xs'>
            <p>
              <sup>*</sup>Black glass on the vehicles is due to lighting effect.
            </p>
            <p>
              <sup>*</sup>
              <sup>*</sup>Car models and accessories shown may vary from actual
              product. Images are used for illustration purpose only.
            </p>
            <p>
              <sup>*</sup>Test results are Rule 115 of CMVR, 1989.
            </p>
            <p>
              <sup>*</sup>Prices shown above are ex showroom Delhi.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
const ErtigaSlider = () => {
  return (
    <ImageGallery
      lazyLoad={true}
      autoPlay={true}
      loop={true}
      thumbnailPosition='bottom'
      showPlayButton={false}
      items={ertigaSlidersdata}
    />
  );
};

const CarEnquiry = () => {
  let navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [loader, setLoader] = useState('');

  const dataCollectionRef = collection(db, 'popup');
  const today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var dateTime = date + ' ' + time;

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      await addDoc(dataCollectionRef, {
        name: name,
        email: email,
        phone: phone,
        model: model,
        timestamp: dateTime,
      });
      toast.success('Form submitted successfully');
      setLoader(false);
      setName('');
      setEmail('');
      setPhone('');
      setModel('');
      navigate('/thankyou');
    } catch (error) {
      setLoader(false);
      toast.error('Something went wrong!');
    }
  };

  return (
    <div className='bg-white text-[#1a3760] border border-gray-200 shadow-sm rounded-lg p-7'>
      <p className='font-bold text-xl tracking-wide mb-7'>Car Enquiry</p>
      <form onSubmit={handleSubmit}>
        <div className='mt-3'>
          <label htmlFor='name' className='text-[#1a3760]'>
            Name
          </label>
          <input
            id='name'
            type='text'
            className='border w-full h-9 rounded p-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mt-3'>
          <label htmlFor='email' className='text-[#1a3760]'>
            Email
          </label>
          <input
            type='text'
            id='email'
            className='border w-full h-9 rounded p-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mt-3'>
          <label htmlFor='mobile' className='text-[#1a3760]'>
            Mobile
          </label>
          <input
            type='text'
            id='mobile'
            className='border w-full h-9 rounded p-2'
            value={phone}
            minLength='10'
            maxLength='10'
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/[^1-9]/g, '') &&
                  e.target.value.replace(/ /g, '')
              )
            }
          />
          {!pattern.test(phone) && phone.length === 10 ? (
            <small className='text-red-500'>phone number is invalid</small>
          ) : (
            ''
          )}
        </div>

        <div className='mt-3'>
          <label htmlFor='' className='text-[#1a3760]'>
            Model
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm'
          >
            <option>Select</option>
            <option value='Alto CNG'>Alto CNG</option>
          </select>
        </div>

        <p className='text-gray-700 mt-5 text-xs'>
          <span className='text-black font-bold text-sm'>Disclaimer</span>: I
          agree that by clicking the ‘Submit’ button below, I am explicitly
          soliciting a call/Message from Smartwheels Maruti or its
          Representatives on my ‘Mobile’.
        </p>

        <div className='flex items-start mt-5'>
          <input
            id='disclaimer'
            type='checkbox'
            required
            className='h-4 w-4 rounded'
          />
          <div className='ml-2 text-sm '>
            <label htmlFor='disclaimer' className='font-medium text-gray-700'>
              Please agree with following Disclaimer
            </label>
          </div>
        </div>

        <button
          className='bg-red-500 hover:bg-red-400 text-white px-5 py-1.5 font-bold flex mx-auto mt-5 rounded'
          type='submit'
          disabled={pattern.test(phone) && phone.length === 10 ? false : true}
        >
          {loader ? (
            <div className='flex items-center justify-center'>
              <CgSpinner className='animate-spin h-5 mr-2 text-white w-5' />
              Loading
            </div>
          ) : (
            'Submit'
          )}
        </button>
      </form>
    </div>
  );
};

export default AltoCng;

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { HiLocationMarker, HiTrendingDown, HiUsers } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container-custom py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find the <span className="text-primary-600">Cheapest Gas</span> Near You
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Save money on every fill-up with real-time gas prices from your community. 
              Join thousands of drivers who never overpay for gas again.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2">
                <HiLocationMarker className="text-primary-600 text-2xl" />
                <span className="text-gray-700">Real-time Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <HiUsers className="text-primary-600 text-2xl" />
                <span className="text-gray-700">Community Driven</span>
              </div>
              <div className="flex items-center gap-2">
                <HiTrendingDown className="text-primary-600 text-2xl" />
                <span className="text-gray-700">Save Money</span>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                <FaApple className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon on</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>
              <button className="flex items-center justify-center gap-3 bg-black text-white px-6 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                <FaGooglePlay className="text-2xl" />
                <div className="text-left">
                  <div className="text-xs">Coming Soon on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto w-72 h-[600px] bg-gray-900 rounded-[3rem] shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-6 bg-gray-900 rounded-t-[3rem]"></div>
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                <Image 
                  src="/gaslite-splash.png"
                  alt="GasLite App"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Notch */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-green-600 font-bold text-2xl">₱65.50</div>
              <div className="text-gray-600 text-sm">Lowest Price</div>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="text-primary-600 font-bold text-xl">3.7 km</div>
              <div className="text-gray-600 text-sm">Nearest Station</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
        }}></div>
      </div>
    </section>
  )
}
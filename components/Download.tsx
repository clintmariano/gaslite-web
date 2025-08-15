'use client'

import { motion } from 'framer-motion'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { HiQrcode } from 'react-icons/hi'

export default function Download() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="container-custom">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Start Saving on Gas Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-2xl mx-auto mb-12"
          >
            Download GasLite for free and join thousands of drivers who never overpay for gas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-6 justify-center items-center"
          >
            {/* App Store Button */}
            <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <FaApple className="text-3xl" />
              <div className="text-left">
                <div className="text-xs">Coming Soon on</div>
                <div className="text-xl font-semibold">App Store</div>
              </div>
            </button>

            {/* Google Play Button */}
            <button className="flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
              <FaGooglePlay className="text-3xl" />
              <div className="text-left">
                <div className="text-xs">Coming Soon on</div>
                <div className="text-xl font-semibold">Google Play</div>
              </div>
            </button>
          </motion.div>

          {/* QR Code Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 inline-block"
          >
            <div className="bg-white p-6 rounded-2xl">
              <HiQrcode className="text-8xl text-gray-300 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Scan to download</p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16"
          >
            <div>
              <div className="text-3xl font-bold text-white">5,000+</div>
              <div className="text-primary-100">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10,000+</div>
              <div className="text-primary-100">Gas Stations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$2.5M+</div>
              <div className="text-primary-100">Saved on Gas</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const screenshots = [
  {
    title: 'Find Stations',
    description: 'View all gas stations near you on an interactive map',
    image: '/screenshots/map-view.jpg',
  },
  {
    title: 'Compare Prices',
    description: 'See real-time prices for different fuel types',
    image: '/screenshots/list-view.jpg',
  },
  {
    title: 'Track Progress',
    description: 'Complete quests and earn rewards for reporting prices',
    image: '/screenshots/quests.jpg',
  },
  {
    title: 'Your Profile',
    description: 'Track your contributions and achievements',
    image: '/screenshots/profile.jpg',
  },
]

export default function Screenshots() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            See GasLite in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            A beautiful, intuitive interface that makes finding cheap gas effortless
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] shadow-2xl">
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                <Image 
                  src={screenshots[selectedIndex].image}
                  alt={screenshots[selectedIndex].title}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-full"></div>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                onClick={() => setSelectedIndex(index)}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedIndex === index
                    ? 'bg-primary-50 border-2 border-primary-300'
                    : 'bg-white border-2 border-gray-200 hover:border-primary-200'
                }`}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {screenshot.title}
                </h3>
                <p className="text-gray-600">
                  {screenshot.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
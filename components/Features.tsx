'use client'

import { motion } from 'framer-motion'
import { 
  HiLocationMarker, 
  HiUsers, 
  HiTrendingDown,
  HiStar,
  HiWifi,
  HiLightningBolt
} from 'react-icons/hi'

const features = [
  {
    icon: HiLocationMarker,
    title: 'Real-Time Prices',
    description: 'Get instant updates on gas prices at stations near you, updated by the community in real-time.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: HiUsers,
    title: 'Community Driven',
    description: 'Prices are reported and verified by fellow drivers, ensuring accuracy and reliability.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: HiTrendingDown,
    title: 'Save Money',
    description: 'Find the cheapest gas stations instantly and save money on every fill-up.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: HiStar,
    title: 'Earn Rewards',
    description: 'Report prices, earn points, unlock badges, and climb the leaderboard.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: HiWifi,
    title: 'Works Offline',
    description: 'Access cached prices and stations even without an internet connection.',
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    icon: HiLightningBolt,
    title: 'Lightning Fast',
    description: 'Optimized for speed with instant search and smooth map interactions.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100',
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose GasLite?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Join thousands of smart drivers who save money on gas every day
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="p-6 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                  <feature.icon className={`text-3xl ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Link from 'next/link'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container-custom py-12">
          <Link href="/" className="text-primary-600 hover:text-primary-700 mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                GasLite ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Email address (for account creation)</li>
                <li>Display name (optional)</li>
                <li>Profile picture (optional)</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Location Information</h3>
              <p className="text-gray-700 mb-4">
                We collect your location data to show you nearby gas stations and their prices. Location access is required for core app functionality.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Usage Data</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Gas stations viewed</li>
                <li>Prices reported</li>
                <li>Search queries</li>
                <li>App interactions and preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>To provide gas station locations and prices</li>
                <li>To enable community features like price reporting</li>
                <li>To personalize your experience</li>
                <li>To improve our services</li>
                <li>To send important app updates and notifications</li>
                <li>To maintain leaderboards and achievement systems</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 mb-4">We do not sell your personal information. We may share your information in the following situations:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With other users (username and contributions only)</li>
                <li>With service providers (hosting, analytics)</li>
                <li>For legal requirements or to protect rights</li>
                <li>With your consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of certain communications</li>
                <li>Disable location services (limits app functionality)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                GasLite is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                Email: <a href="mailto:support@gaslite.app" className="text-primary-600 hover:text-primary-700">support@gaslite.app</a>
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
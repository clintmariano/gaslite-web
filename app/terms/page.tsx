import Link from 'next/link'
import Footer from '@/components/Footer'

export default function TermsOfService() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="container-custom py-12">
          <Link href="/" className="text-primary-600 hover:text-primary-700 mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">Effective Date: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By downloading, installing, or using GasLite ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. You must be at least 18 years old to use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                GasLite is a community-driven platform that provides real-time gas prices and station information. The App relies on user-contributed data and does not guarantee the accuracy, completeness, or timeliness of information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Conduct</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Submit false, misleading, or inaccurate price information</li>
                <li>Manipulate or abuse the reward system</li>
                <li>Use the App for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt the App's operation</li>
                <li>Attempt to gain unauthorized access to any portion of the App</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Use automated systems or bots to interact with the App</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User-Generated Content</h2>
              <p className="text-gray-700 mb-4">
                By submitting content (prices, reviews, etc.) to GasLite, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute that content.
              </p>
              <p className="text-gray-700 mb-4">
                You represent and warrant that you have the right to submit the content and that it does not violate any third-party rights or applicable laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Disclaimers</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>The App is provided "as is" without warranties of any kind</li>
                <li>We do not guarantee the accuracy of gas prices or station information</li>
                <li>We are not responsible for decisions made based on App information</li>
                <li>Gas prices can change rapidly and may not reflect current prices</li>
                <li>We do not endorse any particular gas station or brand</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, GasLite and its affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless GasLite, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the App or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate or suspend your account and access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of the Philippines, without regard to conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms, please contact us at:
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
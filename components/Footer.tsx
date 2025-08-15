import Link from 'next/link'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GasLite</h3>
            <p className="text-gray-400">
              Your trusted companion for finding the cheapest gas prices near you.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-white transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@gaslite.app" className="hover:text-white transition-colors">
                  support@gaslite.app
                </a>
              </li>
              <li className="text-gray-400">
                Available 24/7 for support
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} GasLite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
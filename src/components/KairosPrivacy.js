import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const KairosPrivacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Kairos Privacy Policy | The perfect moment for learning</title>
        <meta name="description" content="Privacy policy for Kairos, the time-telling educational app for children." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <section className="px-8 md:px-16 pt-8 md:pt-16 pb-16">
        <div className="flex items-center space-x-4 mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="mr-2" size={16} />
            <span>Back to mikedev.me</span>
          </Link>
          <span className="text-gray-300">|</span>
          <Link href="/kairos-support" className="text-blue-600 hover:text-blue-800 transition-colors">
            Kairos Support
          </Link>
        </div>

        <div className="max-w-3xl">
          <h1 className="text-blue-600 font-serif text-4xl md:text-6xl mb-4">
            Kairos Privacy Policy
          </h1>
          <h2 className="text-gray-800 text-xl md:text-2xl mb-8">
            The perfect moment for learning
          </h2>
          <p className="text-gray-600 text-lg">
            Last updated: March 1, 2025
          </p>
        </div>
      </section>

      {/* Privacy Policy */}
      <section className="px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-blue-600 font-serif text-2xl mb-8">Privacy Policy</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Information Collection and Use</h3>
              <p className="text-gray-600">
                Kairos does not collect any data from this app. We believe in providing a safe, 
                private learning environment for children of all ages. The app functions entirely on-device and 
                does not require any account creation, login, or personal details.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">No Data Collection</h3>
              <p className="text-gray-600">
                We prioritize your privacy and have designed Kairos to function without collecting any data.
                All activities, progress, and settings are stored locally on your device and are not transmitted
                to our servers or any third parties.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Third-Party Services</h3>
              <p className="text-gray-600">
                Kairos does not integrate with any third-party services. There are no analytics, tracking tools,
                advertisements, in-app purchases, or external links within the app that could potentially collect data.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Children's Privacy</h3>
              <p className="text-gray-600">
                Kairos is designed with children in mind. We take children's privacy seriously and have built the app
                to be fully compliant with children's privacy regulations, including COPPA (Children's Online Privacy Protection Act).
                Since we do not collect any data, there are no privacy concerns related to children's use of the app.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Changes to This Policy</h3>
              <p className="text-gray-600">
                Any future changes to this privacy policy will be posted on this page. The policy was last updated on March 1, 2025.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Contact Us</h3>
              <p className="text-gray-600">
                If you have any questions regarding privacy while using Kairos, please contact us at{' '}
                <a 
                  href="mailto:kairos.timeapp@gmail.com" 
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  kairos.timeapp@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 Kairos Time Learning App</p>
            <Link href="/kairos-support" className="text-gray-400 hover:text-blue-600 transition-colors">
              Support
            </Link>
          </div>
          <a 
            href="mailto:kairos.timeapp@gmail.com" 
            className="text-gray-400 hover:text-blue-600 transition-colors"
          >
            kairos.timeapp@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default KairosPrivacy;
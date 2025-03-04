import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const KairosSupport = () => {
  const faqItems = [
    {
      question: "What age group is Kairos designed for?",
      answer: "Kairos is designed primarily for children ages 5-12, but can be useful for anyone learning to tell time."
    },
    {
      question: "How do the difficulty levels work?",
      answer: "Kairos offers four difficulty levels: Beginner (hours and half-hours), Intermediate (quarter hours), Advanced (five-minute increments), and Expert (exact minutes). Each level adapts to your child's growing skills."
    },
    {
      question: "Is there a subscription or in-app purchases?",
      answer: "No. Kairos is completely free of in-app purchases and advertisements. We believe in providing a distraction-free learning environment."
    },
    {
      question: "Can I use Kairos in a classroom setting?",
      answer: "Absolutely! Kairos is designed to be used both at home and in classrooms. Its clean interface makes it ideal for educational settings."
    },
    {
      question: "How do I switch between Clock Builder and Time Quiz modes?",
      answer: "Simply return to the main menu by tapping the home button, and select your preferred mode from the home screen."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Kairos Support | The perfect moment for learning</title>
        <meta name="description" content="Support page for Kairos, the time-telling educational app for children." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header */}
      <section className="px-8 md:px-16 pt-8 md:pt-16 pb-16">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors">
          <ArrowLeft className="mr-2" size={16} />
          <span>Back to mikedev.me</span>
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-blue-600 font-serif text-4xl md:text-6xl mb-4">
            Kairos
          </h1>
          <h2 className="text-gray-800 text-xl md:text-2xl mb-8">
            The perfect moment for learning
          </h2>
          <p className="text-gray-600 text-lg">
            Support resources for the Kairos time-telling educational app
          </p>
        </div>
      </section>

      {/* Support Information */}
      <section className="px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-blue-600 font-serif text-2xl mb-8">Contact Support</h2>
          
          <div className="mb-12">
            <p className="text-gray-800 mb-4">
              For any questions, feedback, or issues with Kairos, please contact us at:
            </p>
            <a 
              href="mailto:kairos.timeapp@gmail.com" 
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              kairos.timeapp@gmail.com
            </a>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h3 className="text-gray-800 font-medium mb-2">Expected Response Times</h3>
              <p className="text-gray-600">
                We aim to respond to all support inquiries within 24-48 hours during business days.git add src/components/KairosSupport.js src/pages/kairos-support.js
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl">
          <h2 className="text-blue-600 font-serif text-2xl mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="pb-6 border-b border-gray-100 last:border-b-0">
                <h3 className="text-gray-800 font-medium text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
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
                Kairos may collect certain information that is not linked to your identity. We believe in providing a safe, 
                private learning environment for children of all ages. The app currently functions primarily on-device but 
                may collect anonymized data for product improvement purposes.
              </p>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Data Not Linked to You</h3>
              <p className="text-gray-600">
                The following data may be collected but is not linked to your identity:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-600 space-y-1">
                <li><strong>Contact Info</strong>: Optional contact information that is not associated with your identity.</li>
                <li><strong>Usage Data</strong>: Information about how you use the app, including features accessed and time spent.</li>
                <li><strong>Identifiers</strong>: Device identifiers that cannot personally identify you.</li>
                <li><strong>Diagnostics</strong>: App performance data, crash logs, and other technical information.</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gray-800 font-medium text-lg mb-2">Third-Party Services</h3>
              <p className="text-gray-600">
                Kairos does not integrate with any third-party services that would collect user data. 
                There are no advertisements, in-app purchases, or external links within the app.
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
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 Kairos Time Learning App</p>
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

export default KairosSupport;
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
                We aim to respond to all support inquiries within 24-48 hours during business days.
              </p>
            </div>
            
            <div className="mt-6">
              <p className="text-gray-800">
                For privacy information, please visit our{' '}
                <Link href="/kairos-privacy" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Privacy Policy
                </Link>
                .
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

      {/* Footer */}
      <section className="px-8 md:px-16 py-16 border-t border-gray-100">
        <div className="max-w-3xl flex flex-col md:flex-row items-center justify-between text-sm">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400">© 2025 Kairos Time Learning App</p>
            <Link href="/kairos-privacy" className="text-gray-400 hover:text-blue-600 transition-colors">
              Privacy Policy
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

export default KairosSupport;
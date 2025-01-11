'use client'

import { useEffect } from 'react'

export default function Home() {
  // GTM event handler
  const handleClick = (eventName: string) => {
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString()
      })
    }
  }

  return (
    <main className="min-h-screen p-8">
      {/* Hero Section */}
      <section 
        className="text-center py-20"
        data-gtm-section="hero"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Demo Site</h1>
        <p className="text-xl mb-8">Testing Google Tag Manager Implementation</p>
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          data-gtm-element="hero-cta"
          onClick={() => handleClick('hero_cta_click')}
        >
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section 
        className="py-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        data-gtm-section="features"
      >
        {['Feature 1', 'Feature 2', 'Feature 3'].map((feature, index) => (
          <div 
            key={index}
            className="p-6 border rounded hover:shadow-lg cursor-pointer"
            data-gtm-element={`feature-${index + 1}`}
            onClick={() => handleClick(`feature_${index + 1}_click`)}
          >
            <h3 className="text-xl font-bold mb-2">{feature}</h3>
            <p>Click to learn more about {feature}</p>
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section 
        className="text-center py-16"
        data-gtm-section="contact"
      >
        <button 
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          data-gtm-element="contact-button"
          onClick={() => handleClick('contact_button_click')}
        >
          Contact Us
        </button>
      </section>
    </main>
  )
}

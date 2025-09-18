import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface ContactFormData {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

interface Props {
    companyName: string;
    companyAddress?: string;
    companyPhone?: string;
    companyEmail?: string;
    companyWhatsapp?: string;
    mapLatitude: number;
    mapLongitude: number;
    socialLinks: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
        linkedin?: string;
        youtube?: string;
    };
    [key: string]: unknown;
}

export default function Contact({
    companyName,
    companyAddress,
    companyPhone,
    companyEmail,
    companyWhatsapp,
    mapLatitude,
    mapLongitude,
    socialLinks
}: Props) {
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm<ContactFormData>({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        post(route('contact.store'), {
            onSuccess: () => {
                setIsSubmitted(true);
                setData({ name: '', email: '', message: '' });
            }
        });
    };

    const socialIcons = {
        facebook: '📘',
        instagram: '📷',
        twitter: '🐦',
        linkedin: '💼',
        youtube: '📺'
    };

    return (
        <>
            <Head>
                <title>Contact Us - {companyName}</title>
                <meta name="description" content={`Get in touch with ${companyName} for your next event. Contact us for professional event production services, quotes, and consultations.`} />
            </Head>

            <div className="min-h-screen bg-white">
                {/* Navigation */}
                <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-4">
                            <Link href={route('home')} className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">D</span>
                                </div>
                                <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    {companyName}
                                </h1>
                            </Link>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href={route('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                                <Link href={route('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                                <Link href={route('services.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                                <Link href={route('portfolio.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
                                <Link href={route('contact.index')} className="text-blue-600 font-semibold">Contact</Link>
                            </div>
                            
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl">
                                💬 Let's Talk!
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                GET IN <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    TOUCH
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                                Ready to create your next unforgettable event? We'd love to hear about your vision and discuss 
                                how we can bring it to life with our professional event production services.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                {companyPhone && (
                                    <a
                                        href={`tel:${companyPhone}`}
                                        className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
                                    >
                                        📞 Call Now
                                    </a>
                                )}
                                {companyWhatsapp && (
                                    <a
                                        href={`https://wa.me/${companyWhatsapp.replace(/\D/g, '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
                                    >
                                        💬 WhatsApp
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16">
                            {/* Contact Form */}
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    SEND US A MESSAGE
                                </h2>
                                
                                {isSubmitted && (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
                                        <div className="flex items-center space-x-3">
                                            <span className="text-2xl">✅</span>
                                            <div>
                                                <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                                                <p className="text-green-600">Thank you for your message. We'll get back to you within 24 hours.</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={data.name}
                                            onChange={(e) => setData('name', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                                errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                                            }`}
                                            placeholder="Enter your full name"
                                            disabled={processing}
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                                                errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                                            }`}
                                            placeholder="Enter your email address"
                                            disabled={processing}
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 text-sm mt-2">{errors.email}</p>
                                        )}
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={data.message}
                                            onChange={(e) => setData('message', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                                                errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300 focus:border-blue-500'
                                            }`}
                                            placeholder="Tell us about your event, requirements, budget, or any questions you have..."
                                            disabled={processing}
                                        />
                                        {errors.message && (
                                            <p className="text-red-600 text-sm mt-2">{errors.message}</p>
                                        )}
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {processing ? (
                                            <>
                                                <span className="inline-block animate-spin mr-2">⏳</span>
                                                Sending Message...
                                            </>
                                        ) : (
                                            <>
                                                🚀 Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                            
                            {/* Contact Information */}
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    CONTACT INFORMATION
                                </h2>
                                
                                <div className="space-y-6 mb-12">
                                    {companyAddress && (
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-blue-600 text-xl">📍</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                                                <p className="text-gray-600">{companyAddress}</p>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {companyPhone && (
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-green-600 text-xl">📞</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Phone Number</h3>
                                                <a href={`tel:${companyPhone}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    {companyPhone}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {companyEmail && (
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <span className="text-purple-600 text-xl">📧</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Email Address</h3>
                                                <a href={`mailto:${companyEmail}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                                                    {companyEmail}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <span className="text-orange-600 text-xl">⏰</span>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                                            <p className="text-gray-600">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 4:00 PM<br />
                                                Sunday: By Appointment Only
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                {Object.keys(socialLinks).length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                                        <div className="flex space-x-4">
                                            {Object.entries(socialLinks).map(([platform, url]) => (
                                                <a
                                                    key={platform}
                                                    href={url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-blue-100 hover:text-blue-600 transition-colors"
                                                >
                                                    <span className="text-xl">{socialIcons[platform as keyof typeof socialIcons] || '🔗'}</span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                FIND US HERE
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Visit our studio for consultations or let us come to your venue
                            </p>
                        </div>
                        
                        <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gray-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl">🗺️</span>
                                </div>
                                <p className="text-gray-600 text-lg mb-2">Interactive Map</p>
                                <p className="text-sm text-gray-500">
                                    Coordinates: {mapLatitude}, {mapLongitude}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    {companyAddress || 'Our Office Location'}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                FREQUENTLY ASKED QUESTIONS
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Quick answers to common questions about our services
                            </p>
                        </div>
                        
                        <div className="max-w-4xl mx-auto">
                            <div className="grid md:grid-cols-2 gap-8">
                                {[
                                    {
                                        question: 'How far in advance should I book?',
                                        answer: 'We recommend booking 2-3 months in advance for best availability, especially during peak season (spring and fall).'
                                    },
                                    {
                                        question: 'Do you provide on-site technical support?',
                                        answer: 'Yes! All our packages include professional technicians who stay throughout your event to ensure everything runs smoothly.'
                                    },
                                    {
                                        question: 'Can you work at any venue?',
                                        answer: 'Absolutely! We work at hotels, outdoor venues, private homes, corporate offices, and any location you choose.'
                                    },
                                    {
                                        question: 'What\'s included in your quotes?',
                                        answer: 'Our quotes include equipment, delivery, setup, operation, technical support, and breakdown - everything you need for a successful event.'
                                    },
                                    {
                                        question: 'Do you have backup equipment?',
                                        answer: 'Yes, we always bring backup systems for critical components to ensure your event continues without any interruptions.'
                                    },
                                    {
                                        question: 'Can you help with planning and design?',
                                        answer: 'Definitely! Our team offers consultation services to help you plan the perfect audio-visual setup for your event goals and budget.'
                                    }
                                ].map((faq, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY TO GET STARTED?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Don't wait - let's start planning your perfect event today. Our team is ready to bring your vision to life!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('services.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                🎯 View Our Services
                            </Link>
                            <Link
                                href={route('portfolio.index')}
                                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                📸 See Our Work
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-4 gap-8">
                            <div className="col-span-2">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <span className="text-white font-bold text-lg">D</span>
                                    </div>
                                    <h3 className="text-2xl font-bold" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                        {companyName}
                                    </h3>
                                </div>
                                <p className="text-gray-400 mb-4">
                                    Creating unforgettable experiences through professional event production and audio-visual services.
                                </p>
                                <div className="flex space-x-4">
                                    {Object.entries(socialLinks).slice(0, 4).map(([platform, url]) => (
                                        <a
                                            key={platform}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                                        >
                                            {socialIcons[platform as keyof typeof socialIcons] || '🔗'}
                                        </a>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li><Link href={route('home')} className="hover:text-white transition-colors">Home</Link></li>
                                    <li><Link href={route('about')} className="hover:text-white transition-colors">About</Link></li>
                                    <li><Link href={route('services.index')} className="hover:text-white transition-colors">Services</Link></li>
                                    <li><Link href={route('portfolio.index')} className="hover:text-white transition-colors">Portfolio</Link></li>
                                    <li><Link href={route('contact.index')} className="hover:text-white transition-colors">Contact</Link></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                                <ul className="space-y-2 text-gray-400">
                                    {companyPhone && <li>📞 {companyPhone}</li>}
                                    {companyEmail && <li>📧 {companyEmail}</li>}
                                    {companyWhatsapp && <li>💬 WhatsApp Available</li>}
                                    <li>📍 Production City, PC</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved. | 500+ successful events since 2015</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
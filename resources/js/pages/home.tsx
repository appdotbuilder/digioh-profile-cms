import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    slug: string;
    icon: string;
    short_description: string;
}

interface PortfolioItem {
    id: number;
    title: string;
    slug: string;
    category: string;
    cover_image: string;
    client_name: string;
    date: string;
}

interface ClientLogo {
    name: string;
    image: string;
    url?: string;
}

interface Props {
    services: Service[];
    portfolioItems: PortfolioItem[];
    clientLogos: ClientLogo[];
    companyName: string;
    tagline: string;
    eventsCompleted: string;
    establishedYear: string;

    [key: string]: unknown;
}

const iconMap: Record<string, string> = {
    microphone: '🎤',
    lights: '💡',
    projector: '📽️',
    stage: '🎭',
    camera: '📸',
};

export default function Home({ 
    services, 
    portfolioItems, 
    clientLogos, 
    companyName, 
    tagline, 
    eventsCompleted, 
    establishedYear,
}: Props) {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <Head>
                <title>{companyName} - {tagline}</title>
                <meta name="description" content={`${companyName} is your premier event production partner, specializing in professional audio-visual services. ${eventsCompleted}+ successful events since ${establishedYear}.`} />
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
                                <Link href={route('home')} className="text-blue-600 font-semibold">Home</Link>
                                <Link href={route('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                                <Link href={route('services.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                                <Link href={route('portfolio.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
                                <Link href={route('contact.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                            </div>
                            
                            <Link
                                href={route('contact.index')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all"
                            >
                                Get Quote
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div className="text-center">
                            <div className="mb-8">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                    🎉 {eventsCompleted}+ Successful Events Since {establishedYear}
                                </span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                {tagline.split(' ').slice(0, -1).join(' ')}
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {tagline.split(' ').slice(-1)[0]}
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                                {companyName} is your premier event production partner, specializing in professional audio-visual services, 
                                creative lighting design, and comprehensive technical support for corporate events, weddings, and special occasions.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('contact.index')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    🚀 Start Your Project
                                </Link>
                                <Link
                                    href={route('portfolio.index')}
                                    className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                                >
                                    📸 View Our Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                OUR CORE SERVICES
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Professional event production services tailored to make your occasion extraordinary
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={service.id} className={`bg-gradient-to-br ${
                                    index === 0 ? 'from-blue-50 to-indigo-50' :
                                    index === 1 ? 'from-purple-50 to-pink-50' :
                                    'from-orange-50 to-yellow-50'
                                } p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300`}>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${
                                        index === 0 ? 'from-blue-600 to-indigo-600' :
                                        index === 1 ? 'from-purple-600 to-pink-600' :
                                        'from-orange-600 to-yellow-600'
                                    } rounded-2xl mx-auto mb-6 flex items-center justify-center`}>
                                        <span className="text-2xl">{iconMap[service.icon] || '🎯'}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.short_description}</p>
                                    <Link
                                        href={route('services.show', service.slug)}
                                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                                    >
                                        Learn More <span className="ml-2">→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link
                                href={route('services.index')}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                            >
                                View All Services 
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Portfolio Preview */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                FEATURED PORTFOLIO
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Explore our recent work across events, weddings, signage, and equipment rental
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {portfolioItems.map((item) => (
                                <Link
                                    key={item.id}
                                    href={route('portfolio.show', item.slug)}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 block"
                                >
                                    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                                        {item.cover_image && (
                                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                                <span className="text-white text-lg font-semibold">📸</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-2">
                                            {item.category}
                                        </span>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">Client: {item.client_name}</p>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {new Date(item.date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'long', 
                                                day: 'numeric' 
                                            })}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link
                                href={route('portfolio.index')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block"
                            >
                                View Complete Portfolio 📸
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Client Logos */}
                {clientLogos.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    TRUSTED BY LEADING BRANDS
                                </h2>
                                <p className="text-xl text-gray-600">
                                    We're proud to partner with amazing clients across various industries
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
                                {clientLogos.map((client, index) => (
                                    <div key={index} className="bg-gray-100 rounded-xl p-6 text-center">
                                        <span className="text-lg font-bold text-gray-700">{client.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY TO CREATE YOUR NEXT EVENT?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss your vision and bring it to life with our professional event production services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('contact.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 Get Free Quote
                            </Link>
                            <Link
                                href={route('about')}
                                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                👥 Meet Our Team
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
                                    {tagline} through professional event production and audio-visual services.
                                </p>
                                <div className="flex space-x-4">
                                    <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">📘</span>
                                    <span className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center">📷</span>
                                    <span className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">🐦</span>
                                    <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">💼</span>
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
                                    <li>📞 +1 (555) 123-4567</li>
                                    <li>📧 info@{companyName.toLowerCase()}.com</li>
                                    <li>💬 WhatsApp Available</li>
                                    <li>📍 Production City, PC</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; {currentYear} {companyName}. All rights reserved. | {eventsCompleted}+ successful events since {establishedYear}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
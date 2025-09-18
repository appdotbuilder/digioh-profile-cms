import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface TeamMember {
    name: string;
    role_title: string;
    photo?: string;
    bio: string;
    social_links?: {
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };
}

interface Props {
    teamMembers: TeamMember[];
    companyName: string;
    companyDescription?: string;
    companyAddress?: string;
    establishedYear: string;
    eventsCompleted: string;
    mapLatitude: number;
    mapLongitude: number;
    [key: string]: unknown;
}

export default function About({ 
    teamMembers, 
    companyName, 
    companyDescription, 
    companyAddress, 
    establishedYear, 
    eventsCompleted,
    mapLatitude,
    mapLongitude 
}: Props) {
    const currentYear = new Date().getFullYear();
    const yearsInBusiness = currentYear - parseInt(establishedYear);

    return (
        <>
            <Head>
                <title>About Us - {companyName}</title>
                <meta name="description" content={companyDescription || `Learn more about ${companyName} and our team of event production professionals. ${eventsCompleted}+ successful events since ${establishedYear}.`} />
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
                                <Link href={route('about')} className="text-blue-600 font-semibold">About</Link>
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
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                ABOUT <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {companyName}
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Discover our story, meet our talented team, and learn about our commitment to creating unforgettable experiences.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Company Story Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    OUR STORY
                                </h2>
                                <div className="prose prose-lg text-gray-600">
                                    {companyDescription ? (
                                        <p className="mb-6">{companyDescription}</p>
                                    ) : (
                                        <>
                                            <p className="mb-6">
                                                Founded in {establishedYear}, {companyName} began with a simple vision: to transform ordinary events into extraordinary experiences through cutting-edge technology and unparalleled service.
                                            </p>
                                            <p className="mb-6">
                                                Over {yearsInBusiness} years, we've grown from a small startup to a leading event production company, completing {eventsCompleted}+ successful projects across corporate events, weddings, concerts, and special occasions.
                                            </p>
                                            <p>
                                                Our commitment to excellence, attention to detail, and passion for innovation has made us the trusted partner for clients who demand nothing but the best for their most important moments.
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl text-center">
                                    <div className="text-4xl font-bold text-blue-600 mb-2">{eventsCompleted}+</div>
                                    <div className="text-gray-600 font-medium">Events Completed</div>
                                </div>
                                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl text-center">
                                    <div className="text-4xl font-bold text-purple-600 mb-2">{yearsInBusiness}</div>
                                    <div className="text-gray-600 font-medium">Years Experience</div>
                                </div>
                                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-2xl text-center">
                                    <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
                                    <div className="text-gray-600 font-medium">Client Satisfaction</div>
                                </div>
                                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl text-center">
                                    <div className="text-4xl font-bold text-green-600 mb-2">24/7</div>
                                    <div className="text-gray-600 font-medium">Event Support</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Vision & Mission */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    OUR VISION
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To be the premier event production company that transforms ideas into unforgettable experiences, 
                                    setting new standards of excellence in the industry through innovation, creativity, and exceptional service.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">💎</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    OUR MISSION
                                </h3>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    To deliver exceptional audio-visual production services that exceed client expectations, 
                                    combining cutting-edge technology with personalized service to create memorable experiences 
                                    that bring people together and celebrate life's most important moments.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                MEET OUR TEAM
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                The talented professionals behind every successful event
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                                        <span className="text-white text-2xl font-bold">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                                    <p className="text-blue-600 font-semibold mb-4">{member.role_title}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{member.bio}</p>
                                    
                                    {member.social_links && (
                                        <div className="flex justify-center space-x-3">
                                            {member.social_links.linkedin && (
                                                <a href={member.social_links.linkedin} target="_blank" rel="noopener noreferrer" 
                                                   className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                                    💼
                                                </a>
                                            )}
                                            {member.social_links.twitter && (
                                                <a href={member.social_links.twitter} target="_blank" rel="noopener noreferrer"
                                                   className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                                                    🐦
                                                </a>
                                            )}
                                            {member.social_links.instagram && (
                                                <a href={member.social_links.instagram} target="_blank" rel="noopener noreferrer"
                                                   className="w-8 h-8 bg-pink-600 rounded-lg flex items-center justify-center text-white hover:bg-pink-700 transition-colors">
                                                    📷
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Location Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                OUR LOCATION
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Visit our studio or let us come to your venue - we're here to serve you wherever you are
                            </p>
                        </div>
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                                <span className="text-blue-600">📍</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Address</h4>
                                                <p className="text-gray-600">{companyAddress || '123 Event Street, Production City, PC 12345'}</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                                <span className="text-green-600">📞</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Phone</h4>
                                                <p className="text-gray-600">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                                <span className="text-purple-600">📧</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Email</h4>
                                                <p className="text-gray-600">info@{companyName.toLowerCase()}.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-4">
                                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                                                <span className="text-orange-600">⏰</span>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Hours</h4>
                                                <p className="text-gray-600">Mon-Fri: 9AM-6PM<br />Weekend: By Appointment</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-8">
                                        <Link
                                            href={route('contact.index')}
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 inline-block text-center"
                                        >
                                            📞 Contact Us Today
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gray-400 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">🗺️</span>
                                        </div>
                                        <p className="text-gray-600">Interactive Map</p>
                                        <p className="text-sm text-gray-500 mt-2">
                                            Coordinates: {mapLatitude}, {mapLongitude}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY TO WORK WITH US?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss your next event and discover how our team can bring your vision to life.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('contact.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 Start Your Project
                            </Link>
                            <Link
                                href={route('portfolio.index')}
                                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                📸 View Our Portfolio
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
                            <p>&copy; {new Date().getFullYear()} {companyName}. All rights reserved. | {eventsCompleted}+ successful events since {establishedYear}</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
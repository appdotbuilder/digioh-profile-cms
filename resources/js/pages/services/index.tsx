import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    id: number;
    title: string;
    slug: string;
    icon: string;
    short_description: string;
}

interface Props {
    services: Service[];
    [key: string]: unknown;
}

const iconMap: Record<string, string> = {
    microphone: '🎤',
    lights: '💡',
    projector: '📽️',
    stage: '🎭',
    camera: '📸',
};

const gradientClasses = [
    'from-blue-50 to-indigo-50',
    'from-purple-50 to-pink-50',
    'from-orange-50 to-yellow-50',
    'from-green-50 to-teal-50',
    'from-red-50 to-pink-50',
];

const iconGradientClasses = [
    'from-blue-600 to-indigo-600',
    'from-purple-600 to-pink-600',
    'from-orange-600 to-yellow-600',
    'from-green-600 to-teal-600',
    'from-red-600 to-pink-600',
];

export default function ServicesIndex({ services }: Props) {
    return (
        <>
            <Head>
                <title>Our Services - digiOH</title>
                <meta name="description" content="Explore our comprehensive event production services including audio-visual production, lighting design, staging solutions, and more." />
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
                                    digiOH
                                </h1>
                            </Link>
                            
                            <div className="hidden md:flex items-center space-x-8">
                                <Link href={route('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                                <Link href={route('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
                                <Link href={route('services.index')} className="text-blue-600 font-semibold">Services</Link>
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
                                OUR <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    SERVICES
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Professional event production services tailored to make your occasion extraordinary. 
                                From intimate gatherings to large-scale productions, we have the expertise and equipment to deliver exceptional results.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={service.id} className={`bg-gradient-to-br ${gradientClasses[index % gradientClasses.length]} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 group`}>
                                    <div className={`w-16 h-16 bg-gradient-to-br ${iconGradientClasses[index % iconGradientClasses.length]} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <span className="text-2xl">{iconMap[service.icon] || '🎯'}</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{service.short_description}</p>
                                    
                                    <Link
                                        href={route('services.show', service.slug)}
                                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-300"
                                    >
                                        Learn More 
                                        <span className="ml-2 group-hover:ml-3 transition-all duration-300">→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                WHY CHOOSE DIGIOH?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                We're more than just equipment rental - we're your event production partner
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">🎯</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
                                <p className="text-gray-600">
                                    Our certified technicians and creative professionals bring years of experience to every project, 
                                    ensuring flawless execution from setup to breakdown.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">⚡</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Cutting-Edge Equipment</h3>
                                <p className="text-gray-600">
                                    We invest in the latest technology and maintain our equipment to the highest standards, 
                                    giving you access to professional-grade systems for every event.
                                </p>
                            </div>
                            
                            <div className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">🤝</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Service</h3>
                                <p className="text-gray-600">
                                    Every event is unique, and we tailor our services to match your specific needs, 
                                    budget, and vision for an unforgettable experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Service Process Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                OUR PROCESS
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                From initial consultation to event day execution, we guide you through every step
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                { step: '01', title: 'Consultation', description: 'We discuss your vision, requirements, and budget to create a tailored proposal.' },
                                { step: '02', title: 'Planning', description: 'Our team develops a detailed plan with equipment specifications and timeline.' },
                                { step: '03', title: 'Setup', description: 'Professional installation and testing ensure everything works perfectly before your event.' },
                                { step: '04', title: 'Support', description: 'On-site technical support throughout your event for peace of mind.' },
                            ].map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">{item.step}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                        <p className="text-gray-600 text-sm">{item.description}</p>
                                    </div>
                                    {index < 3 && (
                                        <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY TO ELEVATE YOUR EVENT?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss your event needs and create a custom solution that exceeds your expectations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('contact.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 Get Free Consultation
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
                                        digiOH
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
                                    <li>📧 info@digioh.com</li>
                                    <li>💬 WhatsApp Available</li>
                                    <li>📍 Production City, PC</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                            <p>&copy; {new Date().getFullYear()} digiOH. All rights reserved. | 500+ successful events since 2015</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
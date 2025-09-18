import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Service {
    title: string;
    slug: string;
    icon: string;
    short_description: string;
    long_description: string;
    gallery?: string[];
    seo_title?: string;
    seo_description?: string;
}

interface RelatedService {
    id: number;
    title: string;
    slug: string;
    icon: string;
    short_description: string;
}

interface Props {
    service: Service;
    relatedServices: RelatedService[];
    [key: string]: unknown;
}

const iconMap: Record<string, string> = {
    microphone: '🎤',
    lights: '💡',
    projector: '📽️',
    stage: '🎭',
    camera: '📸',
};

export default function ServiceShow({ service, relatedServices }: Props) {
    return (
        <>
            <Head>
                <title>{service.seo_title || `${service.title} - digiOH`}</title>
                <meta name="description" content={service.seo_description || service.short_description} />
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

                {/* Breadcrumb */}
                <div className="bg-gray-50 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <nav className="flex items-center space-x-2 text-sm text-gray-600">
                            <Link href={route('home')} className="hover:text-blue-600 transition-colors">Home</Link>
                            <span>›</span>
                            <Link href={route('services.index')} className="hover:text-blue-600 transition-colors">Services</Link>
                            <span>›</span>
                            <span className="text-gray-900">{service.title}</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mx-auto mb-8 flex items-center justify-center">
                                <span className="text-4xl">{iconMap[service.icon] || '🎯'}</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                {service.title.split(' ').map((word, index) => (
                                    <span key={index}>
                                        {index === service.title.split(' ').length - 1 ? (
                                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                                {word}
                                            </span>
                                        ) : (
                                            word + ' '
                                        )}
                                    </span>
                                ))}
                            </h1>
                            
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                                {service.short_description}
                            </p>
                            
                            <Link
                                href={route('contact.index')}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
                            >
                                🚀 Get Started Today
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Service Details */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    SERVICE OVERVIEW
                                </h2>
                                
                                <div className="prose prose-lg text-gray-600 max-w-none">
                                    {service.long_description.split('\n').map((paragraph, index) => (
                                        <p key={index} className="mb-6 leading-relaxed">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                {service.gallery && service.gallery.length > 0 ? (
                                    <div className="grid grid-cols-2 gap-4">
                                        {service.gallery.slice(0, 4).map((image, index) => (
                                            <div key={index} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-48 flex items-center justify-center">
                                                <span className="text-4xl opacity-60">📸</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96 flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="text-6xl opacity-60 block mb-4">{iconMap[service.icon] || '🎯'}</span>
                                            <p className="text-gray-600 text-lg">{service.title}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features/Benefits */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                WHAT'S INCLUDED
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Professional-grade equipment and expert service for your event
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Professional Equipment', description: 'Top-tier, well-maintained equipment from industry-leading brands', icon: '⚡' },
                                { title: 'Expert Setup', description: 'Professional installation and configuration by certified technicians', icon: '🛠️' },
                                { title: 'On-Site Support', description: 'Technical support throughout your event for peace of mind', icon: '🤝' },
                                { title: 'Custom Configuration', description: 'Tailored setup to match your venue and event requirements', icon: '🎯' },
                                { title: 'Quality Assurance', description: 'Pre-event testing and backup systems for reliability', icon: '✅' },
                                { title: 'Full Service', description: 'Complete delivery, setup, operation, and breakdown service', icon: '🚀' },
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                                        <span className="text-white text-xl">{feature.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    RELATED SERVICES
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Explore our other professional event production services
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedServices.map((relatedService, index) => (
                                    <div key={relatedService.id} className={`bg-gradient-to-br ${
                                        index === 0 ? 'from-blue-50 to-indigo-50' :
                                        index === 1 ? 'from-purple-50 to-pink-50' :
                                        'from-orange-50 to-yellow-50'
                                    } p-6 rounded-2xl hover:shadow-xl transition-all duration-300 group`}>
                                        <div className={`w-12 h-12 bg-gradient-to-br ${
                                            index === 0 ? 'from-blue-600 to-indigo-600' :
                                            index === 1 ? 'from-purple-600 to-pink-600' :
                                            'from-orange-600 to-yellow-600'
                                        } rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <span className="text-white text-lg">{iconMap[relatedService.icon] || '🎯'}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedService.title}</h3>
                                        <p className="text-gray-600 mb-4">{relatedService.short_description}</p>
                                        
                                        <Link
                                            href={route('services.show', relatedService.slug)}
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
                )}

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY TO BOOK THIS SERVICE?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get in touch with our team to discuss your event needs and receive a custom quote.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('contact.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 Get Quote Now
                            </Link>
                            <Link
                                href={route('portfolio.index')}
                                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                📸 View Examples
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
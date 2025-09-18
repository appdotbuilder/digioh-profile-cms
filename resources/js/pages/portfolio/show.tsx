import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface PortfolioItem {
    title: string;
    slug: string;
    category: string;
    date: string;
    client_name: string;
    description: string;
    media?: string[];
    cover_image?: string;
    seo_title?: string;
    seo_description?: string;
}

interface RelatedItem {
    id: number;
    title: string;
    slug: string;
    category: string;
    cover_image?: string;
    client_name: string;
    date: string;
}

interface Props {
    portfolioItem: PortfolioItem;
    relatedItems: RelatedItem[];
    [key: string]: unknown;
}

const categoryIcons: Record<string, string> = {
    Events: '🎪',
    Weddings: '💒',
    Signage: '📋',
    Rental: '🎛️',
};

const categoryColors: Record<string, string> = {
    Events: 'bg-blue-100 text-blue-800',
    Weddings: 'bg-pink-100 text-pink-800',
    Signage: 'bg-green-100 text-green-800',
    Rental: 'bg-purple-100 text-purple-800',
};

export default function PortfolioShow({ portfolioItem, relatedItems }: Props) {
    return (
        <>
            <Head>
                <title>{portfolioItem.seo_title || `${portfolioItem.title} - Portfolio - digiOH`}</title>
                <meta name="description" content={portfolioItem.seo_description || portfolioItem.description.substring(0, 155)} />
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
                                <Link href={route('services.index')} className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                                <Link href={route('portfolio.index')} className="text-blue-600 font-semibold">Portfolio</Link>
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
                            <Link href={route('portfolio.index')} className="hover:text-blue-600 transition-colors">Portfolio</Link>
                            <span>›</span>
                            <span className="text-gray-900">{portfolioItem.title}</span>
                        </nav>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center space-x-4 mb-6">
                                    <span className={`px-4 py-2 rounded-full font-medium ${categoryColors[portfolioItem.category] || 'bg-gray-100 text-gray-800'}`}>
                                        {categoryIcons[portfolioItem.category]} {portfolioItem.category}
                                    </span>
                                    <span className="text-gray-500">
                                        {new Date(portfolioItem.date).toLocaleDateString('en-US', { 
                                            year: 'numeric', 
                                            month: 'long', 
                                            day: 'numeric' 
                                        })}
                                    </span>
                                </div>
                                
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    {portfolioItem.title}
                                </h1>
                                
                                <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                                    <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                                    <p className="text-lg text-blue-600 font-medium">{portfolioItem.client_name}</p>
                                </div>
                                
                                <Link
                                    href={route('contact.index')}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
                                >
                                    🚀 Request Similar Service
                                </Link>
                            </div>
                            
                            <div>
                                {portfolioItem.cover_image ? (
                                    <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl h-96 flex items-center justify-center">
                                        <span className="text-white text-8xl opacity-60">{categoryIcons[portfolioItem.category] || '📸'}</span>
                                    </div>
                                ) : (
                                    <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl h-96 flex items-center justify-center">
                                        <span className="text-white text-8xl opacity-60">{categoryIcons[portfolioItem.category] || '📸'}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Project Details */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                PROJECT OVERVIEW
                            </h2>
                            
                            <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                                {portfolioItem.description.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-6 leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Media Gallery */}
                            {portfolioItem.media && portfolioItem.media.length > 0 && (
                                <div className="mb-12">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                        PROJECT GALLERY
                                    </h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {portfolioItem.media.map((media, index) => (
                                            <div key={index} className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl h-48 flex items-center justify-center">
                                                <span className="text-4xl opacity-60">📸</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Project Highlights */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                PROJECT HIGHLIGHTS
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Key features and achievements of this project
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: 'Professional Execution', description: 'Seamless setup and operation throughout the event duration', icon: '⚡' },
                                { title: 'Custom Solutions', description: 'Tailored approach to meet specific client requirements and venue needs', icon: '🎯' },
                                { title: 'Technical Excellence', description: 'State-of-the-art equipment and expert technical support', icon: '🛠️' },
                                { title: 'Creative Vision', description: 'Innovative design and visual elements that enhanced the overall experience', icon: '✨' },
                                { title: 'Client Satisfaction', description: 'Exceeded expectations and delivered exceptional results on time', icon: '🏆' },
                                { title: 'Quality Assurance', description: 'Rigorous testing and backup systems ensured flawless performance', icon: '✅' },
                            ].map((highlight, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                                        <span className="text-white text-xl">{highlight.icon}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
                                    <p className="text-gray-600">{highlight.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Related Projects */}
                {relatedItems.length > 0 && (
                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                    RELATED PROJECTS
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                    Explore more projects in the {portfolioItem.category} category
                                </p>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedItems.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={route('portfolio.show', item.slug)}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group block"
                                    >
                                        <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-white text-6xl opacity-60">{categoryIcons[item.category] || '📸'}</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${categoryColors[item.category] || 'bg-gray-100 text-gray-800'}`}>
                                                {item.category}
                                            </span>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                                            <p className="text-gray-600 text-sm mb-2">Client: {item.client_name}</p>
                                            <p className="text-gray-500 text-xs">
                                                {new Date(item.date).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'short' 
                                                })}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            READY FOR YOUR OWN PROJECT?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's discuss how we can bring your vision to life with the same level of excellence and attention to detail.
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
                                📸 View More Projects
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
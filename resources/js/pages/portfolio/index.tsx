import React, { useState } from 'react';
import { Head, Link, router } from '@inertiajs/react';

interface PortfolioItem {
    id: number;
    title: string;
    slug: string;
    category: string;
    date: string;
    client_name: string;
    cover_image?: string;
    featured: boolean;
}

interface Props {
    portfolioItems: PortfolioItem[];
    categories: string[];
    selectedCategory?: string;
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

export default function PortfolioIndex({ portfolioItems, categories, selectedCategory }: Props) {
    const [selectedModal, setSelectedModal] = useState<PortfolioItem | null>(null);

    const handleCategoryFilter = (category?: string) => {
        const url = new URL(window.location.href);
        if (category) {
            url.searchParams.set('category', category);
        } else {
            url.searchParams.delete('category');
        }
        
        router.get(url.pathname + url.search, {}, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head>
                <title>Portfolio - digiOH</title>
                <meta name="description" content="Explore our portfolio of successful events, weddings, signage projects, and equipment rentals. See our professional work across various industries." />
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

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                OUR <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    PORTFOLIO
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Discover our recent work across events, weddings, signage projects, and equipment rentals. 
                                Each project showcases our commitment to excellence and attention to detail.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="py-8 bg-white border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => handleCategoryFilter()}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                    !selectedCategory
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                All Projects ({portfolioItems.length})
                            </button>
                            
                            {categories.map((category) => {
                                const count = portfolioItems.filter(item => item.category === category).length;
                                return (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryFilter(category)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
                                            selectedCategory === category
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        <span>{categoryIcons[category] || '📁'}</span>
                                        <span>{category} ({count})</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Portfolio Grid */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {portfolioItems.length === 0 ? (
                            <div className="text-center py-20">
                                <div className="w-24 h-24 bg-gray-100 rounded-3xl mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-4xl">📁</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h3>
                                <p className="text-gray-600 mb-8">Try selecting a different category filter.</p>
                                <button
                                    onClick={() => handleCategoryFilter()}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                                >
                                    View All Projects
                                </button>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {portfolioItems.map((item) => (
                                    <div
                                        key={item.id}
                                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                                        onClick={() => setSelectedModal(item)}
                                    >
                                        <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                                            {item.cover_image ? (
                                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition-all duration-300">
                                                    <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">🔍</span>
                                                </div>
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <span className="text-white text-6xl opacity-60">{categoryIcons[item.category] || '📸'}</span>
                                                </div>
                                            )}
                                            
                                            {item.featured && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        ⭐ Featured
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[item.category] || 'bg-gray-100 text-gray-800'}`}>
                                                    {categoryIcons[item.category]} {item.category}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    {new Date(item.date).toLocaleDateString('en-US', { 
                                                        year: 'numeric', 
                                                        month: 'short' 
                                                    })}
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">Client: {item.client_name}</p>
                                            
                                            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                                                View Details 
                                                <span className="ml-2">→</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </section>

                {/* Portfolio Modal */}
                {selectedModal && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedModal(null)}>
                        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                            <div className="relative">
                                <div className="h-64 md:h-80 bg-gradient-to-br from-blue-400 to-purple-500 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white text-8xl opacity-60">{categoryIcons[selectedModal.category] || '📸'}</span>
                                    </div>
                                    
                                    <button
                                        onClick={() => setSelectedModal(null)}
                                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                                    >
                                        ✕
                                    </button>
                                </div>
                                
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className={`px-4 py-2 rounded-full font-medium ${categoryColors[selectedModal.category] || 'bg-gray-100 text-gray-800'}`}>
                                            {categoryIcons[selectedModal.category]} {selectedModal.category}
                                        </span>
                                        {selectedModal.featured && (
                                            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                ⭐ Featured Project
                                            </span>
                                        )}
                                    </div>
                                    
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                                        {selectedModal.title}
                                    </h2>
                                    
                                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                                            <p className="text-gray-600">{selectedModal.client_name}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Date</h3>
                                            <p className="text-gray-600">
                                                {new Date(selectedModal.date).toLocaleDateString('en-US', { 
                                                    year: 'numeric', 
                                                    month: 'long', 
                                                    day: 'numeric' 
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-center space-x-4">
                                        <Link
                                            href={route('portfolio.show', selectedModal.slug)}
                                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                                            onClick={() => setSelectedModal(null)}
                                        >
                                            View Full Details
                                        </Link>
                                        <Link
                                            href={route('contact.index')}
                                            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
                                            onClick={() => setSelectedModal(null)}
                                        >
                                            Request Similar Service
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
                            INSPIRED BY OUR WORK?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Let's create something amazing together. Get in touch to discuss your next event.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href={route('contact.index')}
                                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                💬 Start Your Project
                            </Link>
                            <Link
                                href={route('services.index')}
                                className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                🎯 View Our Services
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
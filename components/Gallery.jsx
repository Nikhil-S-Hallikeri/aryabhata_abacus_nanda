import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';
import { GALLERY_PREVIEW } from '../constants.jsx';
import { Play } from 'lucide-react';

const Gallery = () => {
    const previewImages = GALLERY_PREVIEW; // Use diverse preview
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Gallery</h2>
                <p className="text-lg text-gray-600">A glimpse into our vibrant learning environment.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {previewImages.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setSelectedImage(img)}
                        className="group relative rounded-2xl overflow-hidden aspect-4/3 shadow-md cursor-pointer bg-gray-100"
                    >
                        {img.type === 'video' ? (
                            <div className="relative w-full h-full">
                                <video
                                    src={img.src}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    muted
                                    playsInline
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="bg-white/30 backdrop-blur-md p-4 rounded-full border border-white/40 shadow-xl group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-white fill-white" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={img.src}
                                alt={`Academy View ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute top-4 left-4">
                                <span className="text-white font-bold text-sm tracking-wider border border-white/30 bg-black/30 px-3 py-1 rounded-full backdrop-blur-md">
                                    {img.category}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center">
                <Link
                    to="/gallery"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-full hover:bg-emerald-50 hover:text-primary hover:border-emerald-100 transition-all shadow-sm hover:shadow-md"
                >
                    View All Gallery <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Image Preview Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                    >
                        {selectedImage.type === 'video' ? (
                            <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
                                <video
                                    src={selectedImage.src}
                                    controls
                                    autoPlay
                                    className="w-full h-full"
                                />
                            </div>
                        ) : (
                            <motion.img
                                src={selectedImage.src}
                                alt={selectedImage.category}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                            />
                        )}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
                        >
                            <X className="w-8 h-8" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;

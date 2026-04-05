import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, ChevronRight, CheckCircle2, Sparkles, Award } from 'lucide-react';
import { ACADEMY_INFO, GALLERY_PREVIEW } from '../constants.jsx';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    // Use the diverse subset of gallery images for the slider
    const slides = GALLERY_PREVIEW.slice(0, 6);

    useEffect(() => {
        if (slides.length === 0) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    if (slides.length === 0) return null;

    return (
        <div className="relative min-h-screen flex items-start md:items-center pt-20 md:pt-24 pb-12 md:pb-0 overflow-x-hidden overflow-y-visible">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10">
                <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
            </div>
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full opacity-10">
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-200 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="w-full md:flex-1 text-center md:text-left z-10">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-col gap-1 mb-6">
                            <div className="flex gap-2 flex-wrap justify-center md:justify-start mb-2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 shadow-sm">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>ISO 9001:2015 Certified</span>
                                </div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 shadow-sm">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>Greenary Academy (R)</span>
                                </div>
                            </div>
                            
                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight md:leading-[1.1] tracking-tight">
                                ARYABHATA <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">ACADEMY & CREATIONS</span>
                            </h1>
                        </div>

                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed mx-auto md:mx-0">
                            Empowering minds through <strong>Expert Abacus Coaching</strong> and bringing artistry to life with professional <strong>Mehandi, Aari Work, and Paintings</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mb-12 w-full sm:w-auto">
                            <a
                                href={`https://wa.me/${ACADEMY_INFO.whatsapp}`}
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-xl hover:shadow-emerald-200/50 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                WhatsApp Us
                            </a>
                            <a
                                href="tel:+918147146702"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-gray-900 border-2 border-gray-100 px-8 py-4 rounded-2xl font-bold hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm"
                            >
                                <Phone className="w-5 h-5" />
                                Call Admissions
                            </a>
                        </div>

                        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 font-medium">
                            {['Skill Learning Classes', 'Artistic Works', 'Expert Training'].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="relative w-full md:flex-1 max-w-lg md:max-w-none h-[320px] sm:h-[450px] md:h-[550px] mt-8 md:mt-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 sm:border-12 border-white/50 backdrop-blur-sm">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={slides[currentSlide].src}
                                    alt={slides[currentSlide].category}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                                
                                {/* Dynamic Category Tag */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10"
                                >
                                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold tracking-widest uppercase border border-white/30 mb-2 md:mb-3">
                                        Professional {slides[currentSlide].category}
                                    </span>
                                    <h3 className="text-white text-xl md:text-2xl font-bold">
                                        Expert {slides[currentSlide].category} Services
                                    </h3>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Floating Experience Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 md:-right-12 bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl z-20 border border-white/50 min-w-[160px] sm:min-w-[200px]"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-emerald-600 leading-none">5+</div>
                                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Years Expertise</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Slider Nav Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    currentSlide === i ? 'w-8 bg-white shadow-sm' : 'w-2 bg-white/50 border border-white/20'
                                }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;

import React from 'react';
import Header from './Header';
import Hero from './Hero';
import ProgramsGrid from './ProgramsGrid';
import ProgramDetails from './ProgramDetails';
import AboutAcademy from './AboutAcademy';
import InstructorProfile from './InstructorProfile';
import WhyChooseUs from './WhyChooseUs';
import Gallery from './Gallery';
import Footer from './Footer';
import FloatingCTA from './FloatingCTA';
import ScrollToTop from './ScrollToTop';

import { MY_SERVICES, CLASSES_OFFERED } from '../constants.jsx';

const Home = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
            <Header />
            <ScrollToTop />
            <main>
                <section id="home" className="py-6">
                    <Hero />
                </section>

                <section id="instructor" className="py-24 bg-emerald-900 text-white">
                    <InstructorProfile />
                </section>

                <section id="classes" className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Classes Offered</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Empowering students through skill-based learning and creative development.
                            </p>
                        </div>
                        <ProgramsGrid data={CLASSES_OFFERED} />
                    </div>
                </section>

                <section id="services" className="py-24 bg-emerald-50/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Services / Works</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Handcrafted artistic works and professional services tailored to your needs.
                            </p>
                        </div>
                        <ProgramsGrid data={MY_SERVICES} />
                    </div>
                </section>

                <section className="py-24 bg-gray-50">
                    <ProgramDetails data={[...CLASSES_OFFERED, ...MY_SERVICES]} />
                </section>

                <section id="about" className="py-24">
                    <AboutAcademy />
                </section>



                <section className="py-24">
                    <WhyChooseUs />
                </section>

                <section id="gallery" className="py-24 bg-gray-50">
                    <Gallery />
                </section>
            </main>

            <Footer />
            <FloatingCTA />
        </div>
    );
};

export default Home;

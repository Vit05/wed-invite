// src/pages/LandingPage.jsx
import config from '@/config/config';
import {formatEventDate} from '@/lib/formatEventDate';
import {motion} from 'framer-motion';
import {Calendar, Camera, Clock, Gift, Heart, MapPin, Music, Sparkles} from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import PhotoGallery from '@/components/PhotoGallery';

const LandingPage = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
            {/* Navigation */}
            <nav
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
                            {[
                                {id: 'hero', label: 'Головна'},
                                {id: 'countdown', label: 'Відлік'},
                                {id: 'location', label: 'Місце'},
                                {id: 'schedule', label: 'Розклад'},
                                {id: 'gallery', label: 'Галерея'},
                                {id: 'details', label: 'Деталі'}
                            ].map((section, index) => (
                                <motion.button
                                    key={section.id}
                                    initial={{opacity: 0, y: -10}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: index * 0.1}}
                                    onClick={() => scrollToSection(section.id)}
                                    className="text-slate-600 hover:text-slate-800 transition-all duration-300 font-light tracking-wide relative group text-sm sm:text-base"
                                >
                                    {section.label}
                                    <span
                                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-600 transition-all duration-300 group-hover:w-full"></span>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero"
                     className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24">
                {/* Animated Background Elements */}
                <div className="absolute inset-0">
                    <div
                        className="absolute top-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-slate-200/30 rounded-full blur-3xl animate-pulse"/>
                    <div
                        className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-80 sm:h-80 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000"/>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-slate-100/40 rounded-full blur-2xl animate-pulse delay-500"/>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-5">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Side - Text Content */}
                        <motion.div
                            initial={{opacity: 0, x: -50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 1}}
                            className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1"
                        >
                            <div className="space-y-4 sm:space-y-6">
                                <motion.div
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.3}}
                                    className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3"
                                >
                                    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-slate-600"/>
                                    <span
                                        className="text-slate-600 font-light font-body tracking-widest text-xs sm:text-sm uppercase">Запрошення на Весілля</span>
                                    <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-slate-600"/>
                                </motion.div>

                                <h1 className="text-8xl font-passions text-slate-800">
                                    <span className="block">{config.data.groomName}</span>
                                    <motion.span
                                        initial={{opacity: 0, scale: 0.5}}
                                        animate={{opacity: 1, scale: 1}}
                                        transition={{delay: 0.6, type: "spring", stiffness: 200}}
                                        className="block text-slate-600 text-5xl sm:text-5xl md:text-6xl"
                                    >
                                        &
                                    </motion.span>
                                    <span className="block">{config.data.brideName}</span>
                                </h1>

                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0.8}}
                                    className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4"
                                >
                                    <div className="h-px w-8 sm:w-12 bg-slate-600"/>
                                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 fill-current"/>
                                    <div className="h-px w-8 sm:w-12 bg-slate-600"/>
                                </motion.div>
                            </div>

                            <motion.p
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 1}}
                                className="text-lg sm:text-xl text-slate-600 font-light font-body leading-relaxed max-w-lg mx-auto lg:mx-0"
                            >
                                Два серця, одне кохання. Приєднуйтесь до нас у святкуванні нашого особливого дня.
                            </motion.p>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 1.2}}
                                className="flex justify-center lg:justify-start"
                            >
                                <motion.button
                                    whileHover={{scale: 1.05, y: -2}}
                                    whileTap={{scale: 0.95}}
                                    onClick={() => scrollToSection('countdown')}
                                    className="group relative bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-body font-medium shadow-xl transition-all duration-300 overflow-hidden"
                                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <span>Дослідити Наше Весілля</span>
                    <motion.span
                        animate={{x: [0, 4, 0]}}
                        transition={{repeat: Infinity, duration: 1.5}}
                    >
                      ↓
                    </motion.span>
                  </span>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                </motion.button>
                            </motion.div>
                        </motion.div>

                        {/* Right Side - Photo */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 1, delay: 0.3}}
                            className="relative order-1 lg:order-2"
                        >
                            <div className="relative">
                                {/* Decorative Elements */}
                                <div
                                    className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 w-16 h-16 sm:w-24 sm:h-24 border-2 border-slate-300/50 rounded-full"/>
                                <div
                                    className="absolute -bottom-4 -left-4 sm:-bottom-8 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 border border-slate-300/30 rounded-full"/>

                                {/* Main Photo */}
                                <div className="relative z-10">
                                    <img
                                        src="/photos/DSC00840.jpg"
                                        alt="Viktor & Lena"
                                        className="w-full max-w-sm sm:max-w-lg mx-auto rounded-2xl sm:rounded-3xl shadow-xl border-4 border-slate-200/50"
                                        onError={(e) => {
                                            console.error('Failed to load hero image: /photos/DSC00840.jpg');
                                            e.target.src = '/images/og-image.jpg'; // Fallback image
                                        }}
                                        loading="lazy"
                                    />

                                    {/* Overlay Gradient */}
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-800/10 to-transparent rounded-2xl sm:rounded-3xl"/>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Countdown Section */}
            <section id="countdown"
                     className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}/>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="text-center space-y-8 sm:space-y-12 lg:space-y-16"
                    >
                        <div className="space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                                <span
                                    className="text-slate-600 font-light font-body tracking-widest text-xs sm:text-sm uppercase">Зворотний Відлік</span>
                                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings text-slate-800 leading-tight">
                                До Нашого
                                <span className="block text-slate-600 font-light font-body">Особливого Дня</span>
                            </h2>

                            <p className="text-lg sm:text-xl text-slate-600 font-light font-body max-w-2xl mx-auto px-4">
                                Кожна мить наближає нас до святкування нашого кохання разом
                            </p>
                        </div>

                        <div
                            className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-200/50 shadow-xl">
                            <CountdownTimer targetDate={config.data.date}/>

                            <motion.div
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.5}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-slate-200/50"
                            >
                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600"/>
                                <span className="text-base sm:text-lg text-slate-600 font-light">
                {formatEventDate(config.data.date)}
                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Location Section */}
            <section id="location"
                     className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl"/>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl"/>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="space-y-12 sm:space-y-16 lg:space-y-20"
                    >
                        <div className="text-center space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                                <span
                                    className="text-slate-600 font-light tracking-widest text-xs sm:text-sm uppercase">Місце</span>
                                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings text-slate-800 leading-tight">
                                Весілля
                                <span className="block text-slate-600 font-light font-body">Місце</span>
                            </h2>

                            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto px-4">
                                Приєднуйтесь до нас у нашому прекрасному місці для незабутнього святкування
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <motion.div
                                initial={{opacity: 0, x: -50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 1, delay: 0.3}}
                                viewport={{once: true}}
                                className="space-y-6 sm:space-y-8"
                            >
                                <div
                                    className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-xl">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl sm:text-3xl font-light text-slate-800">
                                            {config.data.location}
                                        </h3>

                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-slate-100 rounded-full">
                                                <MapPin className="w-6 h-6 text-slate-600"/>
                                            </div>
                                            <p className="text-slate-600 text-lg font-light leading-relaxed">
                                                {config.data.address}
                                            </p>
                                        </div>

                                        <motion.a
                                            whileHover={{scale: 1.05, y: -2}}
                                            whileTap={{scale: 0.95}}
                                            href={config.data.maps_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-xl transition-all duration-300"
                                        >
                                            <MapPin className="w-5 h-5"/>
                                            Показати Маршрут
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{opacity: 0, x: 50}}
                                whileInView={{opacity: 1, x: 0}}
                                transition={{duration: 1, delay: 0.5}}
                                viewport={{once: true}}
                                className="relative"
                            >
                                <div
                                    className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-200/50">
                                    <iframe
                                        src={config.data.maps_embed}
                                        width="100%"
                                        height="300"
                                        style={{border: 0}}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="rounded-2xl sm:rounded-3xl"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-slate-800/10 to-transparent pointer-events-none"/>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Schedule Section */}
            <section id="schedule"
                     className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364758b' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}/>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="space-y-12 sm:space-y-16 lg:space-y-20"
                    >
                        <div className="text-center space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                                <span
                                    className="text-slate-600 font-light tracking-widest text-xs sm:text-sm uppercase">Розклад</span>
                                <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings text-slate-800 leading-tight">
                                Весілля
                                <span className="block text-slate-600 font-light font-body">Розклад</span>
                            </h2>

                            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto px-4">
                                Розклад нашого особливого дня - кожна мить спланована з любов&#39;ю
                            </p>
                        </div>

                        {/* Mobile Timeline - Elegant Design */}
                        <div className="block lg:hidden">
                            <div className="relative">
                                {/* Mobile Timeline Line */}
                                <div
                                    className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-slate-300 via-slate-400 to-slate-300 rounded-full"/>

                                <div className="space-y-8">
                                    {config.data.agenda.map((event, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{opacity: 0, x: -30}}
                                            whileInView={{opacity: 1, x: 0}}
                                            transition={{duration: 0.8, delay: index * 0.1}}
                                            viewport={{once: true}}
                                            className="relative flex items-start gap-6"
                                        >
                                            {/* Timeline Dot */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div
                                                    className="w-12 h-12 bg-white border-4 border-slate-600 rounded-full flex items-center justify-center shadow-lg">
                                                    <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Content Card */}
                                            <div className="flex-1 min-w-0">
                                                <div
                                                    className="bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-xl font-light text-slate-800 group-hover:text-slate-600 transition-colors">
                                                                {event.title}
                                                            </h3>
                                                            <div
                                                                className="text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
                                                                {index + 1}
                                                            </div>
                                                        </div>

                                                        <div className="space-y-3">
                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-slate-100 rounded-full">
                                                                    <Clock className="w-4 h-4 text-slate-600"/>
                                                                </div>
                                                                <span className="text-slate-600 font-light">
                                  {event.startTime} - {event.endTime}
                                </span>
                                                            </div>

                                                            <div className="flex items-center gap-3">
                                                                <div className="p-2 bg-slate-100 rounded-full">
                                                                    <MapPin className="w-4 h-4 text-slate-600"/>
                                                                </div>
                                                                <span className="text-slate-600 font-light">
                                  {event.location}
                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Desktop Timeline */}
                        <div className="hidden lg:block relative">
                            {/* Timeline Line */}
                            <div
                                className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-slate-300/50 via-slate-400/30 to-slate-300/50 rounded-full"/>

                            <div className="space-y-16">
                                {config.data.agenda.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, y: 50}}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{duration: 0.8, delay: index * 0.2}}
                                        viewport={{once: true}}
                                        className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                    >
                                        {/* Timeline Dot */}
                                        <div
                                            className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-slate-600 rounded-full border-4 border-white z-10 shadow-lg"/>

                                        {/* Content Card */}
                                        <div
                                            className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                            <div
                                                className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-slate-200/50 shadow-xl hover:shadow-2xl hover:border-slate-300/50 transition-all duration-300 group">
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-light text-slate-800 group-hover:text-slate-600 transition-colors">
                                                        {event.title}
                                                    </h3>

                                                    <div className="space-y-3">
                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-slate-100 rounded-full">
                                                                <Clock className="w-4 h-4 text-slate-600"/>
                                                            </div>
                                                            <span className="text-slate-600 font-light">
                                {event.startTime} - {event.endTime}
                              </span>
                                                        </div>

                                                        <div className="flex items-center gap-3">
                                                            <div className="p-2 bg-slate-100 rounded-full">
                                                                <MapPin className="w-4 h-4 text-slate-600"/>
                                                            </div>
                                                            <span className="text-slate-600 font-light">
                                {event.location}
                              </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Photo Gallery Section */}
            <section id="gallery"
                     className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-slate-200/20 rounded-full blur-3xl"/>
                    <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"/>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="space-y-12 sm:space-y-16 lg:space-y-20"
                    >
                        <div className="text-center space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                                <span
                                    className="text-slate-600 font-light tracking-widest text-xs sm:text-sm uppercase">Галерея</span>
                                <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings text-slate-800 leading-tight">
                                Наша
                                <span className="block text-slate-600 font-light font-body">Історія</span>
                            </h2>

                            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto px-4">
                                Миті, зафіксовані в часі, спогади, які залишаться назавжди
                            </p>
                        </div>

                        <div
                            className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-xl">
                            <PhotoGallery/>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Additional Details Section */}
            <section id="details"
                     className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2364758b' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm15 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}/>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="space-y-12 sm:space-y-16 lg:space-y-20"
                    >
                        <div className="text-center space-y-4 sm:space-y-6">
                            <motion.div
                                initial={{opacity: 0, scale: 0.8}}
                                whileInView={{opacity: 1, scale: 1}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="flex items-center justify-center gap-2 sm:gap-3"
                            >
                                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                                <span
                                    className="text-slate-600 font-light tracking-widest text-xs sm:text-sm uppercase">Деталі</span>
                                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600"/>
                            </motion.div>

                            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headings text-slate-800 leading-tight">
                                Все, що Вам
                                <span className="block text-slate-600 font-light font-body">Потрібно Знати</span>
                            </h2>

                            <p className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto px-4">
                                Важлива інформація для нашого особливого дня
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                            {/* RSVP */}
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.2}}
                                viewport={{once: true}}
                                className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 rounded-full">
                                            <Calendar className="w-6 h-6 text-slate-600"/>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-light text-slate-800 group-hover:text-slate-600 transition-colors">Підтвердження</h3>
                                    </div>
                                     <p className="text-slate-600 font-light leading-relaxed">
                                         Будь ласка, підтвердіть свою присутність до 17 жовтня 2025 року, щоб ми могли краще підготуватися до свята.
                                     </p>
                                     <p className="text-slate-600 font-light leading-relaxed">
                                         Ми з нетерпінням чекаємо цього дня і будемо дуже раді розділити його з вами!
                                     </p>
                                     <motion.a
                                         whileHover={{ scale: 1.05, y: -2 }}
                                         whileTap={{ scale: 0.95 }}
                                         href="https://forms.gle/dFhtRMC4AbaQPh3x5"
                                         target="_blank"
                                         rel="noopener noreferrer"
                                         className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium shadow-xl transition-all duration-300 mt-4"
                                     >
                                         <Calendar className="w-5 h-5" />
                                         Підтвердити Присутність
                                     </motion.a>
                                </div>
                            </motion.div>

                            {/* Gifts */}
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.8, delay: 0.3}}
                                viewport={{once: true}}
                                className="bg-white/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                            >
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-slate-100 rounded-full">
                                            <Gift className="w-6 h-6 text-slate-600"/>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-light text-slate-800 group-hover:text-slate-600 transition-colors">Квіти</h3>
                                    </div>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        Просимо не дарувати квіти — вони швидко зів’януть, а нам хотілося б зберегти
                                        пам’ять про цей день надовше.
                                    </p>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        Замість квітів ви можете подарувати пляшку білого сухого вина, щоб ми розпили її
                                        разом на річницю,
                                    </p>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        вінілову платівку — ми їх колекціонуємо,
                                    </p>
                                    <p className="text-slate-600 font-light leading-relaxed">
                                        або лотерейний квиток.
                                    </p>

                                    <p className="text-slate-600 font-light leading-relaxed">Найбільша цінність для нас — ваша присутність і щирі слова.</p>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative pb-12 pt-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="/photos/DSC00757.jpg"
                        alt="Viktor & Lena"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            console.error('Failed to load footer image: /photos/DSC00757.jpg');
                            e.target.src = '/images/og-image.jpg'; // Fallback image
                        }}
                        loading="lazy"
                    />
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 bg-black/30"/>
                    {/* Gradient overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30"/>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        viewport={{once: true}}
                        className="flex flex-col justify-between h-full min-h-[700px]"
                    >
                        {/* Top Content - Names, Date and Love Message */}
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-4 sm:space-y-6">
                                <h3 className="text-6xl font-passions text-white tracking-wider drop-shadow-lg">
                                    Viktor & Lena
                                </h3>
                                <p className="text-lg sm:text-xl text-white/90 font-light drop-shadow-md">
                                    15 Листопада, 2025
                                </p>
                            </div>

                            <div className="flex items-center justify-center gap-4 sm:gap-6">
                                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current drop-shadow-lg"/>
                                <span className="text-white/90 font-light text-base sm:text-lg drop-shadow-md">
                  Зроблено з любов&#39;ю для нашого особливого дня та для наших близьких
                </span>
                                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current drop-shadow-lg"/>
                            </div>
                        </div>

                        <div className="pt-6 sm:pt-8 border-t border-white/30">
                            <p className="text-white/70 text-sm font-light drop-shadow-md">
                                © 2025 Весілля Viktor & Lena. Всі права захищені.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
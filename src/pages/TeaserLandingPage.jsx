import {motion} from 'framer-motion';
import {Heart} from 'lucide-react';
import config from '@/config/config';

const TeaserLandingPage = ({vimeoVideoId}) => {
    // You can pass vimeoVideoId as a prop or add it to config
    const videoId = vimeoVideoId || 'YOUR_VIMEO_VIDEO_ID';

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
                <div className="space-y-16 sm:space-y-20 lg:space-y-24">

                    {/* Row 1: Short Description */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1}}
                        className="text-center space-y-6 sm:space-y-8"
                    >
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-slate-600 fill-current"/>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-passions text-slate-800">
                            {config.data.groomName} & {config.data.brideName}
                        </h1>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-headings text-slate-700">
                            Мить, що не хотіла закінчуватись
                        </h1>

                        <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto">
                            Зафіксовано: танці, виважені тости, стримані привітання, друзі, рідні та близькі, і супер
                            неймовірно проведений час, який став незабутнім без жодних зусиль — скоро премʼєра. Далі
                            буде.</p>

                        <div className="flex items-center justify-center gap-4 pt-4">
                            <div className="h-px w-12 bg-slate-600"/>
                            <Heart className="w-5 h-5 text-slate-600 fill-current"/>
                            <div className="h-px w-12 bg-slate-600"/>
                        </div>
                    </motion.div>

                    {/* Row 2: Embedded Video from Vimeo */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 1, delay: 0.3}}
                        className="relative rounded-md overflow-hidden shadow-xl border border-slate-200/50"
                    >
                        <div className="relative aspect-video bg-slate-100">
                            <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
                                <iframe
                                    src="https://player.vimeo.com/video/1155603081?badge=0&autopause=0&player_id=0&app_id=58479?autoplay=0&controls=1&title=0&byline=0&portrait=0&badge=0&pip=0&fullscreen=1&muted=0"
                                    frameBorder={0}
                                    allow="autoplay; fullscreen; clipboard-write; encrypted-media; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    title="Tizer"
                                />
                            </div>
                            <script src="https://player.vimeo.com/api/player.js"></script>
                        </div>
                    </motion.div>
<footer className={"text-center"}>
    <p>Viktor & Lena - 2026</p>
    <div className="flex items-center justify-center gap-4 pt-4">
        <div className="h-px w-12 bg-slate-600"/>
        <Heart className="w-5 h-5 text-slate-600 fill-current"/>
        <div className="h-px w-12 bg-slate-600"/>
    </div>
</footer>
                </div>
            </div>
        </div>
    );
};

export default TeaserLandingPage;

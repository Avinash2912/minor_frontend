"use client"; 
import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from '../AnimatedText/AnimatedText';

export default function HomepageInfo(): JSX.Element {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        const typewriterText = "Revolutionizing Disabled Verification";
        let ticker = setInterval(() => {
            tick(typewriterText);
        }, delta);

        return () => clearInterval(ticker);
    }, [text, isDeleting, loopNum, delta]);

    const tick = (toRotate: string) => {
        let i = loopNum % 1;
        let fullText = toRotate;
        let updatedText = isDeleting 
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(150); // Fixed slower speed for deletion
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(2000); // Pause before starting deletion
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100); // Speed for typing
        }
    };

    return (
        <div className="scroll-container w-full h-screen p-8 lg:p-16 bg-gray-800 text-white">
            <div className="text-center mb-12">
                <div className="text-3xl md:text-4xl  h-15 font-bold uppercase tracking-wider shadow-md text-[#509AB7] text-effect text-glow">
                    {text}
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wider mt-4 text-[#509ab7] text-effect">
                    with Blockchain 
                </h2>
                <p className="mt-4 text-md md:text-lg leading-relaxed opacity-80 text-[#AAD7DE] text-effect">
                    Ensuring Speedy and Accurate Data Verification.
                </p>
            </div>
            
            <section className="py-20 flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <AnimatedText 
                        text="Redefining Disabled Data Integrity"
                        className="text-lg md:text-3xl  leading-snug tracking-wide text-[#AAD7DE] text-effect text-glow pop-text"
                    />
                    <div className="mt-6 text-sm md:text-lg leading-relaxed">
                        <h1 className="font-black text-xl md:text-2xl leading-tight tracking-wide">
                            Our 
                            <span className="text-[#34C759]"> revolutionary </span>
                            <span className="text-[#34C759]"> blockchain-based </span>
                        </h1>
                        <h1 className="font-black text-xl md:text-2xl leading-tight tracking-wide">
                            Disable Data Verification<span className="text-[#34C759]"> system</span>
                        </h1>
                        <p className="opacity-70 text-l md:text-l mt-4 leading-relaxed text-white">
                            Redefines the way disabled data is served, guaranteeing integrity, transparency, and efficiency.
                        </p>
                    </div>
                </div>
                
                <div className="lg:w-2/5 flex justify-end h-[300px]">
                    <div className="relative overflow-hidden rounded-xl shadow-lg w-full h-full">
                        <img 
                            src="https://th.bing.com/th/id/R.0d2d4f452d1c91b35c78224d10dfca97?rik=9yeyBdgAes6HGw&riu=http%3a%2f%2fwww.scientificanimations.com%2fwp-content%2fuploads%2f2018%2f05%2fSAG_Blockchain-in-Healthcare_180519_01.jpg&ehk=zB70xf%2fI9nDFaPJzWhulPsAVZnMTt9IcekmcL15k2p0%3d&risl=&pid=ImgRaw&r=0" 
                            className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-105" 
                            alt="Data Security" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

"use client"; 
import { useEffect, useState } from 'react';

export default function HomepageInfo(): JSX.Element {
    const [text, setText] = useState("");

    useEffect(() => {
        const typewriterText ="Reevolutionizing Disabled Verification";
        let index = 0;

        const typeWriter = setInterval(() => {
            if (index < typewriterText.length-1) {
                setText((prevText) => prevText + typewriterText[index]);
                index++;
            } else {
                clearInterval(typeWriter);
            }
        }, 100);

        return () => clearInterval(typeWriter);
    }, []);

    return (
        <div className="scroll-container w-full h-screen p-8 lg:p-16 bg-gray-800 text-white">
            <div className="text-center mb-12">
                <div className="text-4xl md:text-5xl font-bold uppercase tracking-wider shadow-md text-[#509AB7]">
                    {text}
                </div>
                <h2 className="text-2xl md:text-4xl font-semibold uppercase tracking-wider mt-4 text-[#509ab7]">
                    with Blockchain 
                </h2>
                <p className="mt-4 text-md md:text-lg leading-relaxed opacity-80 text-[#AAD7DE]">
                    Ensuring Speedy and Accurate Data Verification.
                </p>
            </div>
            
            <section className="py-20 flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-3xl md:text-3xl font-bold leading-snug tracking-wide text-[#AAD7DE]">
                        Redefining Disabled Data Integrity
                    </h3>
                    <div className="mt-6 text-sm md:text-lg leading-relaxed">
                        <h1 className="font-black text-2xl md:text-4xl leading-tight tracking-wide">
                            Our 
                            <span className="text-[#34C759]"> revolutionary </span>
                            <span className="text-[#34C759]"> blockchain-based </span>
                        </h1>
                        <h1 className="font-black text-2xl md:text-4xl leading-tight tracking-wide">
                            Disable Data Verification<span className="text-[#34C759]"> system</span>
                        </h1>
                        <p className="opacity-70 text-xl md:text-l mt-4 leading-relaxed text-white">
                            Redefines the way disabled data is served, guaranteeing integrity, transparency, and efficiency.
                        </p>
                    </div>
                </div>
                
                <div className="lg:w-2/5 flex justify-center">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img 
                            src="https://th.bing.com/th/id/R.0d2d4f452d1c91b35c78224d10dfca97?rik=9yeyBdgAes6HGw&riu=http%3a%2f%2fwww.scientificanimations.com%2fwp-content%2fuploads%2f2018%2f05%2fSAG_Blockchain-in-Healthcare_180519_01.jpg&ehk=zB70xf%2fI9nDFaPJzWhulPsAVZnMTt9IcekmcL15k2p0%3d&risl=&pid=ImgRaw&r=0" 
                            className="w-full transition-transform duration-500 ease-in-out" 
                            alt="Data Security" 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}














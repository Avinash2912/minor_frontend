export default function HomepageInfo(): JSX.Element {
    return (
        <div className="w-full h-3/4 p-8 lg:p-16 bg-blue-600"> {/* Changed from bg-black to bg-green-200 */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase text-white">
                    <span className="gradient-text">Revolutionizing Disabled Verification</span>
                </h1>
                <h2 className="text-xl md:text-3xl font-semibold uppercase text-white mt-4">
                    <span className="gradient-text">with Blockchain </span>
                </h2>
                <p className="mt-4 text-md md:text-xl text-white">
                    Ensuring Speedy and Accurate Data Verification.
                </p>
            </div>
            
            <section className="py-20 flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-2xl md:text-4xl font-bold leading-snug text-white mt-2">
                        Redefining Disabled Data Integrity
                    </h3>
                    <div className="mt-6 text-sm md:text-lg text-white">
                        <h1 className='font-black text-2xl md:text-4xl leading-tight'>Our revolutionary <span className='accent-gradient background-clip-text'>blockchain-based </span></h1>
                        <h1 className='font-black text-2xl md:text-4xl leading-tight'>Disable Data Verification<span className='accent-gradient background-clip-text'> system</span></h1>
                        <p className='opacity-70 text-xs md:text-sm mt-2'>Redefines the way disable data is served, guarantees integrity, transparency, and efficiency in disable data verification.</p>
                    </div>
                </div>
                
                <div className="lg:w-2/5 flex flex-col gap-8">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src="https://th.bing.com/th/id/R.0d2d4f452d1c91b35c78224d10dfca97?rik=9yeyBdgAes6HGw&riu=http%3a%2f%2fwww.scientificanimations.com%2fwp-content%2fuploads%2f2018%2f05%2fSAG_Blockchain-in-Healthcare_180519_01.jpg&ehk=zB70xf%2fI9nDFaPJzWhulPsAVZnMTt9IcekmcL15k2p0%3d&risl=&pid=ImgRaw&r=0" 
                            className="w-full transform hover:scale-110 transition duration-500 ease-in-out" alt="Data Security" />
                    </div>
                </div>
            </section>
        </div>
    );
}

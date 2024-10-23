// export default function HomepageInfo(): JSX.Element {
//     return (
//         <div className="w-full p-8 lg:p-16">
//             <h1 className="text-4xl md:text-6xl font-bold uppercase">
//                 <span className="gradient-text">Revolutionizing Disable Verification</span>
//             </h1>
//             <h1 className="text-1xl md:text-7xl font-bold uppercase">
//                 <span className="gradient-text">with Blockchain</span>
//             </h1>
//             <p className="mt-4 text-md md:text-xl">
//                 Ensuring Speedy and Accurate Data Verification.
//             </p>
//             <section className='px-10 py-40 flex gap-8 justify-center'>
//                 <div className="sticky md:w-1/2 h-1/2 top-1/2">
//                     <h1 className='font-black text-3xl md:text-5xl leading-tight'>Our revolutionary <span className='accent-gradient background-clip-text'>blockchain-based </span></h1>
//                     <h1 className='font-black text-3xl md:text-5xl leading-tight'>Disable Data Verification<span className='accent-gradient background-clip-text'> system</span></h1>
//                     <p className='opacity-70 text-sm md:text-base mt-4'>redefines the way disable data is served, guarantees integrity, transparency, and efficiency in disable data verification.</p>
//                 </div>
//                 <div className='hidden md:flex flex-col w-1/2 gap-8 z-20'>
//                     <div className='overflow-hidden relative w-full h-96'>
//                         <img style={{transform:"translateY(calc(-30%"}} 
//                         src="https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-lg w-full' alt="" />
//                     </div>
//                     <div className='overflow-hidden relative w-full h-96'>
//                         <img style={{transform:"translateY(calc(-50%"}} 
//                         src="https://images.pexels.com/photos/6077189/pexels-photo-6077189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='rounded-lg w-full' alt="" />
//                     </div>
//                     <div className='overflow-hidden relative w-full h-96'>
//                         <img style={{transform:"translateY(calc(-55%"}} 
//                         src="https://images.pexels.com/photos/3659582/pexels-photo-3659582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='rounded-lg w-full' alt="" />
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }


export default function HomepageInfo(): JSX.Element {
    return (
        <div className="w-full p-8 lg:p-16 bg-black">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl font-extrabold uppercase text-white">
                    <span className="gradient-text">Revolutionizing Disabled Verification</span>
                </h1>
                <h2 className="text-2xl md:text-4xl font-semibold uppercase text-white mt-4">
                    <span className="gradient-text">with Blockchain </span>
                </h2>
                <p className="mt-6 text-lg md:text-2xl text-white">
                Ensuring Speedy and Accurate Data Verification.
                </p>
            </div>
            
            <section className="py-20 flex flex-col lg:flex-row gap-10 items-center">
                <div className="lg:w-1/2 text-center lg:text-left">
                    {/* <h2 className="text-3xl md:text-5xl font-bold leading-snug text-white">
                        Our <span className="accent-gradient">Blockchain-based</span> 
                        Verification System
                    </h2> */}
                    <h3 className="text-3xl md:text-5xl font-bold leading-snug text-white mt-2">
                        {/* Redefining Disabled Data Integrity */}
                    </h3>
                    <div className="mt-6 text-md md:text-xl text-white">
                        
                    <h1 className='font-black text-3xl md:text-5xl leading-tight'>Our revolutionary <span className='accent-gradient background-clip-text'>blockchain-based </span></h1>
                    <h1 className='font-black text-3xl md:text-5xl leading-tight'>Disable Data Verification<span className='accent-gradient background-clip-text'> system</span></h1>
                    <p className='opacity-70 text-sm md:text-base mt-4'>redefines the way disable data is served, guarantees integrity, transparency, and efficiency in disable data verification.</p>


                    </div>
                </div>
                
                <div className="lg:w-1/2 flex flex-col gap-8">
                    
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img src="https://th.bing.com/th/id/R.0d2d4f452d1c91b35c78224d10dfca97?rik=9yeyBdgAes6HGw&riu=http%3a%2f%2fwww.scientificanimations.com%2fwp-content%2fuploads%2f2018%2f05%2fSAG_Blockchain-in-Healthcare_180519_01.jpg&ehk=zB70xf%2fI9nDFaPJzWhulPsAVZnMTt9IcekmcL15k2p0%3d&risl=&pid=ImgRaw&r=0" 
                            className="transform hover:scale-110 transition duration-500 ease-in-out" alt="Data Security" />
                    </div>
                </div>
            </section>
        </div>
    );
}

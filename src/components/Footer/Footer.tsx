import Link from "next/link";
import Image from "next/image";

export default function Footer(): JSX.Element {
    const clickAnimation: string =
        "relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 md:mr-6";
    const paddingDuYaNhi = "w-full max-w-screen-xl mx-auto p-4 md:py-8";

    // return (
    //     <footer className="bg-black fixed bg-opacity-50 bottom-0 left-0 right-0 shadow-lg px-3 py-2">
    //         <div className="">
    //             <div className="sm:flex sm:items-center sm:justify-between">
    //                 <Link href="/" className="flex items-center mb-4 sm:mb-0">
    //                     <Image src="/images/logo.png" width={30} height={30} className="h-8 mr-3" alt="Logo" />
    //                     {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">DecentralisedJusticeHub</span> */}
    //                 </Link>
    // <ul className="flex flex-wrap items-center my-2 text-sm font-medium sm:mb-0">
    //     <li>
    //         <Link href="#" className={clickAnimation}>About</Link>
    //     </li>
    //     <li>
    //         <Link href="#" className={clickAnimation}>Privacy Policy</Link>
    //     </li>
    //     <li>
    //         <Link href="#" className={clickAnimation}>Licensing</Link>
    //     </li>
    //     <li>
    //         <Link href="#" className={clickAnimation}>Contact</Link>
    //     </li>
    // </ul>
    //             </div>
    //             <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    //             <span className="block text-sm text-gray-500 sm:text-center">© 2023 <Link href="/" className="hover:underline">DecentralisedJusticeHub</Link> Made With ❤️</span>
    //         </div>
    //     </footer>
    // )
    return (
        <footer className="w-full bottom-0 left-0 backdrop-blur-3xl">
            <div className="flex justify-between p-4">
                <Image
                    src="/images/logo.png"
                    width={30}
                    height={30}
                    className="h-8 mr-3"
                    alt="Logo"
                />
                <ul className="flex flex-wrap items-center text-sm font-medium">
                    <li>
                        <Link href="#" className={clickAnimation}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={clickAnimation}>
                            Privacy Policy
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={clickAnimation}>
                            Licensing
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className={clickAnimation}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <hr className="border-white dark:border-white" />
            <span className="block text-sm sm:text-center p-4">
                © 2023{" "}
                <Link href="/" className="hover:underline">
                    BlockChain for Medical Disability
                </Link>{" "}
                Made With ❤️
            </span>
        </footer>
    );
}

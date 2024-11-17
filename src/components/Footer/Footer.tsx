import Link from "next/link";
import Image from "next/image";

export default function Footer(): JSX.Element {
    const clickAnimation: string =
        "relative w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#00b894] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 md:mr-6";
    
    return (
        <footer className="w-full bottom-0 left-0 backdrop-blur-2xl bg-[#4A7B86] text-white h-1/6">
            <div className="flex justify-between p-4 ">
                <Image
                    src="/images/logo.png"
                    width={30}
                    height={30}
                    className="h-8 mr-3"
                    alt="Logo"
                />
                <ul className="flex flex-wrap items-center text-sm font-medium ">
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
                © 2024{" "}
                <Link href="/" className="hover:underline">
                    BlockChain for Medical Disability
                </Link>{" "}
                Made With ❤️
            </span>
        </footer>
    );
}


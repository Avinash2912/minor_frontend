"use client";
import Link from "next/link";
import Image from "next/image";
import { connectWallet } from "../../api";

export default function Header(props: any): JSX.Element {
  const clickAnimation: string =
    "relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300";

    return (
        <header className="bg-black bg-opacity-50 backdrop-blur-13 shadow-lg -webkit-backdrop-filter backdrop-filter rounded-10 relative px-6 py-5">
            <nav className="flex justify-between">
                <Link
                    href="/"
                    className="w-[130px] md:w-[200px] flex items-center"
                >
                    <Image
                        src="/images/logo.png"
                        width={30}
                        height={40}
                        className="mr-5"
                        alt="LOGO"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">
                        DisabilityVerification
                    </span>
                </Link>
                {props.isMain && (
                    <div className="flex items-center gap-4">
                        <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
                            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                                <li className={clickAnimation}>
                                    <Link href="https://ethereum.org/en/learn/">Learn</Link>
                                </li>
                                <li className={clickAnimation}>
                                    <Link href="https://ethereum.org/en/community/">Community</Link>
                                </li>
                                <li className={clickAnimation}>
                                    <Link href="https://ethereum.org/en/">Network</Link>
                                </li>
                            </ul>
                        </div>
                        <Link href="/create-evidence">
                            <button className="button">CREATE </button>
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}



import Link from "next/link";

export default function Card({
    title,
    text,
    button,
    navigateTo,
    img,
}: {
    title: string;
    text: string;
    button: string;
    navigateTo: string;
    img:string;
}): JSX.Element {
    return (
        <div className="w-80 h-[30rem] bg-[#AAD7DE] rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            <img
                src={img}
                alt="Card Image"
                className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="flex-grow">
                    <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-800 text-center">
                        {title}
                    </h5>
                    <p className="mb-4 font-medium text-gray-700 text-center">
                        {text}
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href={navigateTo}
                        className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-teal-500 border border-teal-500 hover:bg-teal-600 transition duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:outline-none focus:ring-teal-300"
                    >
                        {button}
                        <svg
                            className="w-4 h-4 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}






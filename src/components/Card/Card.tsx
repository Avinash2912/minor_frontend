import Link from "next/link";

export default function Card({
    title,
    text,
    button,
    navigateTo,
}: CardInfo): JSX.Element {
    return (
        <div className="max-w-sm p-6 bg-white rounded-lg bg-opacity-40 shadow-lg backdrop-blur-13 rounded-10 border border-opacity-18">
            <div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-90">
                    {title}
                </h5>
            </div>
            <p className="mb-3 font-normal text-white">
                {text}
            </p>
            <Link
                href={navigateTo}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                {button}
                <svg
                    className="w-3.5 h-3.5 ml-2"
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
    );
}

// @ts-nocheck
interface SearchResultProps {
	result: SearchResultItem[] | null;
	hasSearched: boolean;
	isLoading: boolean;
}

function renderValue(value) {
	if (Array.isArray(value)) {
		return (
			<ul>
				{value.map((item, index) => (
					<li key={index}>
						{typeof item === "object" ? renderValue(item) : item}
					</li>
				))}
			</ul>
		);
	} else if (typeof value === "object") {
		return (
			<ul>
				{Object.entries(value).map(([key, val], index) => (
					<li key={index}>
						<strong>{key}:</strong>{" "}
						{typeof val === "object" ? renderValue(val) : val}
					</li>
				))}
			</ul>
		);
	} else {
		return value;
	}
}

const SearchResult: React.FC<SearchResultProps> = ({
	result,
	hasSearched,
	isLoading,
}) => {
	// const ipfsImageUrl = localStorage.getItem("ipfsImage");

	// return (
	// <div className="w-full max-w-5xl mx-auto py-4">
	//     {hasSearched && (
	//         <div className="text-center mx-auto bg-white bg-opacity-75 p-4 rounded-lg shadow-lg max-w-4xl">
	//             {isLoading ? (
	//                 <p className="text-gray-800">Loading...</p>
	//             ) : result && result.length > 0 ? (
	//                 <ul className="list-disc list-inside">
	//                     {Object.keys(result).slice(result.length).map((key, index) => (
	//                         <li
	//                             key={index}
	//                             className="bg-gray-100 rounded p-2 mb-2 text-gray-800"
	//                         >
	//                             <strong>{key}:</strong> {result[key]}
	//                         </li>
	//                     ))}
	//                 </ul>
	//             ) : (
	//                 <p className="text-gray-500 italic">
	//                     No results found.
	//                 </p>
	//             )}
	//         </div>
	//     )}
	// </div>
	return (
		<div className="w-full max-w-3xl mx-auto py-4">
			{hasSearched && (
				<div className="text-center mx-auto bg-white bg-opacity-75 p-4 rounded-lg shadow-lg max-w-4xl">
					{isLoading ? (
						<p className="text-gray-800">Loading...</p>
					) : result ? (
						<>
							<div>
								{Object.entries(result).map(
									([key, value], index) =>
										value !== null &&
										value !== "" && key != "deviceStatus" && (
											<div className="flex flex-col items-start">
												<span
													key={index}
													className="p-2 mb-2 text-gray-800"
												>
													<strong className="text-primary">
														{key}:
													</strong>{` ${value}`}
													</span>
											</div>
										)
								)}
								</div>
							<img
								src="/images/bkc.png"
								alt=""
								width={1000}
								height={500}
								className="mx-auto mt-10"
							/>
						</>
					) : (
						<p className="text-gray-500 italic">
							No results found.
						</p>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchResult;

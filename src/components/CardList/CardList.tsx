import Card from "../Card";

const cardsData: CardInfo[] = [
    {
        title: "Get Data",
        text: "Unlock Data Fast! Securely access authenticated data stored on the blockchain. Swift, secure, and tamper-proof.",
        button: "Explore",
        navigateTo: "/get-data",
    },
    {
        title: "Create Data",
        text: "Upload yourself! Upload and safeguard data with blockchain technology. Streamlined, secure, and transparent submission process.",
        button: "Get Started",
        navigateTo: "/create-data",
    },
    {
        title: "Transfer Data",
        text: "Pass the Baton! Effortlessly transfer disability data with smart contracts. Transparent, traceable, and secure chain of custody.",
        button: "Transfer Now",
        navigateTo: "/",
    },
];

export default function CardList(): JSX.Element {
    return (
        <div className="flex items-center justify-center gap-5 my-10">
            {cardsData.map((card: CardInfo, index: number) => {
                return (
                    <Card
                        key={index}
                        title={card.title}
                        text={card.text}
                        button={card.button}
                        navigateTo={card.navigateTo}
                    />
                );
            })}
        </div>
    );
};

import CardList from "../CardList";
import HomepageInfo from "../HomepageInfo";

export default function Main(): JSX.Element {
    return (
        <main className="p-4">
           <HomepageInfo />
           <CardList />
        </main>
    );
}

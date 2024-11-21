import CardList from "../CardList";
import HomepageInfo from "../HomepageInfo";

export default function Main(): JSX.Element {
    return (
        <main className="p-8 space-y-12">
           <HomepageInfo />
           <CardList />
        </main>
    );
}
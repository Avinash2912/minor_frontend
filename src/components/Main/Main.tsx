import CardList from "../CardList";
import HomepageInfo from "../HomepageInfo";
import LampDemo from "../lamp-demo";
import CardSpotlightDemo from "../card-spotlight-demo";

export default function Main(): JSX.Element {
  return (
    <main className="p-8">
      <HomepageInfo/>

      <LampDemo />

      <CardSpotlightDemo />
    </main>
  );
}

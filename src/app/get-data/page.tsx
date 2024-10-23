import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function GetEvidence(): JSX.Element {
    return (
        <>
            <Header isMain={false} />
            <SearchBar />
            <Footer />
        </>
    );
}

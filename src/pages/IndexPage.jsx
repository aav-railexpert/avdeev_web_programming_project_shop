import './IndexPage.css';
import Header from '../components/Header';
import Breadcrumbs from "../components/Breadcrumbs";
import Intro from "../components/Intro";
import Catalog from "../components/Catalog";
import Footer from "../components/Footer";

function IndexPage() {
    return (
        <>
            <Header />
            <main>
                <Breadcrumbs />
                <Intro />
                <Catalog />
            </main>
            <Footer />
        </>
    );
}

export default IndexPage;

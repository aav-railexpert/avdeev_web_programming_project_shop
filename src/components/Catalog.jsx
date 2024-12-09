import './Catalog.css';
import CatalogItemsSlider from "./CatalogItemsSlider";

const Catalog = () => {
    return (
        <div className="catalog">
            <div className="container">
                <h2 className="catalog-title">
                    новинки
                </h2>
                <CatalogItemsSlider/>
                <h2 className="catalog-title">
                    категория 1
                </h2>
                <CatalogItemsSlider/>
                <h2 className="catalog-title">
                    категория 2
                </h2>
                <CatalogItemsSlider/>
            </div>
        </div>
    )
}

export default Catalog;
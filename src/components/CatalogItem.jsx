import './CatalogItem.css';

const CatalogItem = () => {
    return (
        <a href="" className="catalog-item">
            <img src="/assets/img/item-img-example.png" alt=""/>
            <div className="catalog-item__info">
                <span>пиджак оверсайз</span>
                <span>6000 ₽</span>
            </div>
            <button className="common-button catalog-item__add-to-cart-button">
                добавить в корзину
            </button>
        </a>
    )
}

export default CatalogItem;
import './ProductPage.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

function ProductPage() {
    return (
        <>
            <Header />
            <main>
                <Breadcrumbs />
                <div className="container">
                    <div className="product">
                        <img src="/assets/img/product-img-example.png" alt="" className="product__first-img"/>
                        <div className="product-info">
                            <div className="product-info__header">
                                <div className="product-info__header-title">
                                    джинсовая куртка-худи
                                </div>
                                <div className="product-info__header-price">
                                    19000 ₽
                                </div>
                            </div>
                            <div className="beige">
                                черный / красный
                            </div>
                            <div className="product-info__separator"></div>
                            <div className="beige">
                                размер
                            </div>
                            <div className="product-info__sizes">
                                <button className="product-info__size active">
                                    M
                                </button>
                                <button className="product-info__size">
                                    L
                                </button>
                            </div>
                            <div className="product-info__description">
                                быть уникальным и носить уникальное — это не особенность, а выбор, основанный на
                                собственном
                                вкусе без оглядки на общественное мнение. выбор не бояться необычного и смело пробовать
                                сочетания, до этого кажущимися противоречивыми. как и наша апсайкл-джинсовка,
                                превратившаяся
                                в квинтэссенцию невозможностей и раздвинувшая границы обыденного. мягкость нашего худи
                                переплелась с невесомой джинсовой грубостью, захватила половину куртки, оставила свой
                                яркий
                                след на рукаве и теперь собирается стать новым statement твоего гардероба.
                            </div>
                            <div className="product-info__separator"></div>
                            <div className="beige">материал</div>
                            <div>100% хлопок</div>
                            <div className="product-info__separator"></div>
                            <div className="product-info__other-buttons">
                                <a href="">наличие в магазинах</a>
                                <a href="">детали</a>
                                <a href="">доставка и возврат</a>
                                <a href="">помощь</a>
                            </div>
                            <button className="common-button product-info__add-to-cart-button">
                                добавить в корзину
                            </button>
                        </div>
                        <img src="/assets/img/product-img-example.png" alt="" className="product__other-img"/>
                        <img src="/assets/img/product-img-example.png" alt="" className="product__other-img"/>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default ProductPage;

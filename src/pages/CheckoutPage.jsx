import './CheckoutPage.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";

function CheckoutPage() {
    return (
        <>
            <Header />
            <main>
                <Breadcrumbs />
                <div className="container checkout">
                    <div className="checkout-product">
                        <img src="/assets/img/item-img-example.png" alt="" className="checkout-product__img"/>
                        <div className="checkout-product-info">
                            <div className="checkout-product-info__row checkout-product-info__heading">
                                <div className="checkout-product-info__name">
                                    название товара
                                </div>
                                <button className="checkout-product-info__delete">
                                    УДАЛИТЬ
                                </button>
                            </div>
                            <div className="checkout-product-info__row">
                                <div>
                                    <span className="beige">цвет:</span> черный
                                </div>
                                <div>
                                    6000 ₽
                                </div>
                            </div>
                            <div className="checkout-product-info__row">
                                <div>
                                    <span className="beige">размер:</span> 40
                                </div>
                                <div>
                                    <span className="beige">количество:</span> 1
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="checkout-price bold">общая сумма заказа: 6000 ₽</div>
                    <div className="checkout-form__heading bold">
                        данные о покупателе:
                    </div>
                    <form action="" className="checkout-form beige">
                        <input type="email" name="email" required placeholder="email" className="checkout-form__input"/>
                        <input type="text" name="name" required placeholder="имя" className="checkout-form__input"/>
                        <input type="tel" name="phone" required placeholder="телефон" className="checkout-form__input"/>
                        <input type="text" name="address" required placeholder="адрес доставки" className="checkout-form__input"/>
                        <button type="submit" className="checkout-form__submit-btn common-button">оформить заказ</button>
                    </form>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default CheckoutPage;

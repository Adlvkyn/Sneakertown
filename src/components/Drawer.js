function Drawer({onClose, items = []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина <img onClick={onClose} className="remove" width={40} height={40} src="/img/delete.svg" alt="Delete" /></h2>
                <div className="cartItems">
                    {items.map((obj) => (
                        <div className="cartItem">
                            <img className="cartSneaker" width={70} height={70} src={obj.image} alt="Sneakers" />
                            <div>
                                <p>{obj.name}</p>
                                <b>{obj.price} тенге</b>
                            </div>
                            <div className="delete">
                                <img className="remove" width={32} height={32} src="/img/delete.svg" alt="Delete" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="payment">
                    <ul>
                        <li>
                            <div>
                                <p>Сумма заказа:</p>
                                <b>39800 тенге</b>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Доставка:</p>
                                <b>1500 тенге</b>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p>Итого:</p>
                                <b>41300 тенге</b>
                            </div>
                        </li>
                    </ul>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;
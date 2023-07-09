import React, { useState, useEffect } from 'react';
import ShopItem from '../shopItem/ShopItem';

function CartPanel(props) {

    const [cart, setcart] = useState([]);
    const [date, setdate] = useState(new Date().toISOString().split("T")[0]);

    useEffect(() => {
        setcart(JSON.parse(localStorage.getItem('cart')));
        if (localStorage.getItem("cart") === null) {
            setcart([]);
        }

    }, [])


    const deleteFromCart = (id) => {
        let cart_ = cart.filter(i => i.id != id);
        setcart(cart_);
    }

    const OrderSend = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart.map(item => item.id))
        };
        fetch('http://localhost:8080/api/orders/buy?userId=' + localStorage.getItem("id") + "&date=" + date, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Zamówienie zostało złożone. Oczekuj na dostawę!");
                setcart([]);
                localStorage.setItem("cart", JSON.stringify([]))
            });
    }

    const updateDate = (e) => {
        setdate(e.target.value);
    }

    return (
        <>
            <div className="shop-wrapper">
                {cart.length == 0 ? "" : 
                    <div>
                        <button className="send-order" onClick={() => OrderSend()} >Prześlij zamówienie</button>
                        <p className="date-o">
                            <label htmlFor="date">Podaj datę dostarczenia produktów</label>
                            <input value={date} onChange={e => updateDate(e)} type="date" min={new Date().toISOString().split("T")[0]} name="date" id="date"/>
                        </p>
                    </div>}
                {cart.length == 0 ? <div className="empty">Brak produktów w koszyku</div> : cart.map(i => {
                    return <ShopItem
                        key={i.id}
                        id={i.id}
                        name={i.name}
                        price={i.price}
                        link={i.image}
                        cart={true}
                        deleteFromCart={deleteFromCart}
                    />
                })}
            </div>
        </>
    );
}

export default CartPanel;
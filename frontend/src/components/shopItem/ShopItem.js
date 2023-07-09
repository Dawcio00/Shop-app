import React, { useState, useEffect } from 'react';

function ShopItem({ id, name, price, link, cart = false, deleteFromCart }) {
    const [hide, sethide] = useState(false)
    const [privilage, setprivilage] = useState("user")
    let id_ = id;

    useEffect(() => {
        setprivilage(localStorage.getItem("privilage"));
    }, [])

    const deleteshopi = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch('http://localhost:8080/api/shopItems/item/' + id_, requestOptions)
            .then(data => {
                console.log(data);
                if (data.status == 200) {
                    alert("Usunięto produkt")
                    sethide(true)
                }
            })
    }

    const addToCart = () => {
        if (localStorage.getItem("cart") === null) {
            localStorage.setItem("cart", JSON.stringify([]));
            alert("Wystąpił błąd podczas dodawania, spróbuj ponownie!");
        } else {
            let cart = JSON.parse(localStorage.getItem("cart"));
            cart.push({
                id,
                name,
                price,
                image: link
            })
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Dodano produkt do koszyka!");
        }

    }
    return (
        <div className={hide == true ? "shopi hide" : "shopi"}>
            <h3 className="title">Nazwa produktu: {name}</h3>
            <div className="content">Cena: {price} zł</div>
            <div className="content"><img src={link} alt={name} /></div>
            {
                privilage === "admin" ?
                    <div className="shopi-panel">
                        <span onClick={() => deleteshopi()} className="delete"> <img src="delete.png" alt="delete" /> </span>
                    </div> :
                    <div>
                        {cart === false ?
                            <button onClick={() => addToCart()} className="add-to-cart-btn">Dodaj do koszyka</button>
                            : <button onClick={() => deleteFromCart(id)} className="add-to-cart-btn">Usuń z koszyka</button>
                        }
                        <div style={{ clear: "both" }}></div>
                    </div>
            }
        </div>
    );
}

export default ShopItem;
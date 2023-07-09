import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShopItem from '../shopItem/ShopItem';

function UserPanel(props) {

    const [shopItems, setShopItems] = useState([]);
    const [privilage, setprivilage] = useState("user");

    useEffect(() => {
        const GetList = () => {
            setprivilage(localStorage.getItem("privilage"));

            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };

            fetch('http://localhost:8080/api/shopItems/items', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setShopItems(data);
                });
        }

        GetList();

    }, [])


    return (
        <div className="shop-wrapper">
            <Link to="/cart"><button className="add-shopii-btn"><img src="cart4.svg" alt="Koszyk" /></button></Link>
            {shopItems.length == 0 ? <div className="empty">Brak produktów spożywczych w sklepie</div> : shopItems.map(i => {
                return <ShopItem
                    key={i.id}
                    id={i.id}
                    name={i.name}
                    price={i.price}
                    link={i.image}
                />
            })}
        </div>
    );
}

export default UserPanel;
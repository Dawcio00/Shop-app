import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShopItem from '../shopItem/ShopItem';

function AdminPanel(props) {

    const [shopItems, setShopItems] = useState([]);
    const [orders, setorders] = useState([]);
    const [privilage, setprivilage] = useState("user");
    const navigate = useNavigate();

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
                    console.log(data)
                    setShopItems(data);
                });
        }

        const GetUsersOrders = () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:8080/api/orders', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setorders(data);
                    console.log(data)
                });
        }

        GetList();
        GetUsersOrders();

    }, [])


    return (
        <>{
            privilage == "admin" ? <>
                <div className="shop-wrapper user-wrapper buyer">
                    <h3>Lista zamówień</h3>
                    {
                        orders.map(order => (
                            <div className="buyer-o">
                                <h4>Imię kupującego: {order.user.name}</h4>
                                <h5>Termin dostarczenia produktów: {order.date}</h5>
                                {order.items.map(item => (
                                    <div className="item-o">
                                        <span><b>Nazwa produktu:</b> {item.name}</span>
                                        <span><b>Cena produktu:</b>  {item.price} zł</span>
                                        <span><img src={item.image} alt={item.name} /> </span>
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </> : ""
        }

            <div className="shop-wrapper">
                <Link to="/addShopItem"><button className="add-shopi-2-btn">Dodaj produkt do sklepu</button></Link>
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
        </>
    );
}

export default AdminPanel;
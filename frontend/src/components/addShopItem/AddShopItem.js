import React from 'react';
import { useNavigate } from "react-router-dom";

function AddShopItem(props) {
    const navigate = useNavigate();

    const AddShopItem_ = (e) => {
        e.preventDefault();
        console.log('id', parseInt(localStorage.getItem('id')))
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name: e.target.name.value, 
                    price: e.target.price.value,
                    image: e.target.image.value
                })
        };
            fetch('http://localhost:8080/api/shopItems/item', requestOptions)
                .then(response => response.json())
                .then(data => {console.log(data)
                    alert('Dodano produkt!')
                    navigate('/');
                });
    };

    return (
        <div className="add-panel-wrapper">
            <div className="container">
                <div className="add-panel">
                    <h4>Dodaj produkt spożywczy</h4>
                    <form onSubmit={(e) => AddShopItem_(e)}>
                        <div className="title-wrapp">
                            <label htmlFor="name">Nazwa produktu:</label>
                            <input type="text" name="name" id="name"/>
                        </div>
                        <div className="title-wrapp">
                            <label htmlFor="price">Cena produktu:</label>
                            <input type="number" name="price" id="price"/>
                        </div>
                        <div className="title-wrapp">
                            <label htmlFor="image">Link do zdjęcia:</label>
                            <input type="text" name="image" id="image"/>
                        </div>
                        <input type="submit" value="Dodaj"/>
                        <div className="clear"></div>
                    </form>
                    <div className="info">
                        <div className="clear"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddShopItem;
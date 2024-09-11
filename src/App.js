import React, { useState, useEffect } from 'react';
import './App.css'; // Import your custom CSS file

function ItemList() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1 className="title">Items List</h1>
            <ul className="item-list">
                {items.map(item => (
                    <li key={item.id} className="item">
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
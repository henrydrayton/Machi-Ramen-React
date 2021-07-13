import React, {useState, useEffect} from 'react';

function Menu() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

// input rails api here
    const fetchItems = async () => {
        const data = await fetch(
            'https://fortnite-api.theapinetwork.com/prod09/upcoming/get'
        );

        const items = await data.json();        
        console.log(items.items);
        setItems(items.items);
    };

    return (
        <div>
            {items.map(item => (
                <h1 key={item.itemid}>{item.name}</h1>
            ))}
            <h1>Menu</h1>
        </div>
    );
}

export default Menu;

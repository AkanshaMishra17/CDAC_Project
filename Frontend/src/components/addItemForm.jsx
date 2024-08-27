import React, { useState } from 'react';

function AddItemForm() {
    const [item, setItem] = useState({
        itemName: '',
        itemDesc: '',
        price: '',
        itemImagePath: '',
        categoryId: '',
    });

    const handleChange = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/items/add?categoryId=${item.categoryId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                itemName: item.itemName,
                itemDesc: item.itemDesc,
                price: item.price,
                itemImagePath: item.itemImagePath,
            }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="itemName"
                value={item.itemName}
                onChange={handleChange}
                placeholder="Item Name"
            />
            <input
                name="itemDesc"
                value={item.itemDesc}
                onChange={handleChange}
                placeholder="Description"
            />
            <input
                name="price"
                value={item.price}
                onChange={handleChange}
                placeholder="Price"
                type="number"
            />
            <input
                name="itemImagePath"
                value={item.itemImagePath}
                onChange={handleChange}
                placeholder="Image Path"
            />
            <input
                name="categoryId"
                value={item.categoryId}
                onChange={handleChange}
                placeholder="Category ID"
            />
            <button type="submit">Add Item</button>
        </form>
    );
}

export default AddItemForm;

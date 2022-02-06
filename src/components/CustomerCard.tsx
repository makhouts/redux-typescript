import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
    id: string,
    name: string,
    food: string[]
}

export const CustomerCard = ({ id, name, food }: CustomerCardType) => {
    const [customerFoodInput, setCustomerFoodInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container"></div>
        <input
          value={customerFoodInput}
          onChange={(e) => setCustomerFoodInput(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            if (!customerFoodInput) return;
            dispatch(addFoodToCustomer({ id, food: customerFoodInput }));
            setCustomerFoodInput("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
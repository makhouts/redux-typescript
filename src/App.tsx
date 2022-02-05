import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import { ReservationCard } from "./components/ReservationCard";
import { addReservation } from "./features/reservationSlice";

function App() {

  const [reservationInput, setReservationInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value);
  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if(!reservationInput) return;
     dispatch(addReservation(reservationInput));
     setReservationInput('');
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name) => {
                return <ReservationCard name={name} />;
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationInput}
              onChange={(e) => setReservationInput(e.target.value)}
            />
            <button onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
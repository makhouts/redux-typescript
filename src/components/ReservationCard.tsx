import React from 'react';
import { removeReservation } from '../features/reservationSlice';
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';


interface ReservationCardTypes {
  name: string
  index: number
}

export const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(removeReservation(name));
        dispatch(addCustomer({id: index.toString(), name: name, food: [] }))
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

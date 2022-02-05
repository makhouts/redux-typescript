import React from 'react';
import { removeReservation } from '../features/reservationSlice';
import { useDispatch } from 'react-redux';


interface ReservationCardTypes {
  name: string
}

export const ReservationCard = ({ name }: ReservationCardTypes) => {
  const dispatch = useDispatch();

  return <div onClick={() => dispatch(removeReservation(name))} className="reservation-card-container">{name}</div>;
};

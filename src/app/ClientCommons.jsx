'use client';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAllTours} from '@/redux/slices/tours';

const ClientCommons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTours = async () => await dispatch(fetchAllTours());
    fetchTours();
  }, []);
  return <></>;
};

export default ClientCommons;

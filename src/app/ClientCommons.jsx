'use client';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchAllTours} from '@/redux/slices/tours';
import {fetchAllDestinations} from '@/redux/slices/destinations';

const ClientCommons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchTours = async () => await dispatch(fetchAllTours());
    const fetchDestinations = async () =>
      await dispatch(fetchAllDestinations());
    fetchTours();
    fetchDestinations();
  }, []);
  return <></>;
};

export default ClientCommons;

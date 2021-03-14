import React, { useContext } from 'react';
import context from '../context/context';
import Header from '../components/Header';
import Cards from '../components/Cards';
import useFetch from '../effects/useFetch';
import useFetchOnUpdate from '../effects/useFetchOnUpdate';

export default function Home() {
  const {
    inputSelected,
    setData,
    setIsFetching,
    isFetching,
  } = useContext(context);
  // componentDidMount
  useFetch(setData, inputSelected, setIsFetching);
  useFetchOnUpdate(setData, inputSelected, setIsFetching);
  return (
    <>
      <Header />
      {isFetching ? <div>Loading...</div> : <Cards />}
    </>
  );
}

import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div className='my-container '>
    </div>
  );
};

export default Home;
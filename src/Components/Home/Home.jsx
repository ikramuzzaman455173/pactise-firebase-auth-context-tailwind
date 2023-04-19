import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Home = () => {
  const {user}=useContext(AuthContext)
  return (
    <div>
      <div className='text-center font-bold text-blue-400 text-4xl mt-5'>This Is Our Home Components User: <span className='text-red-400'>{user&&user}</span> 😃</div>

    </div>
  );
};

export default Home;
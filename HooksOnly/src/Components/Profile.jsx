import React, { useContext } from 'react';
import { AppContext } from '../UseContext/AppContext';

const Profile = () => {
  const { phone, name} = useContext(AppContext);

  return (
    <div>
      <h2>Profile</h2>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3> 
    </div>
  );
};

export default Profile;

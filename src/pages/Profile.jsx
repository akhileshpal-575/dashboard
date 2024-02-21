import React, { useState } from 'react';
import LOGO  from "../assets/images/LOGO.png"

const Profile = () => {
  const [image, setImage] = useState('profile-image.jpg');
  const [name, setName] = useState('user name');
  const [email, setEmail] = useState('user@example.com');
  const [bio, setBio] = useState('add your Bio');
  const [dob, setDob] = useState('DOB :- Jan-31-1990');
  const [city, setCity] = useState('City :- Jamshedpur');
  const [mbNum, setMbNum] = useState('Mobile :- 9039873495');

  const [editMode, setEditMode] = useState(false);

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const saveChanges = () => {
    // Save changes to the database or perform any necessary actions
    setEditMode(false);
  };

  return (
    <div className='h-full font-sans'>
     <h1 className='text-2xl ml-7 text-gray-900 font-bold'>My Profile</h1>
      <div className='flex justify-evenly h-20 ml-8 mr-8 mb-6 mt-2 bg-blue-950 text-gray-600 font-bold items-center'>
        <img src={LOGO} className ="w-20 h-5 mt-1 bg-white " alt="Profile" />
        <h2>{name}</h2>
        <p>{email}</p>
        {editMode ? (
          <>
            <input type="text" value={name}  onChange={(e) => setName(e.target.value)} className='text-gray-700'/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='text-gray-700'/>
          </>
        ) : null}
        <button onClick={handleEdit} className='border p-1 rounded-md text-sm text-white'>{editMode ? 'Cancel' : 'Edit Profile'}</button>
        {editMode ? <button onClick={saveChanges} className='border p-1 rounded-md text-sm text-white'>Save</button> : null}
      </div>
      <div className='flex flex-col justify-evenly h-1/5 ml-8 mr-8 mb-6 mt-6 bg-blue-950 text-white font-bold'>
        <h2 className='text-2xl ml-6 mt-2'>About Me</h2>
        {editMode ? <textarea value={bio} onChange={(e) => setBio(e.target.value)} className='p-2 m-4 text-gray-600' /> : <p className='ml-6 text-gray-700'>{bio}</p>}
      </div>
      <div className='flex flex-col justify-evenly h-1/2 ml-8 mr-8 mb-6 mt-6 p-6 bg-blue-950 text-gray-600 font-bold'>
        <h3 className='text-2xl text-white'>Personal Details</h3>
        <p>{dob}</p>
        <p>{city}</p>
        <p>{mbNum}</p>
        {editMode ? (
          <>
            <input className='text-gray-700 p-2 m-1' type="text" value={dob}  onChange={(e) => setDob(e.target.value)} />
            <input className='text-gray-700 p-2 m-1' type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <input className='text-gray-700 p-2 m-1' type="text" value={mbNum} onChange={(e) => setMbNum(e.target.value)} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Profile;

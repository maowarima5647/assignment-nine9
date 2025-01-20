import React, { useContext } from 'react';
import { Authcontext } from './Authprovider';

const Profile = () => {
  const { user } = useContext(Authcontext);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Cover Section */}
      <div
        className="hero h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://via.placeholder.com/1920x600?text=Welcome+to+Your+Profile')`,
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">
            Welcome, {user?.displayName || "User"}!
          </h1>
          <p className="mt-4 text-lg">Glad to have you here.</p>
        </div>
      </div>

      {/* User Info Card */}
      <div className="flex justify-center mt-10">
        <div className="card w-96 bg-white shadow-xl p-6 rounded-lg">
          <div className="flex flex-col items-center">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Profile"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <h2 className="mt-4 text-2xl font-bold">
              {user?.displayName || "User Name"}
            </h2>
            <p className="mt-2 text-gray-500">{user?.email || "Email not available"}</p>
          </div>
        </div>
      </div>

      {/* Update Features Section */}
      <div className="mt-12 flex justify-center">
        <div className="w-10/12 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center">Update Features</h2>
          <p className="text-gray-600 mt-4 text-center">
            This section will allow users to update their profile information, including their name, email, and profile picture. Stay tuned for the implementation of these features as part of the challenge.
          </p>
          <div className="flex justify-center mt-6">
            <button className="btn btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

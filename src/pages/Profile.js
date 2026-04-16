import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/users/profile`, {
      headers: { Authorization: token },
    });
    setUser(res.data);
  };

  const handleUpdate = async () => {
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/users/profile`,
      user,
      {
        headers: { Authorization: token },
      }
    );
    alert("Profile Updated");
  };

  return (
    <div>
      <h2>My Profile</h2>

      <input
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="Name"
      />

      <input value={user.email} disabled />

      <input
        value={user.phone}
        onChange={(e) => setUser({ ...user, phone: e.target.value })}
        placeholder="Phone"
      />

      <input
        value={user.address}
        onChange={(e) => setUser({ ...user, address: e.target.value })}
        placeholder="Address"
      />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Profile;
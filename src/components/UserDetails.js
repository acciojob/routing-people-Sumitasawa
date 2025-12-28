import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <div>
    <h1>User Deatils</h1>
    </div>
    <div>

      <p><b>Name:</b>{user.name}</p>
      <p><b>Username:</b>{user.username}</p>
      <p><b>Email:</b>{user.email}</p>
      <p><b>Phone:</b>{user.phone}</p>
      <p><b>Website:</b>s{user.website}</p>
    </div>
    </div>
  );
}

export default UserDetails;



import React, { useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/");

      const data = await response.json();

      setUser(data.results[0]);
    };

    fetchUser();
  }, []);

  const nextUser = () => {
    return window.location.reload();
  };

  console.log(user);

  return (
    <div>

        
      {user && (
        <>
          <h2>
            {user.name.title} {user.name.first} {user.name.last}
          </h2>

          <h2>Age: {user.dob.age}</h2>

          <h2>Gender: {user.gender}</h2>

          <img src={user.picture.large} alt={user.name.first} />
        </>
      )}

      <br />

      <button onClick={() => nextUser()}>Next User</button>
    </div>
  );
};

export default User;
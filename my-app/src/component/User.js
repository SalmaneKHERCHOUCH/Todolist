import React, {useState } from "react";

function User() {
    const [user, setUser] = useState({});

    const fetchUser = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUser(data);
    //console.log("On visualise les données de l'utilisateur github", user);
    }
    fetchUser('SalmaneKHERCHOUCH')

    return <div><h1>{user.login}</h1></div>
}

export default User;
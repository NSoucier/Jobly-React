import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import JoblyApi from "./api";

function Profile({ user, getUser }) {
    const navigate = useNavigate();

    useEffect(function showProfile() {
        if (!user) {
            navigate("/login");
        }
        
        async function getProfile() {
            let userInfo = await getUser(user);
            console.log('user info', userInfo);
        }



    }, []);

    return (
        <p>Edit your Profile.</p>
    )
};

export default Profile;
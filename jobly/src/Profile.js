import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Input, Label, FormGroup, Form } from "reactstrap";

function Profile({ user, getUser, updateUser }) {
    const navigate = useNavigate();
    const [ profile, setProfile ] = useState(null);

    useEffect(function showProfile() {
        if (!user) {
            navigate("/login");
        }
        
        async function getProfile() {
            let userInfo = await getUser(user);
            setProfile(userInfo);
        }

        getProfile();
    }, []);

    function handleChange(evt) {
        evt.preventDefault();
        const { name, value } = evt.target;
        setProfile(data => ({
            ...data,
            [name]: value
        }));
    }
    
    async function handleClick(evt) {
        evt.preventDefault();
        let data = {firstName: profile.firstName, lastName: profile.lastName, email: profile.email};
        await updateUser(profile.username, data);
        navigate('/')
    }

    return (
        <>
            {profile ? 
                <Form id="signup-form">
                    <h4 style={{color: 'white'}}>Update your account</h4>
                    <p>Username: {profile.username}</p>
                    <FormGroup floating>
                        <Input name='firstName' value={profile.firstName} onChange={handleChange}/>
                        <Label for="firstName">First Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input name='lastName' value={profile.lastName} onChange={handleChange}/>
                        <Label for="lastName">Last Name</Label>
                    </FormGroup>
                    <FormGroup floating>
                        <Input name='email' value={profile.email} onChange={handleChange}/>
                        <Label for="email">E-mail</Label>
                    </FormGroup>                
                    <Button color="success" onClick={handleClick}>Update</Button>
                </Form>
                :
                <h4 style={{color: 'white'}}>Invalid request.</h4>}
        </>
    )
};

export default Profile;
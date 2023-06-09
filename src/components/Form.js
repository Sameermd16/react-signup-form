import React from 'react';
import styled from 'styled-components';

function Form() {

    const [siteData, setSiteData] = React.useState(
        {
            email: '',
            password: '',
            confirmPassword: '',
            joinedNewsLetter: true
        }
    )

    function updateForm(event){
        const {name, value, type, checked} = event.target;
        setSiteData((prevData)=> {
                return(
                    {
                        ...prevData,
                        [name] : type === 'checkbox' ? checked : value
                    }

                )
            })
            console.log(siteData)
    }

    function submitData(event) {
        event.preventDefault();
        if(siteData.password === siteData.confirmPassword) {
            console.log("Successfully signed up");
        }else {
            console.log("Passowrds do not match");
            return
        }
        if(siteData.joinedNewsLetter) {
            console.log("Thanks for signing up for our newsletter")
        }
        console.log(siteData)
    };

    return (
        <Container>
            <Myform onSubmit={submitData}>
                <Input 
                    type='email'
                    placeholder='Email address'
                    className='form--input'
                    onChange={updateForm}
                    name='email'
                    value={siteData.email}
                />
                <Input 
                    type='password'
                    placeholder='Password'
                    className='form--input'
                    onChange={updateForm}
                    name='password'
                    value={siteData.password}
                />
                <Input 
                    type='password'
                    placeholder='Confirm Password'
                    className='form--input'
                    onChange={updateForm}
                    name='confirmPassword'
                    value={siteData.confirmPassword}
                />
                <FormMarketing>
                    <input 
                        type='checkbox'
                        id='okayToEmail'
                        onChange={updateForm}
                        name='joinedNewsLetter'
                        checked={siteData.joinedNewsLetter}
                    />
                    <label htmlFor='okayToEmail' >I want to join the newsletter</label>
                </FormMarketing>
                <Button >Sign up</Button>
            </Myform>
        </Container>
    )
}

const Container = styled.div`
    background-color: #639;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Myform = styled.form`
    border-radius: 10px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    background-color: white;
    box-shadow: 5px 5px 15px -1px rgba(0,0,0,0.75);
`;

const Input = styled.input`
    width: 100%;
    margin-bottom: 20px;    
    height: 40px;    
    border-radius: 5px;    
    border: 1px solid gray;    
    padding: 5px;    
    font-family: 'Inter', sans-serif;
`;

const FormMarketing = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    input{
        margin-right: 10px;
    }
`;
const Button = styled.button`
    width: 50%;    
    padding: 10px;    
    border-radius: 5px;    
    color: white;    
    background-color: #639;
    border: none;
    cursor: pointer;
    font-size: 16px;
`;
export default Form;
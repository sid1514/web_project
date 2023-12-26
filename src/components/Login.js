import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CollectionCar from './CollectionCar';
import axios from 'axios';
import React from 'react';
import { Message } from 'semantic-ui-react'
import { Button, Header, Form, Divider, Segment,Icon,Image} from 'semantic-ui-react'
import './Login.css';
import { useDispatch } from 'react-redux';
import { login } from './LoginSlice';
const Login=()=>{
  let[flag,Setflag]=useState(true)
  let[username,Setname]=useState()
  let[userpass,Setpass]=useState()
  let[phoneNumber,setPnumber]=useState()
  let[userEmail,setEmail]=useState()
  let nav=useNavigate()
  const[msg,Setmsg]=useState(false)
  let[f,Setf]=useState(true)
 
  
  let[contain,setContain]=useState([])
let [loginData,setLoginData]=useState([])
const dispatch=useDispatch()
useEffect(() => {
  try {
    fetch("http://localhost:4000/getLoginData")
      .then((res) => res.json())
      .then((temp) => setLoginData(temp))
      .catch((e) => console.log(e));
  } catch (error) {
    // Handle other errors (e.g., network issues)
    console.error('Error fetching login data:', error);
  }
}, []);


  

  const handleFlag=()=>{
    Setflag(!flag)
  }
  
  
  
  
  
  const handleSignUp=()=>{
    const max = loginData.reduce((maxValue, currentObject) => {
      return Math.max(maxValue, currentObject.userid);
    }, -Infinity);
    console.log(max)
    const userid=max+1;
   axios.post("http://localhost:4000/signUp",{userid,username,userpass,phoneNumber,userEmail})
  
   
    Setflag(!flag)
   // Setmsg(false)
  
  }

  const handleSignIn = () =>  {
    if (username !== '' && userpass !== '') {
      axios.post("http://localhost:4000/signIn", { username, userpass })
        .then((res) => {
          setContain(res);
          console.log(res)
          
          dispatch(login(res.data));
         
          if (res.data !== null) {
            const token = res.data.token; 
          
            console.log(token)
            Setf(!f);
            if (username === 'admin' ) {
              nav('/CollectionCar');
            } else {
              nav('/');
              alert("You can book a car now");
            }
          } else {
            alert("enter correct username and password ")
            Setmsg(true);
          }
        })
        .catch((e) => {
          console.error(e);
          Setmsg(true);
          
        });
    } 
  } 
  
 return(
  <>
<div className='Login-container'>
  
{ flag?
  <div className='log' >
 
 {msg?<Message color='red'>Incorrect Username or Password</Message>:null} 
        <Header as='h1' icon textAlign='center'>
        <Icon name="car"  iconPosition="right" size='massive' color='blue' />
        <Header.Content ></Header.Content>
        </Header>
        <Form >
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            onChange={(e)=>Setname(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            placeholder='password'
            type='password'
            onChange={(e)=>Setpass(e.target.value)}
          />

          <Button color="green" fluid  content='Login' onClick={handleSignIn} />
          <Divider horizontal>Or</Divider>

<Button
  color="orange" fluid  content='SignUp' 
  onClick={handleFlag}
/>
        </Form>
          
        
        </div>
        :
        <div className='log'>
        <Segment>
        <Header as='h1' icon textAlign='center'>
        <Icon name="users"  iconPosition="right" size='massive' color='blue'  />
        <Header.Content>SignUp</Header.Content>
        </Header>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Username'
            placeholder='Username'
            onChange={(e)=>Setname(e.target.value)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            onChange={(e)=>Setpass(e.target.value)}
          />
          <Form.Input 
            lable='phone number'
            placeholder="enter a phone number"
            
            onChange={(e)=>setPnumber(e.target.value)}
            />
            <Form.Input 
            lable='Email'
            placeholder="enter a Email"
            
            onChange={(e)=>setEmail(e.target.value)}
            />
        

<Button color="purple" fluid  content='SignUp' onClick={handleSignUp}/>
        </Form>
          
    </Segment>
  
  </div>}
 


<span style={{'color':'white',width:"50%",fontSize:"40px"}}> <p > <b>Login</b> to proceed and book your test drive</p> </span>
</div>

  </>
 )
 
}
export default Login;
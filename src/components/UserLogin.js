import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import React from 'react';
import { Message } from 'semantic-ui-react'
import { Button, Header, Form, Divider, Segment,Icon,Image} from 'semantic-ui-react'
import './Login.css';

const UserLogin=()=>{
  let[flag,Setflag]=useState(true)
  let[name,Setname]=useState()
  let[pass,Setpass]=useState()
  let[pnumber,setPnumber]=useState()
  let[UEmail,setEmail]=useState()
  let nav=useNavigate()
  let[msg,Setmsg]=useState(false)
  let[f,Setf]=useState(true)
  let[fg,setFg]=useState(true)

 let[uid,setId]=useState(100);

  let[userLoginFlag,setLoginFlag]=useState(false)

  const handleFlag=()=>{
    Setflag(!flag)
  }


  const handleSignUp=()=>{
   // let data=({Name:name,Pass:pass,contact:Pnumber,email:Email})
   axios.post("http://localhost:4000/signUp",{uid,name,pass,pnumber,UEmail})
    
    Setflag(!flag)
    Setmsg(false)
    setId(uid+1);
  }

  const handleSignIn = () =>  {
    axios.get(`http://localhost:4000/signIn/${name}/${pass}`)
    .then((res)=> setFg(res))
    .catch((e)=>console.log(e))
    if(fg==true)
    {
      Setf(!f);
      nav('/')
      alert("you can book car now")
    }
    else{
     
      Setmsg(true);
    }
  }
 return(
  <>
<div className='Login-container'>
  { flag?
  <div className='log' >
 
        {msg==true?  <Message color='red'>Incorrect Username or Password</Message>: null}
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
 

<span> <h1 style={{'color':'white'}}>"Login to proceed"</h1> </span>
</div>
  </>
 )
 
}
export default UserLogin;
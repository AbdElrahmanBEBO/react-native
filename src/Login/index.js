import * as Modules from './modules';


import React from 'react'
import auth from '../Config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'



export default function Login(props) {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('') 
  const [Msg, setMsg] = React.useState('') 
  const [counter, setCounter] = React.useState(0)
  
  const Login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setMsg('you are logged in successfully 💙💙')
    })
    .catch(error => {
      setMsg('this account not exsits 😓')
    })
  }

  const loginImage = (
    <Modules.ImageBackground source={Modules.headImage} style={Modules.st.background_image}></Modules.ImageBackground>
  )

  const loginForm = (
    <>
      <Modules.Text style={{fontSize:50, fontWeight: "bold", fontStyle: 'italic'}}>Sign In</Modules.Text>
      <Modules.SafeAreaView>
        <Modules.TextInput style={Modules.st.input} placeholder="email" onChange={(e) => {setEmail(e.target.value)}} value={email} />
        <Modules.TextInput style={Modules.st.input} placeholder="password" onChange={(e) => {setPassword(e.target.value)}} value={password} secureTextEntry={true} />
      </Modules.SafeAreaView> 
      <Modules.Button title="Sing in" onPress={Login}/>      
    </>
   )
  
  const counterBox = (
  <Modules.View style={{flexDirection: 'row', justifyContent:'center', alignItems: 'center', width: '100%', margin: 15}}>
    <Modules.Button  title="-" onPress={() => setCounter(state => state-1)}/>         
    <Modules.Text style={{paddingRight:30, paddingLeft:30 ,fontSize:40, fontWeight: "bold"}}>{counter}</Modules.Text>                  
    <Modules.Button  title="+" onPress={() => setCounter(state => state+1)}/>                           
  </Modules.View>                       
  )

  const loginMsg = (
  <Modules.View style={Modules.st.container}>
    <Modules.Text style={{fontSize:50, fontWeight: "bold", fontStyle: 'italic'}}>{Msg}</Modules.Text>                  
  </Modules.View>                       
  )

  return (
    <Modules.View style={Modules.st.container}>
      {loginImage}
      {loginForm}
      {counterBox}
      {loginMsg}
    </Modules.View>
  );
}


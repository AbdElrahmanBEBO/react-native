import * as Modules from "./modules";

import React from "react";
import auth from "../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({navigation}) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Msg, setMsg] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const Singup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setMsg(
          <>
            <Modules.View style={{color:'red'}}>{userCredential.user.email}</Modules.View>
            <Modules.View>You are logged in successfully 💙</Modules.View>
          </>
        );
        setTimeout(() => navigation.navigate('Login'), 1000)
      })
      .catch((error) => {
        setMsg(<Modules.View>This account not exsits 😓</Modules.View>);
      });
  };

  const SingupImage = (
    <Modules.ImageBackground
      style={{ width: "100%", height: 230 }}
      source={Modules.headImage}
    ></Modules.ImageBackground>
  );

  const SingupForm = (
    <>
      <Modules.Text
        style={{ fontSize: 50, fontWeight: "bold", fontStyle: "italic" }}
      >
        Sign Up
      </Modules.Text>
      <Modules.SafeAreaView>
        <Modules.TextInput
          style={Modules.st.input}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <Modules.TextInput
          style={Modules.st.input}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          secureTextEntry={true}
        />
      </Modules.SafeAreaView>
      <Modules.Button title="Sing Up" onPress={Singup} />
    </>
  );

  const counterBox = (
    <Modules.View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 15,
      }}
    >
      <Modules.Button
        title="-"
        onPress={() => setCounter((state) => state - 1)}
      />
      <Modules.Text
        style={{
          paddingRight: 30,
          paddingLeft: 30,
          fontSize: 40,
          fontWeight: "bold",
        }}
      >
        {counter}
      </Modules.Text>
      <Modules.Button
        title="+"
        onPress={() => setCounter((state) => state + 1)}
      />
    </Modules.View>
  );

  const SingupMsg = (
    <Modules.View style={Modules.st.container}>
      <Modules.Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          fontStyle: "italic",
          marginTop: 50,
        }}
      >
        <Modules.View style={{ justifyContent: "center", alignItems: "center" }}>{Msg}</Modules.View>
      </Modules.Text>
    </Modules.View>
  );

  return (
    <Modules.View style={Modules.st.container}>
      {SingupImage}
      {SingupForm}
    </Modules.View>
  );
}

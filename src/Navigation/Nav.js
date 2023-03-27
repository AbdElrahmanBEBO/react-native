import React from 'react'
import UserStack from "./UserStack";
import LoginStack from "./LoginStack";

export default function Nav() {

  const user = false;

  return user ? <UserStack /> : <LoginStack />;
}

import React from 'react'
import UserStack from "./UserStack";
import LoginStack from "./LoginStack";

export default function Nav() {

  const user = true;

  return user ? <UserStack /> : <LoginStack />;
}

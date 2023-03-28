import * as Modules from './modules';
import React from 'react'

export default function Home({navigation}) {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    // const ProfileScreen = ({navigation, route}) => {
    //   return <Text>This is {route.params.name}'s profile</Text>;
    // };

    return (
    <Modules.View style={Modules.st.container}>
      <Modules.ImageBackground style={{ width: "100%", height: 230, marginBottom: 20 }} source={Modules.headImage} ></Modules.ImageBackground>
      <Modules.View style={{flexDirection: 'row', padding:10}}>
        <Modules.Button 
          title="Login"
          style={{margin:10}}
          onPress={() => navigation.navigate('Login')}          
        />
      </Modules.View>
      <Modules.View style={{flexDirection: 'row', padding:10}}>
        <Modules.Button 
          title="Singup"
          style={{margin:10}}
          onPress={() => navigation.navigate('Signup')}          
        />
      </Modules.View>
    </Modules.View>);
}


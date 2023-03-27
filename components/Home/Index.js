import { 
  login_style,
  headImage,
  React,
  View,
  ImageBackground,
} from './modules';

export default function Home(props) {
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')

    return (
      <View style={login_style.container}>
        <ImageBackground source={headImage} style={login_style.background_image}></ImageBackground>                        
      </View>
    );
}


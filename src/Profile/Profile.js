import * as Modules from "./modules";

import auth from "../Config/firebase";

export default function Profile({navigation}) {
   return (
    <Modules.View style={Modules.st.container}>
      <Modules.Text
        style={{fontSize: 40, color: 'orange', padding: 20}}
      >
        welcome for your system, hope you be fine. 💙      
      </Modules.Text>
      <Modules.Text
        style={{fontSize: 20, color: 'green', padding: 20}}
      >
        email: {auth.currentUser.email}
      </Modules.Text>
    </Modules.View>
  );
}

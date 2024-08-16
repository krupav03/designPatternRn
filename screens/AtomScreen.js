import React,{useState} from "react";
import { View,Text,TouchableOpacity,TextInput } from "react-native";

// Atom: Button

const Button = ({ text, onPress }) => (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
  
  // Molecule: Form Field (TextInput with Button)
  const FormField = ({ label, value, onChangeText, buttonLabel, onPress }) => (
    <View>
      <Text>{label}</Text>
      <TextInput value={value} onChangeText={onChangeText} />
      <Button text={buttonLabel} onPress={onPress} />
    </View>
  );
  
  // Organism: LoginForm
  const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    return (
      <View>
        <FormField label="Username" value={username} onChangeText={setUsername} buttonLabel="Submit" onPress={() => {}} />
        <FormField label="Password" value={password} onChangeText={setPassword} buttonLabel="Submit" onPress={() => {}} />
      </View>
    );
  };
  
  // Template: LoginPage
  const LoginPage = () => {
    return(
        <View>
        <Text>Login to your account</Text>
        <LoginForm />
      </View>
    
    )
  }
   

  export default LoginPage;
  
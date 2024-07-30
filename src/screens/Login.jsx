import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { Style } from './Style';
import { ErrorBanner } from './ErrorBanner';
import axios from 'axios';

const LoginUrl = 'https://safeguard-me-coding-exercise.azurewebsites.net/api/Login';

const LoginScreen = ({ navigation }) => {
  // use state to get the email and password from the user
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // error mangement state
  const [error, setError] = useState('');


  const submitHandler = async () => {
    // Function to create a JSON object containing email and password 
    // for use in an API request to obtain an access token
    if (!email || !password) {
      setError('Email and password are required');
      return;
    } else {
      setError('');
    }

    const body = {
      email: email,
      password: password
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: LoginUrl,
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
    };

    try {
      const response = await axios.request(config);
      if (response.data.accessToken) {
        // once the token is recieved navigae to home page
        navigation.navigate('Home', { token: response.data.accessToken })
      } else {
        setError('Server Error');
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View style={Style.container}>
      <ErrorBanner message={error} />
      <Text style={Style.header}> CV Uploader </Text>
      <TextInput
        placeholder="Enter your email"
        style={Style.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your password"
        style={Style.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={Style.button} onPress={submitHandler}>
        <Text style={Style.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Style } from './Style';
import { WebView } from 'react-native-webview';
import { ActivityIndicator } from 'react-native';

const WebPortal = 'https://safeguard-me-coding-exercise.azurewebsites.net/api/PortalUrl';

const HomeScreen = ({ route, navigation }) => {
  // get the token out of the route params
  const { token } = route.params;
  
  // Use state management to handle the portal URL and loading state
  const [webPortalUrl, setWebPortalUrl] = useState('');
  const [loading, setLoading] = useState(true);

  // if there is no token send the user back to the login page
  useEffect(() => {
    if (!token) {
      navigation.navigate('Login');
    }
  }, [!token]);

  // when there is token perfom a call to the api to access the webportal url
  useEffect(() => {
    const fetchWebPortalUrl = async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: WebPortal,
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
      try {
        const response = await axios.request(config);
        if (response.data) {
          // once the webportal url recieved open the webview with the portalurl
          setWebPortalUrl(response.data);
        }
      } catch (e) {
        console.log(e)
      }

    };
    fetchWebPortalUrl();
  }, [token]);

  return (
    <>
      {loading && (
        <ActivityIndicator
          style={Style.loadingIndicator}
          size="large"
          color="#0000ff"
        />
      )}
      <WebView
        source={{ uri: webPortalUrl }}
        onLoad={() => setLoading(false)}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn('WebView error: ', nativeEvent);
        }}
      />    
    </>
  );
}

export default HomeScreen;

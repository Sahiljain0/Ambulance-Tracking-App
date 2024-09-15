import React from 'react';
import {Text, View} from 'react-native';
import Map from './components/Map';
// import sendPushNotifications from './components/sendPushNotification';
import EntryNavigation from './components/pages/Navigations/EntryNavigation';

const HelloWorldApp = () => {
  return (
   <>
   <Map/>
   <sendPushNotifications/>
   <EntryNavigation/>
   </>
  );
};
export default HelloWorldApp;
import { Notifications } from 'expo';

// Function to send push notification
const sendPushNotification = async (token, title, body) => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
      data: { data: 'goes here' },
    },
    to: token,
    trigger: null,
  });
};

// Example usage
sendPushNotification('ExponentPushToken[xxxxxxxxxxxxxxxxxxxxxx]', 'New Message', 'You have a new message!');

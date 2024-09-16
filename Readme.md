<!-- Ambulance Tracking App -->
# Ambulance Tracking App

Welcome to the Ambulance Tracking App! This React Native application is designed to provide quick and efficient ambulance tracking and dispatch services. It allows patients to request an ambulance during emergencies and tracks the ambulance in real-time.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
  - [Emergency Call](#emergency-call)
  - [Real-Time Tracking](#real-time-tracking)
  - [User Profile Management](#user-profile-management)
  - [Notifications](#notifications)
  - [Accessibility Features](#accessibility-features)
  - [Admin and Dispatcher Dashboard](#admin-and-dispatcher-dashboard)
  - [Security and Privacy](#security-and-privacy)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Setup](#setup)
  - [Run the App](#run-the-app)
- [Usage](#usage)
  - [Requesting an Ambulance](#requesting-an-ambulance)
  - [Tracking an Ambulance](#tracking-an-ambulance)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)
- [Changelog](#changelog)

## Introduction
The Ambulance Tracking App is a mobile application designed to streamline emergency medical response by allowing users to request ambulance services quickly and track the ambulance in real-time. The app aims to improve emergency response times and provide users with critical updates during emergencies.

## Features

### Emergency Call
- **One-Tap Request**: Users can request an ambulance with a single tap, ensuring a quick response during emergencies.
- **Automatic Location Sharing**: The app captures and sends the user's current location to the nearest dispatch center automatically, helping in faster location identification.
- **Emergency Contact Integration**: Users can add and manage emergency contacts that will be notified when an ambulance is requested.

### Real-Time Tracking
- **Live Map Tracking**: The app provides a live map view where users can track the ambulance’s real-time location and movement.
- **ETA Updates**: Users receive real-time updates on the estimated time of arrival (ETA) of the ambulance, so they know when to expect help.
- **Route Optimization**: The app calculates the most efficient route for the ambulance to reach the user as quickly as possible.

### User Profile Management
- **Account Creation and Management**: Users can create and manage their accounts, including updating personal details and medical history if required.
- **Saved Addresses**: Users can save multiple addresses for quick access, such as home, work, or other frequently visited locations.

### Notifications
- **Arrival Alerts**: Users receive push notifications when the ambulance is en route and upon arrival at the pickup location.
- **Status Updates**: Notifications are sent for status changes, such as when the ambulance is dispatched or delayed.

### Accessibility Features
- **Voice Commands**: The app supports voice commands for users with disabilities or those in urgent situations where manual interaction is challenging.
- **Large Text and High Contrast Modes**: Options for large text and high contrast modes ensure that the app is accessible to users with visual impairments.

### Admin and Dispatcher Dashboard
- **Real-Time Dashboard**: Admins and dispatchers can access a dashboard to view all incoming requests, track ambulances, and manage resources efficiently.
- **Resource Management**: The dashboard provides tools for managing available ambulances, assigning them to requests, and monitoring their statuses.

### Security and Privacy
- **Data Encryption**: All sensitive data, including user location and medical information, is encrypted to ensure privacy and security.
- **GDPR Compliance**: The app complies with GDPR regulations to protect user data and ensure user privacy.

## Installation

### Prerequisites
- **Node.js**: Make sure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).
- **React Native CLI**: Install React Native CLI if you haven’t already.
  ```bash
  npm install -g react-native-cli

* Clone the Repository
* Clone the repository using Git
  git clone https://github.com/Sahiljain0/Ambulance-Tracking-App.git
  cd ambulance-tracking-app
*Setup
Install the required dependencies:
npm install
Usage
Requesting an Ambulance
Open the app and log in or create an account if you are a new user.
On the home screen, tap the "Request Ambulance" button.
The app will automatically send your current location to the nearest dispatch center.
You will receive a confirmation and estimated arrival time.

Tracking an Ambulance
After requesting an ambulance, navigate to the "Track Ambulance" screen.
View the real-time location of the ambulance on the map.
Receive updates and notifications about the ambulance's status and estimated time of arrival

* contributions
* # 1. Fork the repository
git clone  https://github.com/Sahiljain0/Ambulance-Tracking-App.git
cd ambulance-tracking-app
git remote add upstream https://github.com/originalowner/ambulance-tracking-app.git

# 2. Create a new branch
git checkout -b feature/YourFeature

# 3. Make your changes
# (Edit files, add features, fix bugs, etc.)

# 4. Commit your changes
git add .
git commit -m 'Add new feature'

# 5. Push to the branch
git push origin feature/YourFeature

# 6. Create a Pull Request


# SnipeIT-PBL
This  app integrates Snipe-IT, an IT asset management system, with WLED to create a pick-by-light system for improved warehouse management.
Snipe-IT is an open-source IT asset and license management system, while WLED is a popular open-source software for controlling LED strips and pixels using ESP8266/ESP32 boards. A pick-by-light system is a warehouse order-picking technology that uses lights to guide operators in locating and picking items from storage locations.
WLED is utilized to WS2812 control LED strips attached to storage shelves. The intigration with Snipe-IT, allows the users to easily locate IT assets within the warehouse. As a user searches for a specific asset, the corresponding LED strip segment on the shelf lights up, guiding the user directly to the item's location.

## Set up dev environment

1. **Make sure you have Node.js installed**: You'll need Node.js to run a React Native Expo app. If you don't have it installed, you can download it from [the official Node.js website](https://nodejs.org/).

2. **Install Expo CLI**: The Expo CLI is a command-line interface for developing, building, and deploying React Native Expo apps. To install the Expo CLI, open your terminal or command prompt and run:

`npm install -g expo-cli`


3. **Clone or download the app repository**: If the app is hosted on a version control system like GitHub or GitLab, you can clone the repository using the command:

`git clone https://github.com/juliusdw/SnipeIT-PBL`


4. **Navigate to the app directory**: In your terminal or command prompt, change to the app directory using the `cd` command


5. **Install dependencies**: Run the following command to install all the required dependencies for the app:

`npm install`

6. **Start the app**: Run the following command to start the app in development mode:

`npx expo start`


This will open the Expo DevTools in your terminal, displaying a QR code and options for running the app on different devices/emulators.

7. **Run the app on your device or an emulator**: To run the app on your physical device, you can install the Expo Go app from the [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) or the [Apple App Store](https://apps.apple.com/app/apple-store/id982107779). Then, scan the QR code displayed in the Expo DevTools using your device's camera.

To run the app on an Android or iOS emulator, you can click on the "Run on Android device/emulator" or "Run on iOS simulator" options in the Expo DevTools. Ensure that you have Android Studio or Xcode installed and configured on your system to use emulators.


## --- 🚧 Section still under Construction 🚧 ---

## WLED Setup instructions
In the folowing segment i will explain how to get WLED set up.

### Install and connect to wifi
1. flash WLED on a ESP D1 mini or ESP32 (https://install.wled.me/)
2. connect to WLED-AP wifi with Password: wled1234
3. go to http://4.3.2.1
4. ......

### Set up storage locations
The storage locations are resembled by segments in the WLED software.
We first need to set up the real world storage locations as segments in WLED.

### assigning ESPs and segments in Locations


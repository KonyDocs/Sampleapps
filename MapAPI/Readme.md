# Map API
## Overview
The Keychain API provides your app a mechanism to store chunks of user data (such as passwords) in an encrypted database. Using the Keychain API, your app can save users' credential information in the device's keychain. Keychain API app showcases the following APIs:

- [containsLocation](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#kony_map_functions.htm#contLoc%3FTocPath%3DMap%2520API%7Ckony.map%2520Namespace%7CFunctions%7C_____1)
- [distanceBetween](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#kony_map_functions.htm#distance%3FTocPath%3DMap%2520API%7Ckony.map%2520Namespace%7CFunctions%7C_____2)
- [searchRoutes](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#kony_map_functions.htm#mapSrchR%3FTocPath%3DMap%2520API%7Ckony.map%2520Namespace%7CFunctions%7C_____4)

## Import the Application
After downloading the zip file of the Visualizer Project from GitHub, perform the following steps to import the application to Kony Visualizer.

1. Open Kony Visualizer.
2. From the main menu select **Project** → **Import** → **Local Project** → **Open as New Project**. Select the MapAPI zipped folder and click Open.


#### Note: Add your own Map API key to the project for the searchRoutes API key to work. To add the API key, open **frmMapSearchResult** form and search for **callSearchRoutefunc** function and add the API key to the **apiKey** tag. 

## Run the Application
To run the application in Kony Visualizer, follow these steps:

1. From the main menu bar select **Build** → **Run Live Preview**. This opens the Live Preview Settings window.
2. Select iOS or Android for Mobile under Native and click **Save & Run** to build the application. This opens a Live Preview is Ready dialogbox with a QR code.

## Preview the Application
To preview the built application on your mobile device, follow these steps:

1. Open the Kony Quantum app installed in your mobile device.
2. Select the Wi-Fi tab and click **Scan QR Code** and scan the QR code displayed along with the dialog box. This launches the application.

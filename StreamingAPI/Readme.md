# Streaming API
## Overview
Streaming API app showcases the following APIs:

- [registerDataStream](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#kony.stream_functions.htm#Registra%3FTocPath%3DStreaming%2520API%7Ckony.stream%2520Namespace%7CFunctions%7C_____2)
- [deregisterDataStream](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#kony.stream_functions.htm#deregisterDataStream%3FTocPath%3DStreaming%2520API%7Ckony.stream%2520Namespace%7CFunctions%7C_____1)

## Import the Application
After downloading the zip file of the Visualizer Project from GitHub, perform the following steps to import the application to Kony Visualizer.

1. Open Kony Visualizer.
2. From the main menu select **Project** → **Import** → **Local Project** → **Open as New Project**. Select the Streaming zipped folder and click Open.

#### Note: Before you run your project follow these steps to setup a streaming server:

1. Open [Kony Visualizer API Guide](https://docs.kony.com/konylibrary/visualizer/viz_api_dev_guide/Default.htm#streaming_apis.htm%3FTocPath%3DStreaming%2520API%7C_____0), and navigate to **Streaming API**. 
2. Scroll down the document to find **Test the Streaming API** and download the zip by clicking **Streamingserver.zip**. 
3. Extract the zip to find the streaming.js file.
4. Open command prompt to the extracted location and type node streaming.js.

   output: Example app listening at http://:::8081 (indicates server is listening on 8081)
5. Type this url in the browser "http://localhost:8081/listStreamData" (Do not use Mozilla Firefox)
  
   You can see the continuous streaming data. 


## Run the Application
To run the application in Kony Visualizer, follow these steps:

1. From the main menu bar select **Build** → **Run Live Preview**. This opens the Live Preview Settings window.
2. Select Android for Mobile under Native and click **Save & Run** to build the application. This opens a Live Preview is Ready dialogbox with a QR code.

#### Note: This app only supports Android platform.

## Preview the Application
To preview the built application on your mobile device, follow these steps:

1. Open the Kony Quantum app installed in your mobile device.
2. Select the Wi-Fi tab and click **Scan QR Code** and scan the QR code displayed along with the dialog box. This launches the application.

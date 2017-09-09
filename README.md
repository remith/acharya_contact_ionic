# Global Chinmaya Mission - Acharya Contact Application

This is an Ionic 2 app that stores all the acharyas associated with Chinmaya Mission world wide. It allows to use the native functionality of the phone through web view.


## How to try the app

    Note: YOU NEED TO HAVE JAVA,CORDOVA,NODEJS AND NPM INSTALLED  (http://ionicframework.com/docs/v1/guide/installation.html).
    Hybrid apps can be developed in linux and windows for android, you need a MAC OS to develop IOS application.

1. Install the the latest version of the Ionic CLI:
    ```
    npm install -g ionic
    ```

2. Clone this repository 

3. Navigate to the app directory:
    ```
    cd into the app directory
    ```

4. Install the dependencies
    ```
    npm install
    ```
5. Install native plugin for call, email and message service.

6. Add platform using 'ionic cordova platform add android' (ios for ios development)

7. Plugin Installation (https://ionicframework.com/docs/native)
```
 Call number plugin
 ```
 ionic cordova plugin add cordova-plugin-contacts
 ```
 npm install --save @ionic-native/contacts
```
 Send Email Plugin
 ```
 ionic cordova plugin add cordova-plugin-email
 ```
 npm install --save @ionic-native/email
```
From here you can build and run the app on different platforms using the traditional Cordova/Ionic CLI commands (`ionic cordova build ios`, `ionic serve --lab`, etc.).
```
Author : Remith Ravindran

## License

[MIT](LICENSE)


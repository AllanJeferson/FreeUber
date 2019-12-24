// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDZeIeyaP0MJhtXQz_n7q0iXhBie3SqdQY',
    authDomain: 'freeyou-e2412.firebaseapp.com',
    databaseURL: 'https://freeyou-e2412.firebaseio.com',
    projectId: 'freeyou-e2412',
    storageBucket: 'freeyou-e2412.appspot.com',
    messagingSenderId: '297350647628',
    appId: '1:297350647628:web:d8ba4cbf784868db21c9e9',
    measurementId: 'G-0JL8WL3HV0',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
import * as firebase from 'firebase/app';

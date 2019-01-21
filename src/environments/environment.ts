// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'http://localhost:4200/',
  firebase: {
    apiKey: "AIzaSyDEOx2FE_yRh4LupxdYt0FmFxm7WV6olS0",
    authDomain: "company-crm-f466c.firebaseapp.com",
    databaseURL: "https://company-crm-f466c.firebaseio.com",
    projectId: "company-crm-f466c",
    storageBucket: "company-crm-f466c.appspot.com",
    messagingSenderId: "977572994010"
  },
  fmsClass: 'fixed-top m-auto bg-success w-50 text-white text-center',
  fmsClassDanger: 'fixed-top m-auto bg-danger w-50 text-white text-center',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

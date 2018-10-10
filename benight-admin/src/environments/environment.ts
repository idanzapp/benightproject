// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase_login: {    
    apiKey: "AIzaSyB0xLx0fbzRceUoBfM3wHiN_ilLCQdO3h0",
    authDomain: "auth.benightapp.com",
    databaseURL: "https://benight-39ddb.firebaseio.com",
    projectId: "benight-39ddb",
    storageBucket: "benight-39ddb.appspot.com",
    messagingSenderId: "564464103325"
  },
  firebase: {
    URL: 'https://us-central1-benight-39ddb.cloudfunctions.net/databaseConfig'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

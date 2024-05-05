/* @DONE replace with your variables
 * ensure all variables on this page match your project
 */
import {DOMAIN, API_AUDIENCE, AUTH_CLIENT_ID} from '../../secrets.js';

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: DOMAIN, // the auth0 domain prefix
    audience: API_AUDIENCE, // the audience set for the auth0 app
    clientId: AUTH_CLIENT_ID, // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};

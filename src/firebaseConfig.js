import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBE62T0U6gvlUl_YbFpaEFnxeS3ZO_0zLI",
  authDomain: "asbp-ca8d9.firebaseapp.com",
  projectId: "asbp-ca8d9",
  storageBucket: "asbp-ca8d9.appspot.com",
  messagingSenderId: "975572149497",
  appId: "1:975572149497:web:34af1b4c903316e94a2e28",
  measurementId: "G-FHPYSR0ZV1",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;

import { createApp } from "vue"
import App from "./App.vue"
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi9NpDGI85fmdNYXfCD4w13sy4UhxiX3Q",
  authDomain: "vite-project-bd76c.firebaseapp.com",
  projectId: "vite-project-bd76c",
  storageBucket: "vite-project-bd76c.appspot.com",
  messagingSenderId: "532915553516",
  appId: "1:532915553516:web:62c66e2e813c1e1a33d1c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app');

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
} from "firebase/firestore";
import { Product } from "../context/product";
import { Order } from "../dto/dto";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBe89k4GqMqN2g1raApGyUJO7kX5aCn4sA",

  authDomain: "idea-cd2f7.firebaseapp.com",

  databaseURL:
    "https://idea-cd2f7-default-rtdb.europe-west1.firebasedatabase.app/",

  projectId: "idea-cd2f7",

  storageBucket: "idea-cd2f7.appspot.com",

  messagingSenderId: "412077953135",

  appId: "1:412077953135:web:42814beb0b7f74eec4fd9a",

  measurementId: "G-EZ55RQ4GTJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const store = getFirestore(app);

export const getMyProducts = async (): Promise<Product[] | Error> => {
  const querySnapshot = await getDocs(collection(store, "Tables"))
    .then((products) => {
      let finalProducts: Product[] = [];
      products.forEach((doc) => {
        const data = doc.data() as Product;

        finalProducts.push(data);
      });

      return finalProducts;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return new Error(`${errorCode} : ${errorMessage}`);
    });

  return querySnapshot;
};

export const addOrder = async (input: Order): Promise<void | Error> => {
  // Add a new Order in collection "Orders"

  const order = await setDoc(doc(store, "Orders", input.id), input)
    .then((reference) => {
      console.log(input.id);

      return reference;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return new Error(`${errorCode} : ${errorMessage}`);
    });
  return order;
};

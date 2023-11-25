import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCBo0Sp5WYkxSlbk9wk6bWGcOXe0mqE_tc",
  authDomain: "dev-jorney-dd511.firebaseapp.com",
  projectId: "dev-jorney-dd511",
  storageBucket: "dev-jorney-dd511.appspot.com",
  messagingSenderId: "716097608824",
  appId: "1:716097608824:web:f24fcbebcf30778ca9618d"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
const db =getFirestore(app);

export {auth, provider, db};
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebasse";
import { collection, doc, setDoc } from 'firebase/firestore';

export async function register(email, password, displayName) {
  try {
    const { user } = await createUserWithEmailAndPassword( auth,email, password);
    console.log(user.displayName)

    console.log(user)
   if (displayName) {
      await updateProfile(user, { displayName });
      console.log(user.displayName)

    }

    const userCollection = collection(db, 'users');
    await setDoc(doc(userCollection, user.uid), {

      uid: user.uid,

      email: email,
      displayName: displayName || '',
      createdAt: new Date().toISOString(),
      cart: [],
    });
    console.log(user.uid)
    return user;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }

}

// console.log(user.uid)

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return signOut(auth);
}

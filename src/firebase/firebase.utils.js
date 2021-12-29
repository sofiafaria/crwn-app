import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyA5U2NlPPkcFlp9lFGoVKVdg3Zg-unds2o",
    authDomain: "crwn-db-c43c6.firebaseapp.com",
    projectId: "crwn-db-c43c6",
    storageBucket: "crwn-db-c43c6.appspot.com",
    messagingSenderId: "289715830105",
    appId: "1:289715830105:web:9de511435c92b6f8306048",
    measurementId: "G-Z1830P96LG"
  };
  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      //create user in db
      const { displayName, email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
        
      } catch (error) {
        console.log('error creating user', error.message);
        
      }
    }
    return userRef;
  } 


  // export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
  //   const collectionRef = firestore.collection(collectionKey);
  //   console.log(collectionRef);

  //   const batch = firestore.batch();
  //   objectsToAdd.forEach(obj =>{
  //     const newDocRef = collectionRef.doc();
  //     batch.set(newDocRef, obj);
  //   });

  //   return await batch.commit();
  // }

  export const convertCollectionsSnapshotToMap= collectionsSnapshot => {
    const transformedCollection = collectionsSnapshot.docs.map( doc =>{
      const {title, items} = doc.data();
      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((accumulator, collection) =>{
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    }, {});
  }

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;

import React from 'react';
import { FirestoreProvider, useFirebaseApp } from 'reactfire';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

function FirebaseApp(props: React.PropsWithChildren<unknown>): JSX.Element {
  const firebaseApp = useFirebaseApp();
  const firestoreInstance = getFirestore(firebaseApp);

  if (process.env.NODE_ENV === 'development') {
    connectFirestoreEmulator(firestoreInstance, 'localhost', 8080);
  }

  return <FirestoreProvider sdk={firestoreInstance}>{props.children}</FirestoreProvider>;
}

export default FirebaseApp;

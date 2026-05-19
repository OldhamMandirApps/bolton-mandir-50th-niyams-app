export type FirestoreTarget = 'emulator' | 'staging' | 'production';

const configuredTarget = process.env.REACT_APP_FIRESTORE_TARGET;
const defaultTarget: FirestoreTarget = process.env.NODE_ENV === 'development' ? 'emulator' : 'production';

export const firestoreTarget: FirestoreTarget =
  configuredTarget === 'emulator' || configuredTarget === 'staging' || configuredTarget === 'production'
    ? configuredTarget
    : defaultTarget;

export const shouldUseFirestoreEmulator =
  process.env.NODE_ENV === 'development' && firestoreTarget === 'emulator';

export const shouldShowLiveFirestoreWarning =
  process.env.NODE_ENV === 'development' && firestoreTarget !== 'emulator';

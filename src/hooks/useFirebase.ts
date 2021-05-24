import Auth from 'firebase-auth-lite';
import {Database} from 'firebase-firestore-lite';

const useFirebase = (): Database => {
  const auth = new Auth({apiKey: process.env.REACT_APP_FIREBASE_API_KEY});

  return new Database({projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '', auth});
};

export default useFirebase;

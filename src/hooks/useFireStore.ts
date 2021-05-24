import Auth from 'firebase-auth-lite';
import {Database} from 'firebase-firestore-lite';

const getDatabase = () => {
  const auth = new Auth({apiKey: process.env.REACT_APP_FIREBASE_API_KEY});

  return new Database({
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    auth,
  });
};

const getDatabaseEmulator = () => {
  return new Database({
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || '',
    host: 'localhost:8080',
    ssl: false,
  });
};
const useFireStore = (): Database => {
  return process.env.REACT_APP_ENV === 'prod'
      ? getDatabase()
      : getDatabaseEmulator();
};

export default useFireStore;

import Auth from 'firebase-auth-lite';
import {Database} from 'firebase-firestore-lite';

const useFirebase = (): Database => {
  const auth = new Auth({apiKey: 'AIzaSyAsfZp6lD_7HYzU7RNb-ZCUzbsKdhQQtTo'});

  return new Database({projectId: 'api-project-984120382986', auth});
};

export default useFirebase;

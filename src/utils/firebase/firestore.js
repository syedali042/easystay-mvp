import {collection, doc, getDocs, getDoc} from 'firebase/firestore';
import {db} from './config';

export const getAllDocumentsFromCollection = async ({collectionName}) => {
  const snapshot = await getDocs(collection(db, collectionName));
  const docs = [];
  snapshot.forEach((doc) => {
    docs.push({id: doc.id, ...doc.data()});
  });
  return docs;
};

export const getDocumentFromCollectionById = async ({collectionName, id}) => {
  const snapshot = await getDoc(doc(db, collectionName, id));
  if (snapshot.exists()) {
    return {id, ...snapshot.data()};
  }
};

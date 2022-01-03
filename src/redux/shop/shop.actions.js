import ShopActionTypes from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});
/*we are implementing a function that instead of returning an action object is returning a function that takes dispatch function as an argument
the moment we instantiate the function we are
1- getting collectionRef -> reference to the data that we need
2 - dispatch(fetchCollectionsStart()) -> change the state
3 - invoke async call to get the data , where we invoke fetchCollectionsSuccess which will change the state again and put in out payload the collectionsmap
4 - if it fails return the error message and update the state in fetchCollectionsFailure
*/
export const fetchCollectionsStartAsync = () => {
    return dispatch => {
      const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());
  
      collectionRef
        .get()
        .then(snapshot => {
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          dispatch(fetchCollectionsSuccess(collectionsMap));
        })
        .catch(error => dispatch(fetchCollectionsFailure(error.message)));
    };
  };


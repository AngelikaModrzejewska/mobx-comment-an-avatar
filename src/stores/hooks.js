import { useContext } from 'react';
import { StoreContext } from './StoreProvider';

//creating own hooks
export function useCommentsStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error('RootStore not found :=(');
  }
  return rootStore.commentsStore;
}

export function usePicStore() {
  const rootStore = useContext(StoreContext);

  if (!rootStore) {
    throw new Error('RootStore not found :=(');
  }
  return rootStore.picStore;
}
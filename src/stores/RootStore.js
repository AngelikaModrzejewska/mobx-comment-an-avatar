import CommentsStore from './CommentsStore';
import PicStore from './PicStore';

export default class RootStore {
  constructor() {
    this.commentsStore = new CommentsStore();
    this.picStore = new PicStore();
  }
}
import { action, makeObservable, observable } from 'mobx';

const NO_RESULT = -1;

export default class CommentsStore {

  @observable
  comments = [{
    id: 5532532,
    comment: 'So funny!',
  }];

  constructor() {
    makeObservable(this);
  }

  @action
  addComment = comment => this.comments.push(comment);

  @action
  removeComment = id => {

    if (id === NO_RESULT) {
      return;
    }

    this.comments = this.comments.filter(
      comment => comment.id !== id
    );
  };

  @action
  removeAllComments = () => {
    this.comments = [];
  }
}
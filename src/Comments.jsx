import bemCssModules from 'bem-css-modules';
import { observer } from 'mobx-react';
import { useCommentsStore } from './stores/hooks';
import { default as CommStyles } from './Comments.module.scss';

const style = bemCssModules(CommStyles);

const Comments = () => {
  
  const { comments, removeComment } = useCommentsStore();

  const handleClick = event => {
    const id = Number(event.target.dataset.id);
    removeComment(id);
  }

  const commentsElements = comments.map(comment => (
    <li key={comment.id}>
      <p>{comment.comment}</p>
      <button 
        className={style('button-ul')}
        data-id={comment.id}
        onClick={handleClick}
      >
        Delete comment
      </button>
    </li>
  ));

  return (
    <ul className={style()}>
      {commentsElements}
    </ul>
  );
};

export default observer(Comments);
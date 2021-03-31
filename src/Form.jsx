import bemCssModules from 'bem-css-modules';
import { useState } from 'react';
import { useCommentsStore } from './stores/hooks';
import { default as FormStyles } from './Form.module.scss';

const style = bemCssModules(FormStyles);

const Form = () => {
  const [inputData, setInputData] = useState('');
  const { addComment } = useCommentsStore();

  const handleOnChange = event => setInputData(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    const comment = {
      id: Date.now(),
      comment: inputData,
    };

    addComment(comment);
    setInputData('');
  }

  return (
    <form 
      className={style()}
      onSubmit={handleOnSubmit}>
      <label className={style('label')}>
        Your comment:
        <br/>
        <input
          className={style('input')}
          maxLength="25"
          onChange={handleOnChange}
          type="text"
          value={inputData}
        />
      </label>
    </form>
  );
};

export default Form;

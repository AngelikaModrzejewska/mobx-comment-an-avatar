import bemCssModules from 'bem-css-modules';
import Comments from './Comments';
import Form from './Form';
import Picture from './Picture';
import StoreProvider from './stores/StoreProvider';
import { default as AppStyles } from './App.module.scss';

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <StoreProvider>
      <div className={style()}>
        <div className={style('content')}>
          <h1 className={style('h1')}>Comment avatars!</h1>
          <h2 className={style('h2')}>Do you like me?</h2>
          <div className={style('components')}>
            <Picture />
            <div className={style('comm-section')}>
              <Comments />
              <Form />
            </div>
          </div>
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
import bemCssModules from 'bem-css-modules';
import { observer } from 'mobx-react';
import { useCommentsStore, usePicStore } from './stores/hooks';
import { default as PicStyles } from './Picture.module.scss';

const style = bemCssModules(PicStyles);

const Picture = () => {
  
    const { picUrl, getPic } = usePicStore();
    const { removeAllComments } = useCommentsStore();
  
    const handleClick = () => {
        getPic();
        removeAllComments();
    }

    return (
        <div className={style()}> 
            <img className={style('img')} src={picUrl} alt="..." />
            <button className={style('button')} onClick={handleClick}>Next Avatar</button>
        </div>
    );
  };

export default observer(Picture);
import { LoadMoreBtnProps } from '../App.types';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMoreCounter }) => {
  return (
    <button type="button" className={css.loadMoreBtn} onClick={loadMoreCounter}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;


import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favorites/favorites.slice';

import styles from './RecipeItem.module.css';

const RecipeItem = ({ recipe }) => {
  const dispatch = useDispatch();
  const { item } = useSelector(({ favorites }) => favorites);
  const isExists = item.find((obj) => obj.id === recipe.id);
  const addFavorite = () => {
    dispatch(toggleFavorite(recipe));
  };

  return (
    <div className={styles.item}>
      <img className={styles.img} src={recipe.image} width={150} alt={recipe.name} />
      <h2>{recipe.name}</h2>
      <button onClick={() => addFavorite()}>{isExists ? 'Remove from' : 'add to'} favorites</button>
    </div>
  );
};

export default RecipeItem;

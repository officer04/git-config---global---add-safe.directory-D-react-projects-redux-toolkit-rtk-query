import { useGetRecipesQuery } from '../store/api/api';
import Header from './Header/Header';
import RecipeItem from './RecipeItem/RecipeItem';
import User from './User/User';
import CreateRecipe from './create-recipe/CreateRecipe';

function App() {
  const { isLoading, data } = useGetRecipesQuery();
  console.log(data, isLoading);
  return (
    <section className="App">
      <Header />
      {/* <User /> */}
      <CreateRecipe/>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : data ? (
        data.map((recipe) => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <div>Not found</div>
      )}
      <div>
      </div>
    </section>
  );
}

export default App;

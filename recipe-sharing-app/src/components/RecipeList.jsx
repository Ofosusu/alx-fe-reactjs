import useRecipeStore from '../recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe above!</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {recipes.map(recipe => (
            <div 
              key={recipe.id} 
              style={{ 
                border: '1px solid #ddd', 
                padding: '15px', 
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
                {recipe.title}
              </h3>
              <p style={{ margin: 0, color: '#666' }}>
                {recipe.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
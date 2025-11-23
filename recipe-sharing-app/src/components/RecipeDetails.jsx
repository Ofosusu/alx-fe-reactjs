import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import useRecipeStore from '../recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === parseInt(id))
  );
  
  const [isEditing, setIsEditing] = useState(false);

  // Handle case where recipe doesn't exist
  if (!recipe) {
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h2>Recipe not found</h2>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
          ← Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', marginBottom: '20px', display: 'inline-block' }}>
        ← Back to Recipes
      </Link>
      
      {isEditing ? (
        <div>
          <EditRecipeForm recipe={recipe} onCancel={() => setIsEditing(false)} />
        </div>
      ) : (
        <div>
          <h1 style={{ color: '#333', marginBottom: '10px' }}>{recipe.title}</h1>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
            {recipe.description}
          </p>
          
          <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
            <button
              onClick={() => setIsEditing(true)}
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Edit Recipe
            </button>
            
            <DeleteRecipeButton recipeId={recipe.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
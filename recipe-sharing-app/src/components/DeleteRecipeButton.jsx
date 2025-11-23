import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    // Confirm before deleting
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      // Navigate back to home page after deletion
      navigate('/');
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '10px'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
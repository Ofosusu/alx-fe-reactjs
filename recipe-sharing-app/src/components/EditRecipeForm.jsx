import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const EditRecipeForm = ({ recipe, onCancel }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Validation
    if (!title.trim() || !description.trim()) {
      alert('Please fill in both title and description');
      return;
    }
    
    // Update recipe with same ID but new data
    updateRecipe({ 
      id: recipe.id, 
      title: title.trim(), 
      description: description.trim() 
    });
    
    // Exit edit mode
    onCancel();
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '500px' }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Recipe Title"
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Recipe Description"
          rows="6"
          style={{ 
            padding: '10px', 
            fontSize: '16px', 
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'inherit',
            resize: 'vertical'
          }}
        />
        <div style={{ display: 'flex', gap: '10px' }}>
          <button 
            type="submit"
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Save Changes
          </button>
          <button 
            type="button"
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;
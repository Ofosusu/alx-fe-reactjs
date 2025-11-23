// src/components/RecipeList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';
import FavoriteButton from './FavoriteButton';

const RecipeCard = ({ recipe }) => (
  <div style={{ border: '1px solid #ddd', padding: 15, borderRadius: 8, background: '#fff', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 10, right: 10 }}>
      <FavoriteButton recipeId={recipe.id} />
    </div>
    <h3 style={{ margin: '0 0 8px 0' }}>{recipe.title}</h3>
    <p style={{ margin: 0 }}>{recipe.description}</p>
    <div style={{ marginTop: 10, fontSize: 13, color: '#666' }}>
      Prep: {recipe.prepMinutes ?? recipe.prepTime ?? '—'} min · Ingredients: {(recipe.ingredients || []).join(', ')}
    </div>
  </div>
);

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm || '');
  const filters = useRecipeStore(state => state.filters);

  const isFilterApplied = (searchTerm && searchTerm.trim().length > 0)
    || ((filters.ingredients || []).length > 0)
    || (filters.maxPrepMinutes != null);

  const listToShow = isFilterApplied ? filteredRecipes : recipes;

  if (!listToShow || listToShow.length === 0) {
    return <div style={{ marginTop: 20 }}>No recipes match your search/filter.</div>;
  }

  return (
    <div style={{ marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
      {listToShow.map(r => <RecipeCard key={r.id} recipe={r} />)}
    </div>
  );
};

export default RecipeList;

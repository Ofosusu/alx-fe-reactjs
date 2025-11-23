// src/components/FavoritesList.jsx
import React from 'react';
import useRecipeStore from '../recipeStore';
import FavoriteButton from './FavoriteButton';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  if (favRecipes.length === 0) {
    return (
      <div>
        <h2>My Favorites</h2>
        <p>No favorites yet — click the ☆ on recipes to add them.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>My Favorites</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {favRecipes.map(r => (
          <div key={r.id} style={{ border: '1px solid #eee', padding: 10, borderRadius: 6, background: '#fafafa' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0 }}>{r.title}</h4>
                <small style={{ color: '#666' }}>{(r.ingredients || []).slice(0, 4).join(', ')}</small>
              </div>
              <FavoriteButton recipeId={r.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;

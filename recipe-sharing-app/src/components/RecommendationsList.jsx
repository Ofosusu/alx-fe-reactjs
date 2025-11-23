// src/components/RecommendationsList.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import FavoriteButton from './FavoriteButton';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const favorites = useRecipeStore(state => state.favorites);

  // regenerate when favorites change (you can also call this from store when favorites change)
  useEffect(() => {
    generateRecommendations();
  }, [favorites, generateRecommendations]);

  if (!recommendations || recommendations.length === 0) {
    return (
      <div>
        <h2>Recommended for you</h2>
        <p>No recommendations yet — favorite recipes to get personalized suggestions.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommended for you</h2>
      <div style={{ display: 'grid', gap: 8 }}>
        {recommendations.map(r => (
          <div key={r.id} style={{ border: '1px solid #eee', padding: 10, borderRadius: 6, background: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <strong>{r.title}</strong>
              <div style={{ fontSize: 12, color: '#666' }}>{(r.ingredients || []).slice(0, 3).join(', ')}{(r.ingredients || []).length > 3 ? '...' : ''}</div>
            </div>
            <FavoriteButton recipeId={r.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;

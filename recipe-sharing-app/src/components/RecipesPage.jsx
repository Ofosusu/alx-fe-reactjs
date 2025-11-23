// src/pages/RecipesPage.jsx
import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';
import SearchBar from '../components/SearchBar';
import RecipeFilters from '../components/RecipeFilters';
import RecipeList from '../components/RecipeList';
import FavoritesList from '../components/FavoritesList';
import RecommendationsList from '../components/RecommendationsList';

const RecipesPage = () => {
  const setRecipes = useRecipeStore(s => s.setRecipes);
  const hydrate = useRecipeStore(s => s.hydrateFromStorage);
  const generateRecommendations = useRecipeStore(s => s.generateRecommendations);

  useEffect(() => {
    // hydrate localStorage
    hydrate();

    // Example seed data (remove when you have a real API)
    const seed = [
      { id: '1', title: 'Tomato Pasta', description: 'Simple pasta', ingredients: ['tomato','pasta','salt'], prepMinutes: 20, tags: ['italian'] },
      { id: '2', title: 'Fried Rice', description: 'Quick rice', ingredients: ['rice','egg','peas'], prepMinutes: 15, tags: ['asian'] },
      { id: '3', title: 'Chocolate Cake', description: 'Rich cake', ingredients: ['cocoa','flour','sugar'], prepMinutes: 60, tags: ['dessert'] },
    ];
    // Only set seed if store empty
    setRecipes(prev => {
      // If recipes already exist, don't overwrite
      return seed;
    });
    // generate recs after recipes set
    generateRecommendations();
  }, [hydrate, setRecipes, generateRecommendations]);

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: 20 }}>
      <h1>Recipes</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20 }}>
        <main>
          <SearchBar />
          <div style={{ marginTop: 16 }}>
            <RecipeList />
          </div>
        </main>

        <aside style={{ borderLeft: '1px solid #eee', paddingLeft: 16 }}>
          <FavoritesList />
          <div style={{ marginTop: 24 }}>
            <RecommendationsList />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RecipesPage;

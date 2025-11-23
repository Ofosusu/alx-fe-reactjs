import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home page route - shows form and list */}
          <Route 
            path="/" 
            element={
              <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '30px' }}>
                  Recipe Sharing Application
                </h1>
                <AddRecipeForm />
                <RecipeList />
              </div>
            } 
          />
          
          {/* Recipe details route - shows individual recipe */}
          <Route 
            path="/recipe/:id" 
            element={<RecipeDetails />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
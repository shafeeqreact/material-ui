import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './drawers';

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <TemporaryDrawer />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardComponent from './components/cardComponent';
import ProfileComponent from './components/ProfileComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <CardComponent 
        title="Thầy Giáo Ba"   
        description="Sự lụi tàn của đồng tiền"     
      />
    </div>
  );
}

export default App;

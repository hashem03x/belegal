import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import AOS from 'aos';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "jquery";
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
const root = ReactDOM.createRoot(document.getElementById('root'));
AOS.init({
  offset: 150, 
  delay: 100, 
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

root.render(
  <React.StrictMode>
    <App />


  </React.StrictMode>
);

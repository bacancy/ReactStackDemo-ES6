var React = require('react');
var Render = require('react-dom').render;
var AppData = require('./data/Appdata');
var API = require('./utils/API');
import App from './components/Main.jsx';
AppData.init();
API.getData();
Render(
    <App />,
    document.getElementById('app')
);

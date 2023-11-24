import React from 'react';
// import '~slick-carousel/slick/slick.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "~slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import store from './redux/store/store'
import App from './App';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    
    <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<App />} />
      </Routes>
      </Provider>
    </BrowserRouter>

);


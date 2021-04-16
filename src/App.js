import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import ItemState from "./context/items.state";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import('./pages/home.page'))
const ItemSearchPage = React.lazy(() => import('./pages/item-search.page'))
const ItemDetailPage = React.lazy(() => import('./pages/items-detail.page'))

function App() {
  return (
    <ItemState>
      <BrowserRouter>
        <Route exact path="/"  render={props => (<Suspense fallback={<div>Loading...</div>} >
          <HomePage {...props} />
        </Suspense> )}/>
        <Route exact path="/items" render={props => (<Suspense fallback={<div>Loading...</div>}>
          <ItemSearchPage {...props} />
        </Suspense>)} />
        <Route exact path="/items/:id" render={props => (<Suspense fallback={<div>Loading...</div>}>
          <ItemDetailPage {...props} />
        </Suspense>)} />
      </BrowserRouter>
    </ItemState>
  );
}

export default App;

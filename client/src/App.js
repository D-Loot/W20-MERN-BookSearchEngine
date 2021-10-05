import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;


// 28

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Home from './pages/Home';
// import Matchup from './pages/Matchup';
// import Vote from './pages/Vote';
// import NotFound from './pages/NotFound';

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div className="flex-column justify-center align-center min-100-vh bg-primary">
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route exact path="/matchup">
//               <Matchup />
//             </Route>
//             <Route exact path="/matchup/:id">
//               <Vote />
//             </Route>
//             <Route>
//               <NotFound />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;

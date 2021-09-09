import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

const routes = [Home, About, Projects, Contact];

const links = [
  { home: Home },
  { about: About },
  { projects: Projects },
  { contact: Contact },
];

const App = () => {
  console.log(links.map((link) => Object.keys(link)[0]));
  return (
    <>
      <Router>
        <Header links={routes.map(({ name }) => name)} />
        <div>Hey! I'm going to be the new cuBlueprint website 🤠</div>
        <Switch>
          {routes.map((route) => (
            <Route key={`r-${route.name}`} exact path={`/${route.name}`}>
              {route}
            </Route>
          ))}
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

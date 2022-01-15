import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Theme from './Theme';
import { Fonts } from './content';

import { Header } from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Apply from './Apply';
import Contact from './Contact';
import Footer from './Footer';

const routes = [Home, About, Projects, Apply, Contact];

const links = [
  { home: Home },
  { about: About },
  { projects: Projects },
  { apply: Apply },
  { contact: Contact },
];

interface HeadingProps {
  isHeading: boolean;
}

const App = () => {
  console.log(links.map((link) => Object.keys(link)[0]));
  return (
    <Theme>
      <GlobalStyle />
      <Fonts />
      MEERA
      <Router>
        {/* <Heading isHeading={true}>hello</Heading> */}
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
    </Theme>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Poppins", "Source Sans Pro", sans-serif;
  }
`;

const Container = styled.div`
  width: 100%;
  border: ${(props) => `1px solid ${props.theme.colors.onyx}`};
  background-color: ${(props) => props.theme.colors.lightBlue};
  font-family: ${(props) => props.theme.fonts[0]};
`;

const Heading = styled.h1<HeadingProps>`
  font-size: ${({ isHeading, theme: { fontSizes } }) =>
    isHeading ? fontSizes.large : fontSizes.small};
  color: ${({ theme: { colors } }) => colors.persianGreen};
`;

export default App;

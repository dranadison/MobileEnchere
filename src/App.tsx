import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Login from './pages/Login';
import Accueil from './pages/Accueil';
import NewEncheres from './pages/NewEncheres';
import Utilisateurinscription from './pages/Utilisateurinscription';
import Deconnection from './pages/Deconnection';
import Recharger from './pages/Recharger';
import ImageConverter from './pages/ImageConverter';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page />
            </Route>
            <Route exact path="/">
             <Login />
            </Route>
            <Route exact path="/login">
             <Login />
            </Route>
            <Route exact path="/accueil/:id">
             <Accueil />
            </Route>
            <Route exact path="/newEnchere">
             <NewEncheres />
            </Route>

            <Route exact path="/Deconnection">
             <Deconnection />
            </Route>

            <Route exact path="/Recharger">
             <Recharger />
            </Route>

            <Route exact path="/img/:id">
             <ImageConverter />
            </Route>


            <Route exact path="/Utilisateurinscription">
              <Utilisateurinscription />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

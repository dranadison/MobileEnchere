import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {  listSharp, addSharp, heartOutline, heartSharp, bookmarkSharp, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Liste des Encheres',
    url: "/accueil/"+localStorage.getItem('idUser'),
    iosIcon: listSharp,
    mdIcon: listSharp
  },
  {
    title: 'Ajouter une enchere',
    url: '/newEnchere',
    iosIcon: addSharp,
    mdIcon: addSharp
  },
  {
    title: 'Recharger son Compte',
    url: '/Recharger',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  },
  {
    title: 'Deconnection',
    url: '/Deconnection',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

const labels = ['ETU-1417', 'ETU-1472', 'ETU-1494', 'ETU-1434'];

const Menu: React.FC = () => {
  const location = useLocation();
  var vide=0;
  if(localStorage.getItem('idUser')==null)
  {
    return (<IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonListHeader>Encheres</IonListHeader>
        <IonNote>hi@ionicframework.com</IonNote>
      </IonContent>
    </IonMenu>
    );
  }
  else{
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Encheres</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Nos ETU</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkSharp} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );}
};

export default Menu;

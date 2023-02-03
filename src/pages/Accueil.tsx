import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ListeTableau from '../components/Accueil';
import '../components/Accueil.css';
import React from 'react';
import Menu from '../components/Menu';

const Accueil: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton />
      </IonButtons>
      <IonTitle>Nouveaux Encheres</IonTitle>
    </IonToolbar>
    </IonHeader>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">New Encheres</IonTitle>
        </IonToolbar>
      </IonHeader>
      <ListeTableau />
      </IonContent>
    </IonPage>
  );
};

export default Accueil;
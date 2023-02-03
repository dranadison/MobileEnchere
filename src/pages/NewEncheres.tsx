import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import NewEnchere from '../components/NewEnchere';
import React from 'react';

// import './Login.css';

const NewEncheres: React.FC = () => {
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
      <NewEnchere />
      </IonContent>
    </IonPage>
  
  );
};

export default NewEncheres;
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormulaireInscription from '../components/FormulaireInscription';
import React from 'react';

import './Login.css';

const Utilisateurinscription: React.FC = () => {
  return (
    <IonPage>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Inscription</IonTitle>
        </IonToolbar>
      </IonHeader>
      <FormulaireInscription />
    </IonContent>
  </IonPage>
  
  );
};

export default Utilisateurinscription;
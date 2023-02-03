import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import FormulaireLogin from '../components/FormulaireLogin';
import React from 'react';

import './Login.css';

const Login: React.FC = () => {
  return (
    <IonPage>

    <IonContent fullscreen>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <FormulaireLogin />
    </IonContent>
  </IonPage>
  
  );
};

export default Login;
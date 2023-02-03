import { IonItem, IonLabel,IonPage} from '@ionic/react';
import React from 'react';


const Login: React.FC = () => {

    const deconnection = () => { 
        localStorage.removeItem('idUser');
        window.location.href="/login";
      }; 

  return (

    <IonItem button onClick={() => deconnection()}>
            <IonLabel>Deconnection</IonLabel>
    </IonItem>
    
  );
};

export default Login;
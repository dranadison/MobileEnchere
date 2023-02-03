import './FormulaireLogin.css';
import { IonItem, IonLabel,IonCard,IonInput} from '@ionic/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

interface ContainerProps { }

const FormulaireInscription: React.FC<ContainerProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rpassword, setRPassword] = useState('');
   
  const Inscription = () => {

    useEffect(() => {
    axios.get("https://"+localStorage.getItem('lien')+"/inscription?pseudo="+username+"&mdp="+password+"&rmdp="+rpassword).then((res)=>{
    window.location.href="/login";
    }).catch((error)=>{
      alert(error);
    })
      },);
  };
  const nouveau = () => {
    window.location.href="/Utilisateurinscription";
  }; 

  return (
<>
    <IonCard>
        <h1>Inscription</h1>
        <IonLabel>Votre pseudo : </IonLabel>

        <IonInput type="text"  name="pseudo" placeholder="Entrez votre pseudo" onIonChange={e => setUsername(e.detail.value!)} ></IonInput>

        <IonLabel>Mot de passe : </IonLabel>

        <IonInput type="password"  name="mdp" placeholder="Entrez votre mot de passe" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
        
        <IonInput type="password"  name="rmdp" placeholder="Confirmer mot de passe" onIonChange={e => setRPassword(e.detail.value!)}></IonInput>

        <IonItem button onClick={() => Inscription()}>
            <IonLabel>Inscription</IonLabel>
        </IonItem>
    </IonCard>
    
        
</>
  );

};

export default FormulaireInscription;
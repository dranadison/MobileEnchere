import './FormulaireLogin.css';
import { IonItem, IonLabel,IonCard,IonInput} from '@ionic/react';
import { useState } from 'react';
import axios from 'axios';
import React from 'react';

interface ContainerProps { }

const FormulaireLogin: React.FC<ContainerProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  localStorage.setItem('lien', 'projetencherefinal-production.up.railway.app');  

  const login = () => {
    axios.get("https://"+localStorage.getItem('lien')+"/login?pseudo=Fanjava&mdp=njava").then((res)=>{
    
    var blabla= res.data ;

    // alert(blabla['data']);

    localStorage.setItem('idUser', blabla['data']); 

    // alert("user"); 
    // alert(localStorage.getItem('idUser')); 

    window.location.href="/accueil/"+localStorage.getItem('idUser');

    }).catch((error)=>{
      alert(error);
    })
  }; 
  const nouveau = () => {
    window.location.href="/Utilisateurinscription";
  }; 

  return (
<>
    <IonCard>
        <h1>Se connecter</h1>
        <IonLabel>Votre pseudo : </IonLabel>

        <IonInput type="text"  value={"Fanjava"} name="pseudo" placeholder="Entrez votre pseudo" onIonChange={e => setUsername(e.detail.value!)} ></IonInput>

        <IonLabel>Mot de passe : </IonLabel>

        <IonInput type="password" value={"njava"} name="mdp" placeholder="Entrez votre mot de passe" onIonChange={e => setPassword(e.detail.value!)}></IonInput>


        <IonItem button onClick={() => login()}>
            <IonLabel>Login</IonLabel>
        </IonItem>
    </IonCard>
    <IonItem button onClick={() => nouveau()}>
            <IonLabel>Inscription</IonLabel>
    </IonItem>
    
        
</>
  );

};

export default FormulaireLogin;
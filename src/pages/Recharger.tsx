import { IonItem, IonLabel,IonInput,IonCard, IonHeader} from '@ionic/react';
import React, { ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Menu from '../components/Menu';

interface ContainerProps { }

const Recharger: React.FC<ContainerProps> = () => {
    const [montant, setMontant] = useState('');

    useEffect(() => {
  axios.get("https://"+localStorage.getItem('lien')+"/infoUtilisateur?idUtilisatuer="+localStorage.getItem('idUser')).then((res)=>
  {
      const box = document.getElementById('Info');
      var blabla= res.data ;
      var val="<div id='Info'><h1>";
      val=val+"Pseudo:"+blabla['pseudo']+"</h1><br>";
      val=val+"<h2>Solde:"+blabla['solde']+"</h2>";
      val=val+"</div></h1>";
       if (box != undefined) {
          box.innerHTML = val;
        }
  }).catch((error)=>{
    alert(error);
  })
  },);
  
  const DemandeRecharger = () => {
    useEffect(() => {
        axios.get("https://"+localStorage.getItem('lien')+"/demandeRecharge?id="+localStorage.getItem('idUser')+"&montant="+montant).then((res)=>{
        
            const box = document.getElementById('indication');
            var val="<div id='Info'><h1>";
            val=val+"Demande de:"+montant+"Ar envoyer a l'Administrateur</h1><br>";
            val=val+"</div></h1>";

            if (box != undefined) {
                box.innerHTML = val;
            }

        }).catch((error)=>{
        alert(error);
        })
      },);
  }; 
      
        
  return (
    <IonCard>

    <IonHeader>
      <Menu />
    </IonHeader>
    
        <h1>Info</h1>
            <IonCard>
              <div id="Info"></div>
            </IonCard>

        <h1>Demande de Rechage</h1>  

            <IonInput type="number" name="montant" placeholder="Entrez recharge" onIonChange={e => setMontant(e.detail.value!)}></IonInput>

        <IonItem button onClick={() => DemandeRecharger()}>
            <IonLabel>Demande de Rechargement</IonLabel>
        </IonItem>
        
            <div id="indication"></div>

    </IonCard>
 
  );

};

export default Recharger;
import { IonItem, IonLabel,IonCard,IonInput,IonCardTitle, IonSelect, IonSelectOption} from '@ionic/react';
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

interface ContainerProps { }



const NewEnchere: React.FC<ContainerProps> = () => {
    const [descri, setDescri] = useState('');
    const [prix, setPrix] = useState('');
    const [duree, setDuree] = useState('');

    const [options, setOptions] = useState([{id:1,intitule:''}]);
  const [selectedOption, setSelectedOption] = useState(null);
  
    useEffect(() => {
      axios.get("https://"+localStorage.getItem('lien')+"/categories")
        .then((res) => {
            const blabla = res.data;
            setOptions(blabla['data']);
         
        })
        .catch((error) => {
          alert(error);
        });
  
    },);
  
    const insert = () => {
      localStorage.setItem("lientsymety","https://"+localStorage.getItem('lien')+"/nouveauenchere?idUtilisateur="+localStorage.getItem('idUser')+"&idCategorie="+selectedOption+"&descri="+descri+"&durre="+duree+"&prixminimal="+prix        );
      axios.get("https://"+localStorage.getItem('lien')+"/nouveauenchere?idUtilisateur="+localStorage.getItem('idUser')+"&idCategorie="+selectedOption+"&descri="+descri+"&durre="+duree+"&prixminimal="+prix+"").then((res)=>{      
        window.location.href="/accueil/"+localStorage.getItem('idUser');
      }).catch((error)=>{
        alert(error);
      })
      };
    
    return (
        <div>
            <>
            <IonCard>
            <h1>Nouveau</h1>

            <IonLabel>Choisir la categorie:</IonLabel>
            
            <IonSelect interface='popover' value={selectedOption} onIonChange={e => setSelectedOption(e.target.value)}>
            {options.map(option => (
                <IonSelectOption key={option.id} value={option.id}>{option.intitule}</IonSelectOption>
            ))}
            </IonSelect>
    <br></br>

            <IonLabel>Description:</IonLabel>
            <IonInput type='text' name='descri' onIonChange={e => setDescri(e.detail.value!)} ></IonInput>
            <br />
    
            <IonLabel>Duree:</IonLabel>
            <IonInput type='number' name='duree' onIonChange={e => setDuree(e.detail.value!)} ></IonInput>
            <br />
    
            <IonLabel>Prix Minimal:</IonLabel>
            <IonInput type='text' name='descri' onIonChange={e => setPrix(e.detail.value!)} ></IonInput>
            <br />
    
            <IonItem button onClick={() => insert()}><IonLabel>Nouveau</IonLabel></IonItem>
        </IonCard>
            </>
        </div>
    );

};

export default NewEnchere;
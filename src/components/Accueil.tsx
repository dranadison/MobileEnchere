import { IonItem, IonLabel,IonCard,IonInput, IonHeader} from '@ionic/react';
import React, { ChangeEvent, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import { Buffer } from 'buffer';

import { useParams } from 'react-router';


interface ContainerProps { }

const ListeTableau: React.FC<ContainerProps> = () => {

  const decode = (token: string) => {
    const decoder = Buffer.from(token.split('.')[1], 'base64').toString('utf8');
    const one = decoder.split(',');
    const two = one[0].split(':');
    const val = two[1].replace(/\"/g, '');
    return val;
  }
  

  const {id} = useParams<{id:string}>();
  useEffect(() => {
    axios.get("https://enchere-production-a764.up.railway.app/encheresMisyId?id="+decode(id)).then((res)=>
    {
        const box = document.getElementById('listeencheres');
        var blabla= res.data ;
        var val="<div id='listeencheres'><table>";
        val=val+" <tr><th>description </th>";
        val=val+" <th>Date et heure de mise en enchere</th>";
        val=val+" <th>duree de cet enchere</th>";
        val=val+" <th>Prix de depart de vente</th>";
        val=val+" <th>Categorie</th>";
        val=val+" <th>Statut de l'enchere </th>";
        val=val+" <th>dernier prix</th></tr>";
        var statut;
        if(blabla['data']==null)
        {}
        else{
        if(blabla['data']['etat']==0 || blabla['data']['etat']==1)
        {
          val=val+" <tr><td><a href='/img/"+blabla['data']['id']+"' ><strong>"+blabla['data']['descri']+"</strong></a></td>";
          val=val+" <td>"+blabla['data']['dateEnchere']+"</td>";
          val=val+" <td>"+blabla['data']['duree']+" heures</td>";
          val=val+" <td>"+blabla['data']['prixminimal']+"</td>";
          val=val+" <td>"+blabla['data']['idCategorie']+"</td>";
          if(blabla['data']['etat']==0) statut="En cours";
          if(blabla['data']['etat']==1) statut="Termine";
          val=val+" <td>"+statut+"</td>";
          val=val+" <td>"+blabla['data']['dernierMontant']+"</td></tr>";

        }
        else
        {
          for(var i=0;i<blabla['data'].length;i++)
          {
            val=val+" <tr><td><strong>"+blabla['data'][i]['descri']+"</strong></td>";
            val=val+" <td>"+blabla['data'][i]['proprio']+"</td>";
            val=val+" <td>"+blabla['data'][i]['dateEnchere']+"</td>";
            val=val+" <td>"+blabla['data'][i]['duree']+" heures</td>";
            val=val+" <td>"+blabla['data'][i]['prixminimal']+"</td>";
            val=val+" <td>"+blabla['data'][i]['idCategorie']+"</td>";
            if(blabla['data'][i]['etat']==0) statut="En cours";
            if(blabla['data'][i]['etat']==1) statut="Termine";
            val=val+" <td>"+statut+"</td>";
            val=val+" <td>"+blabla['data'][i]['dernierMontant']+"</td></tr>";

          }
        }
      }
        
        val=val+"</tr></table></div><br><br>";
        if (box != undefined) {
            box.innerHTML = val;
          }
    }).catch((error)=>{
      alert(error);
    })
  },);
      
        
  return (
    <IonCard>

    <IonHeader>
      <Menu />
    </IonHeader>
    
        <h1>Liste des encheres</h1>
            <IonCard>
              <div id="listeencheres"></div>
            </IonCard>
        
    </IonCard>
  );

};

export default ListeTableau;
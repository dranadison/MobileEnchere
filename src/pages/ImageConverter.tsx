import { IonImg } from '@ionic/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ImageConverter = () => {
  const { id } = useParams<{ id: string; }>();
  const [imagePreview, setImagePreview] = useState('');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    var file=e.target.files;
    if(file!=null){
      reader.readAsDataURL(file[0]);
      reader.onload = () => {
        setImagePreview(reader.result as string);

        var formData = new FormData();
        formData.append('lien', reader.result as string);
          axios.post("https://"+localStorage.getItem('lien')+"/photo?idEnchere="+id,formData).then((res)=>{             
            }).catch((error)=>{
            alert("error"+error);
          })
      };
    }
  };

  return (
    <>
      <input type="file" onChange={handleImageChange} />
    </>
  );
};

export default ImageConverter;

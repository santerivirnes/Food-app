import { IonButton, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';
import { useState } from 'react';

import './Page.css';

const Page = () => {

  const [restaurant, setRestaurant] = useState("")

  var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/food.json?limit=10&proximity="
  var access_token="pk.eyJ1Ijoic2FudGVyaXZpcm5lcyIsImEiOiJja2ttZm1td3cycWh0Mm9tbmJuc2R4a2R5In0.wZK_CeM71Uf-yLKUwH0Ssw";
  const findFoods = () => {
    
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      axios(url + position.coords.longitude + "%2C" + position.coords.latitude + "&access_token=" + access_token).then(({ data }) => {
        var RandomNumber = Math.floor(Math.random() * 10);
        setRestaurant(data.features[RandomNumber])
      })

    });

    

  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Foods</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="container" fullscreen>
        <IonButton onClick={() => findFoods()}>Foods</IonButton>
        <IonItem>
          {restaurant.place_name}
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Page;

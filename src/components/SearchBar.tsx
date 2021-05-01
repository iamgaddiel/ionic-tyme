import React from 'react';
import {IonText, IonItem, IonIcon, IonButton, IonInput} from '@ionic/react';
import {search} from 'ionicons/icons';

const Search = () => {
    return (
        <section className="search-prescription ion-margin-bottom">
                <form action="" method="post">
                    <IonText color="medium">Search for prescription</IonText>
                    <IonItem id="search-item" className="ion-margin-top">
                        <IonButton slot="start" type="submit" color="default" id="search-btn">
                            <IonIcon icon={search} color="dark"></IonIcon>
                        </IonButton>
                        <IonInput
                            type="search"
                            placeholder="Search..."
                            autocomplete="on"
                            autocorrect="on" 
                        />
                    </IonItem>
                </form>
            </section>
    )
}

export default Search

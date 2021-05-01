import { IonContent, IonFab, IonIcon, IonPage, IonFabButton } from '@ionic/react'
import { addOutline } from 'ionicons/icons';
import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import Prescription from '../components/Prescription';
import { CustomContext } from '../contexts/CustomContext';

// custom css
import '../styles/app.css';

const Dashboard: React.FC = () => {
    // todo: display different screen based on the presence of any prescription
    const { isTabComponent, setIsTabComponent } = useContext(CustomContext)

    useEffect(() => {
        setIsTabComponent(true)
    }, [setIsTabComponent])
    const drugs = [
        {
            "id": "1",
            "title": "Paracetamol",
            "time": "3:00AM",
            "type": "tablet",
            "is_taken": true,
            "color": "#ff5403",
            "check-color": "#fbd5c3"
        },
        {
            "id": "2",
            "title": "Coke",
            "time": "3:00AM",
            "type": "pill",
            "is_taken": false,
            "color": "#d88dbc",
            "check-color": "#f3ddeb"
        },
        {
            "id": "3",
            "title": "Caffeine",
            "time": "3:00AM",
            "type": "tablet",
            "is_taken": false,
            "color": "#f7cc3b",
            "check-color": "#e8cb6e"
        },
        {
            "id": "4",
            "title": "Caffeine",
            "time": "9:00AM",
            "type": "pill",
            "is_taken": false,
            "color": "#5aba4a",
            "check-color": "#ceeac9"
        },
    ]


    return (
        <IonPage className="homeScreen">
            <IonContent fullscreen>
                <Banner />
                {React.Children.toArray(
                    drugs.map(drug => (
                        <Prescription
                            title={drug.title}
                            time={drug.time}
                            type={drug.type}
                            color={drug.color}
                            checkColor={drug['check-color']} />
                    ))
                )}
                {/* flooting action button */}
                <IonFab vertical="bottom" horizontal="end" slot="fixed">
                    <IonFabButton
                        className="fab"
                        routerLink="/prescription/add"
                        routerDirection="forward">
                        <IonIcon icon={addOutline} size="large" />
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard

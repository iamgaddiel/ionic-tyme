import {
    IonCol,
    IonContent,
    IonIcon,
    IonFab,
    IonFabButton,
    IonInput,
    IonLabel,
    IonRow,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonImg,
    IonPage
} from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import React, { useContext, useEffect } from 'react';

import '../styles/app.css';
import MedTeam from '../images/med-team.png';
import { CustomContext } from '../contexts/CustomContext';


const AddPrescription: React.FC = () => {
    const { isTabComponent, setIsTabComponent } = useContext(CustomContext)

    useEffect(() => {
        setIsTabComponent(false)
        console.log(isTabComponent);
    }, [isTabComponent, setIsTabComponent])

    const handlePrescriptionSubmit = (e: any) => {
        e.preventDefault();
        // todo: fix this issue
        // let form: HTMLFormElement = document.querySelector('#prescriptionForm');
        // let formData: any = new FormData(form);
        // console.log(formData);
    }

    return (
        <IonPage>
            <IonContent>
                <div className="p-form-top">
                    <IonFab vertical="top" horizontal="start" slot="fixed">
                        <IonFabButton size="small"
                            routerLink="/dashboard"
                            routerDirection="back"
                            color="default"
                            id="p-back-btn">
                            <IonIcon icon={arrowBackOutline} color="light" />
                        </IonFabButton>
                    </IonFab>
                </div>

                <div className="p-form-bottom ion-padding">
                    <h3><b>Add Prescription</b></h3>

                    <form action="" onSubmit={handlePrescriptionSubmit} id="prescriptionForm">
                        <div className="form-group">
                            <IonLabel>Drug</IonLabel>
                            <IonSelect placeholder="Select a drug" value="" className="p-form-input ion-margin-top">
                                <IonSelectOption value="paracetamol">Paracetamol</IonSelectOption>
                                <IonSelectOption value="weed">Weed</IonSelectOption>
                                <IonSelectOption value="vitamin-c">Vitamin-c</IonSelectOption>
                            </IonSelect>
                        </div>

                        <div className="form-group ion-margin-top">
                            <IonLabel>Drug Form</IonLabel>
                            <IonSelect placeholder="Select a drug" value="" className="p-form-input ion-margin-top">
                                <IonSelectOption value="capsule">Capsule</IonSelectOption>
                                <IonSelectOption value="tablet">Tablet</IonSelectOption>
                            </IonSelect>
                        </div>
                        {/* Dosage */}
                        <div className="form-group ion-margin-top">
                            <IonRow className="ion-align-items-center">
                                <IonCol>
                                    <IonLabel>Dosage</IonLabel>
                                </IonCol>
                                <IonCol>
                                    <IonSelect
                                        value=""
                                        className="p-form-input ion-margin-start"
                                        okText="Confirm"
                                        placeholder="10"
                                        style={{ padding: "10px" }}>
                                        <IonSelectOption value="10">10</IonSelectOption>
                                        <IonSelectOption value="20">10</IonSelectOption>
                                        <IonSelectOption value="20">20</IonSelectOption>
                                        <IonSelectOption value="20">30</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                                <IonCol>
                                    <IonSelect
                                        value=""
                                        className="p-form-input ion-margin-start"
                                        placeholder="mg"
                                        style={{ padding: "10px" }}>
                                        <IonSelectOption value="mg">mg</IonSelectOption>
                                        <IonSelectOption value="mcg">mcg</IonSelectOption>
                                        <IonSelectOption value="g">g</IonSelectOption>
                                        <IonSelectOption value="ml">ml</IonSelectOption>
                                    </IonSelect>
                                </IonCol>
                            </IonRow>
                        </div>
                        <div className="form-group ion-margin-top">
                            <IonLabel>Quantity</IonLabel>
                            <IonInput type="number" placeholder="1" className="p-form-input ion-margin-top" />
                        </div>
                        {/* Indicator */}
                        <div className="form-group ion-margin-top">
                            <IonLabel>Indication</IonLabel>
                            <IonInput
                                type="text"
                                placeholder="illness for this drug"
                                spellCheck
                                className="p-form-input ion-margin-top" />
                        </div>
                        {/* time selection */}
                        <IonRow className="ion-margin-top">
                            {/* Time */}
                            <IonCol size="6">
                                <IonLabel>Time</IonLabel>
                                <IonInput type="time" />
                            </IonCol>
                            {/* Interval */}
                            <IonCol size="6">
                                <IonLabel>Interval</IonLabel>
                                <IonSelect className="p-form-input ion-margin-top" placeholder="6hr">
                                    <IonSelectOption value="6hr">6hr</IonSelectOption>
                                    <IonSelectOption value="8hr">8hr</IonSelectOption>
                                    <IonSelectOption value="12hr">12hr</IonSelectOption>
                                    <IonSelectOption value="12hr">12hr</IonSelectOption>
                                    <IonSelectOption value="24hr">24hr</IonSelectOption>
                                </IonSelect>
                            </IonCol>
                        </IonRow>
                        {/* Duration */}
                        <div className="form-group ion-margin-top">
                            <IonLabel>Duration</IonLabel>
                            <IonRow className="ion-justify-content-between">
                                <IonCol>
                                    <IonInput type="date" />
                                </IonCol>
                                <IonCol>
                                    <IonInput type="date" />
                                </IonCol>
                            </IonRow>
                        </div>

                        {/* submit button */}
                        <IonButton
                            type="submit"
                            id="p-form-btn"
                            fill="solid"
                            size="small"
                            expand="block"
                            className="ion-text-center ion-margin-top"
                            color="default"
                            style={{ width: "70%", margin: "auto" }}
                        >Add</IonButton>
                    </form>

                    {/* image */}
                    <div className="p-form-image">
                        <IonImg src={MedTeam}></IonImg>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    )
}

export default AddPrescription

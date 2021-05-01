import { 
    IonButton, 
    IonCard, 
    IonCardContent, 
    IonCol, 
    IonIcon, 
    IonRow, 
    IonText 
} from '@ionic/react'
import { 
    timeOutline, 
    checkboxOutline
} from 'ionicons/icons';
import React from 'react'

import Indicator from './Indicator';
import PrescriptionActionBtns from './PrescriptionActionBtns';
import PrescriptionImage from './PrescriptionImage';


const Prescription: React.FC<{
    title: string,
    time: string,
    type: string,
    color: string,
    checkColor: string
}> = ({ title, time, type, color, checkColor }) => {
    // todo: pass image prop to prescription image
    // todo: display check if prescription is checked
    // todo: toggle taken prescription check state
    // todo: pass prescriptionId(id) to PrescriptionBtn component
    return (
        <IonCard>
            <IonCardContent>
                <IonRow className="ion-justify-content-between">
                    <IonCol>
                        <Indicator color={color} />
                    </IonCol>
                    <IonCol size="5">
                        <div className="p-time">
                            <div className="p-time-top">
                                <IonText className="p-name">
                                    <h4><b>{title}</b></h4>
                                </IonText>
                                <IonText>2 pill (20mg)</IonText>
                            </div>
                            <div className="p-time-bottom">
                                <IonIcon icon={timeOutline} />
                                {time}
                            </div>
                        </div>
                    </IonCol>
                    <IonCol size="3">
                        <PrescriptionImage imageType={type} />
                    </IonCol>
                    <IonCol>
                        <div className="prescription-action">
                            {/* check button */}
                            <div className="p-action-check">
                                <IonButton style={{ background: checkColor, borderRadius: "5px" }} color="default">
                                    <IonIcon icon={checkboxOutline} id="p-check" style={{color: color}} />
                                </IonButton>
                            </div>
                            {/* edit and delete buttons */}
                            <PrescriptionActionBtns />
                        </div>
                    </IonCol>
                </IonRow>
            </IonCardContent>
        </IonCard>
    )
}


export default Prescription

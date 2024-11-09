
import React from "react";
import styles from './PanVerification.module.scss';
import Header from "./Header/Header";
import ImageCard from "./ImageCard/ImageCard";
import InputField from "./InputField/InputField";
import Button from "./Buttons/Button";

interface PanVerificationProps {
  title?: string;
  buttonText?: string;
}

const PanVerification: React.FC<PanVerificationProps> = ({
  title = 'PAN Verification',
  buttonText = 'VERIFY',
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Header title={title} description="As per regulations, it is mandatory to verify your details" />

        <div className={styles.imageContainer}>
            <div className={styles.sampleImage}>
               <ImageCard />
            </div>
        
            <div className={styles.rightContainer}>
               <InputField label="Enter 10-digit PAN" placeholder="Enter PAN Number" />
               <Button text={buttonText} />
             </div> 
       </div>
      </div>
    </div>
  );
};

export default PanVerification;


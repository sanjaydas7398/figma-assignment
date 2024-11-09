import React from "react";
import styles from './ImageCard.module.scss';
import pancardimage from "../../assets/pan-card.png";

const ImageCard: React.FC = () => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.sampleImage}>
        <img src={pancardimage} alt="Pan Card" />
      </div>
    </div>
  );
};

export default ImageCard;

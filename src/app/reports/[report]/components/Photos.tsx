"use client";

import React, { useState } from "react";
import styles from "./photos.module.scss";
import Image from "next/image";
import { Header } from "@/components/screens/header";
import { Report } from "@/types/report";

const Photos = ({ photosData }: { photosData: Report }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{photosData.subtitle}</h1>
        <h2 className={styles.subtitle}>{photosData.title}</h2>
        <p className={styles.description}>{photosData.description}</p>
        <div className={styles.gallery}>
          {photosData.gallery.map((image, index) => (
            <div
              key={index}
              className={styles.imageWrapper}
              onClick={() => openModal(image.url)}
            >
              <Image
                src={image.url}
                alt={`Photo ${index + 1}`}
                width={600}
                height={400}
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Full size"
              width={1000}
              height={700}
              className={styles.fullImage}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Photos;

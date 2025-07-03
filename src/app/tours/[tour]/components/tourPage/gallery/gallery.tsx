import React, { useState } from "react";
import Image from "next/image";
import styles from "./gallery.module.scss";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TourData } from "@/types/tour";

export const Gallery = ({ tourData }: { tourData: TourData }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (image: string) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <section className={styles.gallery}>
      <Image
        src="/images/tour/parrot.png"
        alt="parrot"
        width={420}
        height={350}
        className={styles.parrot}
      />
      <div className={styles.content}>
        <SectionTitle className={styles.title}>Фотогалерея</SectionTitle>
        <p className={styles.scrollHint}>← Листай галерею →</p>
        <div className={styles.galleryGrid}>
          {tourData.gallery?.map((image, index) => (
            <div
              key={index}
              className={styles.galleryItem}
              onClick={() => openModal(image)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 1}`}
                width={300}
                height={200}
                className={styles.galleryImage}
              />
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              ×
            </button>
            <Image
              src={modalImage}
              alt="Full image"
              width={1200}
              height={800}
              className={styles.fullImage}
            />
          </div>
        </div>
      )}
    </section>
  );
};

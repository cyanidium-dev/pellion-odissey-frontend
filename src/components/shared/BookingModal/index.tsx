"use client";

import React, { useState } from 'react';
import styles from './style.module.scss';
import { sendMessage } from '@/api/telegram';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [phoneError, setPhoneError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = phone.trim();
    const isValid = /^[\d\s+\-()]+$/.test(value);
    if (!isValid) {
      setPhoneError("Неккоретный формат номера телефона!");
      return;
    }

    setPhoneError("");
    const message = `
      <b>📬 Новая заявка!</b>\n\n<b>👤 Имя:</b> ${name}\n\n<b>📞 Телефон:</b> ${phone}\n\n<b>📝 Комментарий:</b> ${comment || "нету"}
    `;

    try {
      await sendMessage(message);
      setName('');
      setPhone('');
      setComment('');
    } catch (err) {
      console.error("Ошибка отправки сообщения:", err);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>
        <h3 className={styles.modalTitle}>Готовы к приключению?</h3>
        <form className={styles.bookingForm} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onInput={() => setPhoneError("")}
            required
          />
          {phoneError && (
            <div
              style={{
                color: "red",
                fontSize: "0.8rem",
                marginTop: "4px",
                textAlign: "left",
              }}
            >
              {phoneError}
            </div>
          )}
          <textarea
            placeholder="Какой у тебя вопрос?"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit" className={styles.submitBtn}>
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import styles from './AllTours.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { LittleCard } from '@/components/shared/LittleCard';
import {Header} from "@/components/screens/header/index";
import { sendMessage } from '@/api/telegram';


const allTours = [
  {
    type: 'group',
    year: '2025',
    season: 'Весна',
    title: 'АФРИКА: ЮАР, Ботсвана, Замбия',
    date: '26 апреля - 7 мая 2025',
    details: '12 дней – группа 13 человек',
    price: '$3 900',
    img: '/images/other/damian-patkowski-T-LfvX-7IVg-unsplash.jpg',
    tags: ['Ботсвана', 'Замбия', 'экскурсии', 'культура'],
  },
  {
    type: 'group',
    year: '2025',
    season: 'Весна',
    title: 'ПЕРУ: загадки культуры и нац. парки',
    date: '27 апреля - 10 мая 2025',
    details: '14 дней – группа 12 человек',
    price: '$4 200',
    img: '/images/other/eduardo-flores-e2Jiqrl4n_g-unsplash.jpg',
    tags: ['перу', 'южная америка', 'экскурсии', 'культура'],
  },
  {
    type: 'vip',
    year: '2025',
    season: 'Весна',
    title: 'ПЕРУ: долина инков, Мачу Пикчу',
    date: '26 апреля - 5 мая 2025',
    details: '10 дней – группа 10 человек',
    price: '$3 400',
    img: '/images/other/joe-green-nsy6zTjk5hM-unsplash.jpg',
    tags: ['Expedition', 'перу', 'южная америка', 'экскурсии', 'культура'],
  },
  {
    type: 'group',
    year: '2025',
    season: 'Лето',
    title: 'МЕКСИКА: экспедиция в мир Майя',
    date: '15 июля - 25 июля 2025',
    details: '11 дней – группа 14 человек',
    price: '$3 700',
    img: '/images/other/deshawn-wilson-NENohXmkXMM-unsplash.jpg',
    tags: ['мексика', 'северная америка', 'экскурсии', 'майя'],
  },
  {
    type: 'vip',
    year: '2025',
    season: 'Зима',
    title: 'ИСЛАНДИЯ: северное сияние и ледники',
    date: '12 февраля - 19 февраля 2025',
    details: '8 дней – группа 8 человек',
    price: '$4 900',
    img: '/images/other/harshil-gudka-pU-9BYqjhyo-unsplash.jpg',
    tags: ['исландия', 'европа', 'природа', 'северное сияние'],
  },
  {
    type: 'group',
    year: '2026',
    season: 'Лето',
    title: 'АВСТРАЛИЯ: от Сиднея до Улуру',
    date: '10 июня - 24 июня 2026',
    details: '15 дней – группа 12 человек',
    price: '$5 200',
    img: '/images/other/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg',
    tags: ['австралия', 'океания', 'природа', 'города'],
  },
];


export default function AllToursPage() {
  const [phoneError, setPhoneError] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [type, setType] = useState('group');
  const [year, setYear] = useState('2025');
  const [seasons, setSeasons] = useState({
    'Весна': false,
    'Лето': false,
    'Осень': false,
    'Зима': false
  });
  const [isSeasonDropdownOpen, setIsSeasonDropdownOpen] = useState(false);
  const dropdownRef = useRef<any>(null);

  // Handle clicks outside of dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSeasonDropdownOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Get active seasons as array
  const activeSeasons = Object.entries(seasons)
    .filter(([_, isActive]) => isActive)
    .map(([season]) => season);

  // Filter tours based on selected criteria
  const filtered = allTours.filter((tour) => {
    const matchesType = tour.type === type;
    const matchesYear = tour.year === year;
    const matchesSeason = activeSeasons.length === 0 || activeSeasons.includes(tour.season);
    return matchesType && matchesYear && matchesSeason;
  });

  // Toggle individual season
  const toggleSeason = (season: any) => {
    setSeasons((prev: any) => ({
      ...prev,
      [season]: !prev[season]
    }));
  };

  // Clear all season filters
  const clearAllSeasons = () => {
    setSeasons({
      'Весна': false,
      'Лето': false,
      'Осень': false,
      'Зима': false
    });
  };

  // Remove single season filter
  const removeSeason = (season: any) => {
    setSeasons((prev: any) => ({
      ...prev,
      [season]: false
    }));
  };

  return (
    <>
      <Header></Header>
      <main className={styles.page}>
        <section className={styles.banner}>
          <div className={styles.bannerContent}>
            <p>
              Выбирайте путешествия, наполненные лучшими экскурсиями,
              спланированными по часам с учетом лучшего времени посещения
            </p>
          </div>
        </section>

        <section className={styles.filters} id="tours">
          <div className={styles.filtersContainer}>
            {/* Tour Type Filter */}
            <div className={styles.typeFilterGroup}>
              <button
                className={`${styles.typeFilterButton} ${
                  type === "group" ? styles.active : ""
                }`}
                onClick={() => setType("group")}
              >
                ГРУППОВЫЕ ТУРЫ
              </button>
              <button
                className={`${styles.typeFilterButton} ${
                  type === "vip" ? styles.active : ""
                }`}
                onClick={() => setType("vip")}
              >
                VIP ТУРЫ
              </button>
            </div>

            {/* Year Filter */}
            <div className={styles.yearFilterGroup}>
              <button
                className={`${styles.yearButton} ${
                  year === "2025" ? styles.active : ""
                }`}
                onClick={() => setYear("2025")}
              >
                2025
              </button>
              <button
                className={`${styles.yearButton} ${
                  year === "2026" ? styles.active : ""
                }`}
                onClick={() => setYear("2026")}
              >
                2026
              </button>
            </div>

            {/* Season Filter */}
            <div className={styles.seasonFilterContainer}>
              {/* Selected season tags */}
              <div className={styles.selectedFilters}>
                {activeSeasons.map((season) => (
                  <div key={season} className={styles.filterTag}>
                    <span>{season}</span>
                    <button
                      className={styles.removeTag}
                      onClick={() => removeSeason(season)}
                    >
                      ×
                    </button>
                  </div>
                ))}

                {activeSeasons.length > 0 && (
                  <button
                    className={styles.clearAllButton}
                    onClick={clearAllSeasons}
                  >
                    Очистить все
                  </button>
                )}
              </div>

              {/* Season dropdown */}
              <div className={styles.seasonDropdown} ref={dropdownRef}>
                <button
                  className={styles.seasonDropdownToggle}
                  onClick={() => setIsSeasonDropdownOpen(!isSeasonDropdownOpen)}
                >
                  СЕЗОН{" "}
                  <span className={styles.dropdownArrow}>
                    {isSeasonDropdownOpen ? "▲" : "▼"}
                  </span>
                </button>

                {isSeasonDropdownOpen && (
                  <div className={styles.seasonDropdownMenu}>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={seasons["Весна"]}
                        onChange={() => toggleSeason("Весна")}
                      />
                      <span className={styles.checkmark}></span>
                      Весна
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={seasons["Зима"]}
                        onChange={() => toggleSeason("Зима")}
                      />
                      <span className={styles.checkmark}></span>
                      Зима
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={seasons["Лето"]}
                        onChange={() => toggleSeason("Лето")}
                      />
                      <span className={styles.checkmark}></span>
                      Лето
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={seasons["Осень"]}
                        onChange={() => toggleSeason("Осень")}
                      />
                      <span className={styles.checkmark}></span>
                      Осень
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.tours}>
          <div className={styles.toursContainer}>
            {filtered.length > 0 ? (
              filtered.map((item, index) => (
                <LittleCard key={index} item={item}></LittleCard>
              ))
            ) : (
              <p className={styles.noTours}>Нет туров по заданным фильтрам.</p>
            )}
          </div>
        </section>

        <section className={styles.customTrip} id="customTrip">
          <div className={styles.customTripContainer}>
            <div className={styles.customTripContent}>
              <h2>
                ИНДИ­ВИ­ДУА­ЛЬНЫЕ <br />
                ПУ­ТЕ­ШЕС­ТВИЯ
              </h2>
              <p>
                Хотите другие даты? Хотите изменить маршрут или заказать своё
                путешествие в любую страну?
              </p>
              <div className={styles.customTripText}>
                <p>
                  Расскажите, каким вы видите свой идеальный отпуск. А мы
                  подберём путешествие, подходящее именно вам!
                </p>
              </div>

              <form
                className={styles.customTripForm}
                onSubmit={async (e) => {
                  e.preventDefault();
                  const value = phone.trim();

                  const isValid = /^[\d\s+\-()]+$/.test(value);

                  if (!isValid) {
                    setPhoneError("Неккоретный формат номера телефона!");
                    return;
                  } else {
                    setPhoneError("");
                    const message = `
                  <b>📬 Новая заявка!</b>\n\n<b>👤 Имя:</b> ${name}\n\n<b>📞 Телефон:</b> ${phone}\n\n<b>📝 Комментарий:</b> ${
                      comment || "нету"
                    }
                  `;
                    try {
                      await sendMessage(message);
                      setName("");
                      setPhone("");
                      setComment("");
                    } catch (error) {
                      console.error("Ошибка отправки сообщения:", error);
                      return;
                    }
                  }

                  
                  
                }}
              >
                <input
                  name="name"
                  placeholder="Как вас зовут?"
                  className={styles.formInput}
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Ваш номер телефона"
                  className={styles.formInput}
                  onChange={(e) => setPhone(e.target.value)}
                  onInput={() => setPhoneError("")}
                  value={phone}
                  required
                />
                {phoneError && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "0.8rem",
                      marginTop: "4px",
                    }}
                  >
                    {phoneError}
                  </div>
                )}
                <textarea
                  name="message"
                  placeholder="Куда хотите отправиться, с кем встретиться?"
                  onChange={(e) => setComment(e.target.value)}
                  className={styles.formTextarea}
                  value={comment}
                />
                <button type="submit" className={styles.formButton}>
                  Узнать подробнее
                </button>
              </form>

              <small className={styles.formDisclaimer}>
                Отправляя данные, вы соглашаетесь с{" "}
                <a href="#" className={styles.link}>
                  политикой конфиденциальности
                </a>
              </small>
            </div>

            <div className={styles.customTripImage}>
              <Image
                src="/images/other/joe-green-nsy6zTjk5hM-unsplash.jpg"
                alt="custom trip"
                width={600}
                height={800}
                className={styles.image}
              />
            </div>
          </div>
        </section>

        {/* <div className={styles.chatButton}>
        <button className={styles.chatBubble}>
          <span className={styles.chatIcon}>💬</span>
        </button>
      </div> */}
      </main>
    </>
  );
}
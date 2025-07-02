/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import styles from "./AllTours.module.scss";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { LittleCard } from "@/components/shared/LittleCard";
import { Header } from "@/components/screens/header/index";
import { sendMessage } from "@/api/telegram";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allToursQuery } from "@/lib/queries";


export default function AllToursPage() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [phoneError, setPhoneError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [type, setType] = useState("групповые туры");
  const [year, setYear] = useState("2025");
  const [seasons, setSeasons] = useState({
    весна: false,
    лето: false,
    осень: false,
    зима: false,
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

  // Get all tours from cms
  useEffect(() => {
    const getTours = async () => {
      try {
        const data = await fetchSanityData(allToursQuery);
        setTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    getTours();
  }, []);

  if (!tours || !tours.length) return null;

  console.log(tours);

  // Get active seasons as array
  const activeSeasons = Object.entries(seasons)
    .filter(([_, isActive]) => isActive)
    .map(([season]) => season);

  // Filter tours based on selected criteria
  const filtered = tours.filter((tour) => {
    const matchesType = tour.tourType === type;
    console.log(matchesType);
    const matchesYear = tour.years?.includes(year);
    console.log(matchesYear);
    const matchesSeason =
      activeSeasons.length === 0 ||
      tour.season?.some((s: string) => activeSeasons.includes(s));
    console.log(matchesSeason);
    return matchesType && matchesYear && matchesSeason;
  });

  console.log(filtered);

  // Toggle individual season
  const toggleSeason = (season: any) => {
    setSeasons((prev: any) => ({
      ...prev,
      [season]: !prev[season],
    }));
  };

  // Clear all season filters
  const clearAllSeasons = () => {
    setSeasons({
      весна: false,
      лето: false,
      осень: false,
      зима: false,
    });
  };

  // Remove single season filter
  const removeSeason = (season: any) => {
    setSeasons((prev: any) => ({
      ...prev,
      [season]: false,
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
                  type === "vip туры" ? styles.active : ""
                }`}
                onClick={() => setType("vip туры")}
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
                        checked={!!seasons["весна"]}
                        onChange={() => toggleSeason("весна")}
                      />
                      <span className={styles.checkmark}></span>
                      Весна
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={!!seasons["зима"]}
                        onChange={() => toggleSeason("зима")}
                      />
                      <span className={styles.checkmark}></span>
                      Зима
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={!!seasons["лето"]}
                        onChange={() => toggleSeason("лето")}
                      />
                      <span className={styles.checkmark}></span>
                      Лето
                    </label>
                    <label className={styles.seasonCheckboxLabel}>
                      <input
                        type="checkbox"
                        checked={!!seasons["осень"]}
                        onChange={() => toggleSeason("осень")}
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

export interface TourData {
  id: string;
  slug: string;
  title: string;
  tourPageTitle: {
    part1: string;
    part2: string;
    part3: string;
  };
  description: string;
  price: number;
  duration: {
    days: number;
    nights: number;
  };
  group: number;
  difficulty: "Низкая" | "Средняя" | "Высокая";
  included: string[];
  program: {
    dayNumber: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
  }[];
  image: string;
  gallery: string[];
  reviews?: {
    name: string;
    instagram: string;
    text: string;
    photo: string;
  }[];
  tourDates: {
    startDate: string;
    endDate: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  hashtags?: string[];
  season: ("зима" | "весна" | "лето" | "осень")[];
  years: string[];
  tourType: "групповые туры" | "vip туры";
  isPopular?: boolean;
}

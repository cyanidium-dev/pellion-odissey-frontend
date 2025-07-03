import TourPage from "./components/tourPage/tourPage";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { tourBySlugQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/Loader";

interface TourData {
  titleTop: string;
  titleBottom: string;
  subtitle: string;
  description: string;
  mainImage: string;
  price: string;
  duration: string;
  groupSize: string;
  difficulty: string;
  includes: string[];
  schedule: {
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation?: string;
  }[];
  gallery?: string[];
  foundersImage: string;
  foundersNameLeft: string;
  foundersLeftInstagram: string;
  foundersNameRight: string;
  foundersRightInstagram: string;
  foundersAchievementsList: string[];
  reviews?: {
    name: string;
    text: string;
    instagram: string;
    avatar: string;
  }[];
  datesData: {
    month: string;
    dates: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

interface tourProps {
  tourData: TourData;
}

export default async function Page({
  params,
}: {
  params: Promise<{ tour: string }>;
}) {
  const { tour } = await params;
  const data = await fetchSanityData(tourBySlugQuery, { slug: tour });

  return (
    <Suspense fallback={<Loader />}>
      <TourPage tourData={data} />
    </Suspense>
  );
}

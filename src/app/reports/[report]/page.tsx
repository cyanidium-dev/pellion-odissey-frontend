import { Suspense } from "react";
import Loader from "@/components/shared/Loader";
import TourPage from "@/app/tours/[tour]/components/tourPage/tourPage";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { reportBySlugQuery } from "@/lib/queries";
import Photos from "./components/Photos";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ report: string }>;
}) {
  const { report } = await params;
  const data = await fetchSanityData(reportBySlugQuery, { slug: report });

  return (
    <Suspense fallback={<Loader />}>
      <Photos photosData={data} />
    </Suspense>
  );
}

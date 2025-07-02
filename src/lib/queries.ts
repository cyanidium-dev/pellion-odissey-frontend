export const allToursQuery = `
  *[_type == "tour"] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    "title": title,
    "price": price,
    "duration": {
      "days": duration.days,
      "nights": duration.nights
    },
    "group": group,
    "gallery": gallery[].asset->url,
    "tourDates": tourDates[]{
      startDate,
      endDate
    },
    "tourType": tourType,
    "season": season,
    "years": years,
    "hashtags": hashtags,
    "isPopular": isPopular
  }
`;

export const allPopularToursQuery = `
  *[_type == "tour" && isPopular == true] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    "title": title,
    "price": price,
    "duration": {
      "days": duration.days,
      "nights": duration.nights
    },
    "group": group,
    "gallery": gallery[].asset->url,
    "tourDates": tourDates[] {
      startDate,
      endDate
    },
    "tourType": tourType,
    "season": season,
    "years": years,
    "hashtags": hashtags,
    "isPopular": isPopular
  }
`;

export const tourBySlugQuery = `
  *[_type == "tour" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    "title": title,
    "price": price,
    "duration": {
      "days": duration.days,
      "nights": duration.nights
    },
    "gallery": gallery[].asset->url,
    "tourDates": tourDates[]{
      startDate,
      endDate
    },
    "tourType": tourType,
    "season": season,
    "hashtags": hashtags,
    "description": description,
    "included": included,
    "program": program[]{
      dayNumber,
      title,
      description,
      activities,
      accommodation
    },
    "faq": faq[]{
      question,
      answer
    },
    "reviews": reviews[]{
      name,
      instagram,
      text,
      "photo": photo.asset->url
    }
  }
`;

export interface Report {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  country: string;
  locations: string;
  description: string;
  gallery: {
    url: string;
    alt?: string;
  }[];
}

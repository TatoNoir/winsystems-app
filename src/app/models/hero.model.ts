export interface Hero {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    items: { name: string; resourceURI: string }[];
  };
  series: {
    available: number;
    items: { name: string; resourceURI: string }[];
  };
  stories: {
    available: number;
    items: { name: string; resourceURI: string; type: string }[];
  };
  events: {
    available: number;
    items: { name: string; resourceURI: string }[];
  };
  urls: { type: string; url: string }[];
}

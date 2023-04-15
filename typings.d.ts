export interface HeroType {
  id: number;
  attributes: {
    backgroundVideo: {
      data: Video;
    };
    createdAt: string;
    descriere: string;
    publishedAt: string;
    titlu: string;
    updatedAt: string;
  };
}

export interface VideoType {
  id: number;
  attributes: {
    name: string;
    alternativeText: string;
    caption: string;
    width: number | null;
    height: number | null;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
  };
}

export interface SimpleSectionType {
  id: number;
  attributes: {
    titlu: string;
    Descriere: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    ImagineMare: Image;
    ImagineMica: Image;
  };
}

export interface ImageType {
  attributes: any;
  id: Key | null | undefined;
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        small?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
        medium?: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface PartenersTypes {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    parteneri: {
      data: ImageType[];
    };
  };
}

export interface Review {
  id: number;
  attributes: {
    NumeUtilizator: string;
    Recenzie: string;
    EmailUtilizator: string;
    NumeClient: string;
    DataRecenzie: string;
    Rating: number;
    DescriereRecenzie: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    avatar: {
      data: ImageType;
    };
  };
}

export interface ReviewImageType {
  data: {
    id: number;
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: null | Record<string, unknown>;
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: null | Record<string, unknown>;
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface ImageSimple {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: null | Record<string, unknown>;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: null | Record<string, unknown>;
    createdAt: string;
    updatedAt: string;
  };
}

export interface qaSectionType {
  id: number;
  attributes: {
    textImagine: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Imagine: {
      data: ImageType;
    };
  };
}

export interface QuestionsType {
  id: number;
  attributes: {
    intrebare: string;
    raspuns: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

export interface ProduseEntityResponseCollection {
  __typename: string;
  data: ProduseEntity[];
}

export interface ProduseEntity {
  __typename: string;
  attributes: Produse;
}

export interface ProdusCardType {
  replace(arg0: string, arg1: string): string;
  id: number;
  attributes: {
    review_produses: any;
    Nume: string;
    Pret: number;
    PretVechi: number;
    PozeProdus: any;
    slug: string;
  };
  meta: {
    pagination: {
      total: number;
    };
  };
}

export interface UploadFileRelationResponseCollection {
  __typename: string;
  data: UploadFileEntity[];
}

export interface UploadFileEntity {
  __typename: string;
  attributes: UploadFile;
}

export interface UploadFile {
  __typename: string;
  url: string;
}

export interface CheckoutProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  qty: number;
}

export interface MetaImage {
  data: {
    attributes: {
      url: string;
    };
  };
}

export interface ComponentSharedSeoType {
  metaTitle: string | null;
  metaDescription: string | null;
  metaImage: MetaImage | null;
  keywords: string | null;
  metaRobots: string | null;
  structuredData: any | null;
  metaViewport: string | null;
}

export interface Product {
  id: number;
  attributes: {
    Nume: string;
    Pret: Float!;
    slug: string;
    PretVechi: Float;
    ScurtaDescriere: string;
    Descriere: string;
    Specificatii: string;
    CodProdus: String!;
    PozeProdus: any;
    seo: ComponentSharedSeoType[];
    review_produses: {
      reduce(arg0: (acc: any, review: any) => any, arg1: number): unknown;
      data: Review[];
    };
    category: {
      data: {
        attributes: {
          NumeCategorie: String;
        };
      };
    };
  };
}

export interface Review {
  attributes: {
    NumeUtilizator: string;
    EmailUtilizator: string;
    Rating: number;
    Recenzie: string;
    createdAt: string;
  };
}

export interface CategoryType {
  attributes: {
    NumeCategorie: String;
  };
  id: Number | InputHTMLAttributes<HTMLInputElement>;
}

export interface BrandsType {
  attributes: {
    Brand: String;
  };
  produses: ProdusCardType;
  Id: string;
}
export interface PowersType {
  attributes: {
    Putere: String;
  };
  produses: ProdusCardType;
  Id: string;
}

export interface AboutSectionOneType {
  data: {
    attributes: {
      ImageOne: ImageType;
      ImageTwo: ImageType;
      description: string;
      title: string;
      panelsNumber: number;
      projectsNumber: number;
    };
  };
}

export interface AboutSectionTwoType {
  data: {
    attributes: {
      title: string;
      descriptionOne: string;
      image: ImageType;
    };
  };
}

export interface AboutSectionThreeType {
  data: {
    attributes: {
      titlu: string;
      descriptionOne: string;
      descriptionTwo: string;
    };
  };
}

export interface AboutSectionFourType {
  data: {
    attributes: {
      title: string;
      description: string;
      imageOne: ImageType;
      imageTwo: ImageType;
    };
  };
}

export interface LinkType {
  attributes: {
    title: string;
    slug: string;
  };
}

export interface ServiceType {
  attributes: {
    title: string;
    descriptionOne: any;
    descriptionTwo: string;
    descriptionThree?: string;
    ImageOne: ImageType;
    ImageTwo: ImageType;
    ImageThree: ImageType;
  };
}

export interface ContactInfoType {
  attributes: {
    Email: string;
    Location: string;
    PhoneNrOne: string;
    PhoneNrTwo?: string;
  };
}

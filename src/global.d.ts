/// <reference types="svelte" />


interface OpeningHours {
  from: string;
  to: string;
}

interface AdditionalService {
  code: string;
  name: string;
}

interface PostOffice {
  code: string;
  name: string;
  description: {
    longitude: number;
    latitude: number;
    openingHours: {
      saturday?: Array<OpeningHours>;
      businessDays: Array<BusinessDay>;
    },
    city: string;
    houseNumber: string;
    zipCode: string;
    street: string;
  }
}

interface MailEvent {
  code: string;
  name: string;
  time: string;
  postOffice: PostOffice;
  finished: boolean;
  canceled: boolean;
}


interface Mail {
  mailInfo: {
    number: string;
    dispatchDate: string;
    dispatchCountryCode: string;
    dispatchCountryName: string;
    dispatchPostOffice: PostOffice;
    recipientCountryCode: string;
    recipientCountryName: string;
    recipientPostOffice: PostOffice;
    typeOfMailCode: string;
    typeOfMailName: string;
    format: string;
    weight: number;
    additionalServices: Array<AdditionalService>;
    finished: boolean;
    events: Array<MailEvent>;
  },
  number: string;
  mailStatus: number;
}

interface FetchedData {
  [key: string]: {
    timestamp: number;
    data: Mail;
  };
}

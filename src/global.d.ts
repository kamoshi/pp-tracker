/// <reference types="svelte" />

interface MailEvent {
  code: string;
  name: string;
  time: string;
  postOffice: {
    code: string;
    name: string;
    description: {
      longitude: number;
      latitude: number;
      openingHours: {
        businessDays: Array<{
          from: string;
          to: string;
        }>
      },
      city: string;
      houseNumber: string;
      zipCode: string;
      street: string;
    }
  }
  finished: boolean;
  canceled: boolean;
}

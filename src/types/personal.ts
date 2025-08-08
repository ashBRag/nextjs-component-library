export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  about: string;
  availability: Availability;
  profilePhoto: string;
  contact: Contact;
}

export interface Availability {
  status: string;
  type: string[];
  remote: boolean;
}

export interface Contact {
  gmail: string;
  location: string;
  timezone: string;
  preferredContact: string;
  availability: CalendarAvailability;
  messaging: Messaging;
  social: Social;
  code: Code;
}

export interface CalendarAvailability {
  calendar: string;
  meetingTypes: string[];
}

export interface Messaging {
  phone: string;
  whatsapp: string;
  discord: string;
}

export interface Social {
  linkedin: string;
  peerlist: string;
}

export interface Code {
  github: string;
  gitlab: string;
  hackerrank: string;
  leetcode: string;
}

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
  location: string;
  timezone: string;
  preferredContact: string;
  messaging: ContactType[];
  social: ContactType[];
  code: ContactType[];
  blog: ContactType[];
}

export interface ContactType {
  id: string;
  url: string;
}

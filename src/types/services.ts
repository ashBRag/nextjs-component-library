export interface Services {
  services: Service[];
}

export interface Service {
  id: string;
  name: string;
  description: string;
  available: boolean;
  rate: string;
  duration: string;
}

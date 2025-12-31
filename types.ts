
export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum TreatmentType {
  LAMINATE = 'LAMINATE',
  WHITENING = 'WHITENING',
  IMPLANT = 'IMPLANT',
  ORTHODONTICS = 'ORTHODONTICS'
}

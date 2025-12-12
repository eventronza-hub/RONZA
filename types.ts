
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  whatsapp: string;
}

export interface Package {
  name: string;
  features: string[];
  level: 'Silver' | 'Gold' | 'Diamond';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

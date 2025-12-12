
import React from 'react';
import { Camera, Music, Sparkles, Flower2, Lightbulb, UserCheck } from 'lucide-react';
import { Service, Package } from './types';

export const COLORS = {
  softPink: '#FFF0F5',
  royalGold: '#D4AF37',
  deepPink: '#E8A3B8',
  darkGold: '#B8860B',
};

export const CONTACT_NUMBERS = {
  kosha: '51321125',
  photography: '51117595',
  dj: '51117500',
};

// Helper to get a rotated WhatsApp number to balance leads
export const getRotatedWhatsAppNumber = (): string => {
  const numbers = [CONTACT_NUMBERS.kosha, CONTACT_NUMBERS.photography, CONTACT_NUMBERS.dj];
  try {
    const lastIndex = localStorage.getItem('wa_rotation_index');
    const nextIndex = lastIndex ? (parseInt(lastIndex) + 1) % numbers.length : 0;
    localStorage.setItem('wa_rotation_index', nextIndex.toString());
    return numbers[nextIndex];
  } catch (e) {
    // Fallback if localStorage is disabled
    return numbers[Math.floor(Math.random() * numbers.length)];
  }
};

export const SERVICES: Service[] = [
  {
    id: 'kosha',
    title: 'كوش أعراس',
    description: 'تصاميم كوش ملكية تجمع بين العراقة والحداثة لتكوني ملكة في ليلتك.',
    icon: <Sparkles className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.kosha,
  },
  {
    id: 'photography',
    title: 'تصوير احترافي',
    description: 'توثيق أجمل اللحظات بعدسات احترافية وتقنيات سينمائية حديثة.',
    icon: <Camera className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.photography,
  },
  {
    id: 'dj',
    title: 'دي جي وإضاءة',
    description: 'هندسة صوتية وإضاءة مسرحية تجعل الحفل ينبض بالحياة والبهجة.',
    icon: <Music className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.dj,
  },
  {
    id: 'flowers',
    title: 'تنسيق زهور',
    description: 'زهور طبيعية ومنسقة بعناية لتضفي لمسة جمالية وفواحة في القاعة.',
    icon: <Flower2 className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.kosha,
  },
  {
    id: 'lighting',
    title: 'إضاءة خاصة',
    description: 'حلول إضاءة مخصصة للمداخل والطاولات تبرز جمال أدق التفاصيل.',
    icon: <Lightbulb className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.dj,
  },
  {
    id: 'reception',
    title: 'خدمات استقبال',
    description: 'طاقم استقبال متميز لضمان راحة وخدمة ضيوفكم بأعلى المستويات.',
    icon: <UserCheck className="w-8 h-8" />,
    whatsapp: CONTACT_NUMBERS.kosha,
  },
];

export const PACKAGES: Package[] = [
  {
    name: 'الباقة الفضية',
    level: 'Silver',
    features: [
      'كوشة مودرن (مساحة متوسطة)',
      'دي جي إسلامي أو عادي',
      'إضاءة أساسية للقاعة',
      'تنسيق زهور طاولات أساسي',
      'تصوير فوتوغرافي (٢٠٠ صورة)',
    ],
  },
  {
    name: 'الباقة الذهبية',
    level: 'Gold',
    features: [
      'كوشة ملكية فاخرة',
      'دي جي + مكس صوت احترافي',
      'إضاءة LED كاملة ومتحركة',
      'تنسيق زهور طبيعي مكثف',
      'تصوير فوتوغرافي + فيديو سينمائي',
      'طاقم استقبال (٤ أشخاص)',
    ],
  },
  {
    name: 'الباقة الألماسية',
    level: 'Diamond',
    features: [
      'تصميم كوشة خاص (Special Custom Design)',
      'أحدث أنظمة الصوت والإضاءة العالمية',
      'تغطية شاملة (فيديو + فوتو + درون)',
      'تنسيق زهور ملكي شامل لكل القاعة',
      'طاقم استقبال ملكي (٦ أشخاص)',
      'مستشار تنظيم حفلات مرافق للحفل',
    ],
  },
];

export const ADDRESS = 'حولي - قطعة ١ - شارع ابن خلدون - مجمع زاوية سنتر - الدور الأول ميزانين - محل ١٧';

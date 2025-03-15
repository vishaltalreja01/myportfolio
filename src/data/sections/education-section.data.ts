import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'BS Computer Science',
      institution: 'Mehran University of Engineering & Technology',
      image: import('@/assets/logos/muet-logo.png'),
      dates: [new Date('2020.01'), new Date('2024.01')],
      description: 'Bachelor degree. Specialization in software development.',
      links: [website({ url: 'https://muet.edu.pk' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;

import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Vishal Kumar',
  role: 'ReactJs Developer',
  details: [
    { label: 'Phone', value: '+92 335 3794273', url: 'tel:3353794273' },
    { label: 'Email', value: 'vishal.kumar@kavaup.io', url: 'mailto:vishal.kumar@kavaup.io' },
    { label: 'From', value: 'Karachi, Pakistan' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+92 335 3794273' },
    { label: 'Email', value: 'vishal.kumar@kavaup.io' },
    { label: 'LinkedIn', value: '/in/vishaltalreja01', url: 'https://linkedin.com/in/vishaltalreja01' },
    { label: 'GitHub', value: '/vishaltalreja01', url: 'https://github.com/vishaltalreja01' },
    { label: 'Website', value: 'vishal-talreja.netlify.app', url: '/', fullRow: true },
  ],
  description:
    'Experienced Frontend Developer with 3+ years of expertise in ReactJs, NextJs, Tailwind CSS, Material UI, building high-performance, responsive web applications. Skilled in Agile methodologies, team collaboration, and mentoring, with a focus on web accessibility, performance optimization, and intuitive user interfaces. Committed to delivering scalable solutions that enhance user experiences and drive digital transformation',
  tags: [{ name: 'Open to work' }, { name: 'Open for freelance' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Vishal_Kumar.pdf',
  },
  links: [
    facebook({ url: 'https://facebook.com/vishaltalreja01' }),
    github({ url: 'https://github.com/vishaltalreja01' }),
    linkedin({ url: 'https://linkedin.com/in/vishaltalreja01' }),
    twitter({ url: '#' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;

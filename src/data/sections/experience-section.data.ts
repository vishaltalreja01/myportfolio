import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
// import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  nextJs,
  react,
  html,
  css,
  php,
  javascript,
  mysql,
  reactQuery,
  tailwindCss,
  // typescript,
  oracle,
  oracleApex,
  sql,
  strapi,
  materialUI,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Oracle Apex Developer',
      company: 'Pakistan State Oil (PSO)',
      image: import('@/assets/logos/pso-logo.png'),
      dates: [new Date('2025-02'), null],
      description: `
        - Building and maintaining dynamic web applications using Oracle Apex to meet requirements.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [oracleApex(), sql(), mysql(), oracle()],
      },
      links: [
        website({ url: 'https://psopk.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/psopakistan' }),
      ],
    },
    {
      role: 'React.js developer',
      company: 'Kava Up LLC',
      image: import('@/assets/logos/kavaup-logo.jpg'),
      dates: [new Date('2023-12'), null],
      description: `
        - Developed and optimized responsive web apps using React.js, Next.js, Tailwind CSS, and Material UI, achieving a 70% boost in user engagement.
        - Built dynamic forms using Formik and implemented animations with React Motion for enhanced user experiences.
        - Integrated different 3rd party services such as Chatling ai Bot, Strapi, Google captcha, iconify-icon, Google fonts to enhance application features and user interaction.
        - Proactively liaised with the desgin team and project manager to ensure efficient and responsive.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), tailwindCss(), materialUI(), reactQuery(), strapi()],
      },
      links: [
        website({ url: 'https://www.kavaup.io' }),
        linkedin({ url: 'https://www.linkedin.com/company/kava-up-llc' }),
      ],
    },
    {
      role: 'Web Developer Lead',
      company: 'RKP Center',
      image: import('@/assets/logos/rkp-logo.png'),
      dates: [new Date('2023-01'), new Date('2023-11')],
      description: `
        - Developed dynamic web applications using PHP, Laravel, and React, delivering reliable and scalable client solutions.
        - Managed full project lifecycles for 10+ projects, meeting deadlines and achieving 100% client satisfaction.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [php(), html(), css(), mysql(), react(), tailwindCss()],
      },
      links: [
        website({ url: 'https://rkp.center/' }),
        linkedin({ url: 'https://www.linkedin.com/company/rkpcenter/' }),
      ],
    },
    {
      role: 'Frontend Developer',
      company: 'Fiverr',
      image: import('@/assets/logos/fiverr-logo.jpg'),
      dates: [new Date('2022-04'), new Date('2023-02')],
      description: `
        - Delivered 40+ projects focused on e-commerce and open-source customization using React.js, HTML, CSS, JS, PHP, MySQL, TailwindCSS.
        - Helped to grow 10+ Startups of international clients which includes RootGuard, UHQ Logs, Innovatex Gaming, ADS Center, Kurate.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), tailwindCss(), html(), css(), javascript(), php(), mysql()],
      },
      links: [website({ url: 'https://fiverr.com' }), linkedin({ url: 'https://www.linkedin.com/company/fiverr-com' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;

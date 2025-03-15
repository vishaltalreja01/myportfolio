import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  astro,
  chakraUi,
  css,
  framerMotion,
  html,
  javascript,
  materialUI,
  mysql,
  nextJs,
  oracle,
  php,
  react,
  sql,
  strapi,
  supabase,
  tailwindCss,
  typescript,
  web3,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({ level: 4 }),
        nextJs({ level: 2, description: 'Currently Learning' }),
        astro({ level: 2, description: 'Currently Learning' }),
        html({ level: 5 }),
        javascript({ level: 4 }),
        typescript({ level: 3 }),
        tailwindCss({ level: 4 }),
        css({ level: 5 }),
        chakraUi({ level: 2 }),
        php({ level: 4 }),
        sql({ level: 5 }),
        mysql({ level: 4 }),
        oracle({ level: 4 }),
        supabase({ level: 3, description: 'Currently Learning' }),
        strapi({ level: 3 }),
        materialUI({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [nextJs(), astro(), supabase(), web3(), framerMotion()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English - C1' },
        { icon: 'circle-flags:pk', name: 'Urdu - native' },
        { icon: 'circle-flags:pk', name: 'Sindhi - native' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;

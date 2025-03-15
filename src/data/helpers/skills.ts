import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const oracle = createSkillFactory({
  name: 'Oracle',
  icon: 'cib:oracle', // Assign custom SVG
  iconColor: '#F80000',
  url: 'https://www.oracle.com/',
});

export const oracleApex = createSkillFactory({
  name: 'Oracle Apex',
  icon: 'cib:oracle', // Assign custom SVG
  iconColor: '#F80000',
  url: 'https://apex.oracle.com/',
});

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const html = createSkillFactory({
  name: 'HTML5',
  icon: 'simple-icons:html5',
  iconColor: '#E34F26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

export const css = createSkillFactory({
  name: 'CSS3',
  icon: 'simple-icons:css3',
  iconColor: '#61DAFB',
  url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
});

export const php = createSkillFactory({
  name: 'PHP',
  icon: 'simple-icons:php',
  iconColor: '#777BB4',
  url: 'https://www.php.net/',
});

export const javascript = createSkillFactory({
  name: 'JavaScipt',
  icon: 'simple-icons:javascript',
  iconColor: '#F7DF1E',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'logos:mysql',
  iconColor: '#4479A1',
  url: 'https://www.mysql.com/',
});

export const sql = createSkillFactory({
  name: 'SQL',
  icon: 'mdi:sql-query',
  iconColor: '#ECD53F',
  url: 'https://developer.mozilla.org/en-US/docs/Glossary/SQL',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const strapi = createSkillFactory({
  name: 'Strapi',
  icon: 'simple-icons:strapi',
  iconColor: '#4945FF',
  url: 'https://strapi.io/',
});

export const materialUI = createSkillFactory({
  name: 'Material UI',
  icon: 'simple-icons:mui',
  iconColor: '#007FFF',
  url: 'https://mui.com/material-ui/',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const web3 = createSkillFactory({
  name: 'Web3.js',
  icon: 'simple-icons:web3dotjs',
  iconColor: '#F16822',
  url: 'https://sass-lang.com/',
});

export const framerMotion = createSkillFactory({
  name: 'Framer Motion',
  icon: 'simple-icons:framer',
  iconColor: '#0055FF',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

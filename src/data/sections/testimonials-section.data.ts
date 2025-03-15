import type { TestimonialsSection } from '@/types/sections/testimonials-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';

const testimonialsSectionData = {
  config: {
    title: 'Testimonials',
    slug: 'testimonials',
    icon: 'fa6-solid:comment',
    visible: true,
  },
  testimonials: [
    {
      image: import('@/assets/testimonials/sonny-stevenson.jpeg'),
      author: 'Sonny Stevenson',
      relation: 'CEO at Kava Up LLC',
      content:
        'Mauris tincidunt at purus vehicula porta. Mauris eget mollis turpis. Sed iaculis rutrum pharetra. Vivamus risus quam, suscipit et semper ut, aliquet ut tellus. Donec quis auctor nunc.',
      links: [website({ url: 'https://rocketreach.co/sonny-stevenson-email_728678179' })],
    },
    {
      image: import('@/assets/testimonials/yashan-riley.jpeg'),
      author: 'Yashan Riley',
      relation: 'My customer for RootGuard Technologies website',
      content: 'Very Responsive and easy to work with. I was very happy with the result.',
      links: [linkedin({ url: 'https://www.linkedin.com/in/yashan-riley-itil-awsx5-9564b65a/' })],
    },
    {
      image: import('@/assets/testimonials/ritik-kumar.jpeg'),
      author: 'Ritik Kumar',
      relation: 'Founder at R.K.P Center',
      content:
        "During my three-year tenure collaborating with Vishal, I witnessed firsthand his unwavering dedication as a developer. His commitment significantly contributed to our software firm's ability to surpass dynamic goals, fostering a mutually beneficial environment for success. 💪",
      links: [linkedin({ url: 'https://www.linkedin.com/in/ritikperwani/' })],
    },
  ],
} as const satisfies ReadonlyDeep<TestimonialsSection>;

export default testimonialsSectionData;

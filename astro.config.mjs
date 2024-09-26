import { defineConfig } from 'astro/config';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight(
    {
      //ad a title to the page
      title: 'InfoSec Bootcamp',
      components: {
        Search: './src/components/Search.astro'
      },
      social: {
        github: 'https://github.com/nunhes'
      },
      customCss: [
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          slug: 'MF0486_3',
          label: 'MF0486_3',
          children: [
            { slug: 'MF0486_3/UD1', label: 'UD1' },
            { slug: 'MF0486_3/UD2', label: 'UD2' },
            { slug: 'MF0486_3/UD3', label: 'UD3' },
            { slug: 'MF0486_3/UD4', label: 'UD4' },
            { slug: 'MF0486_3/UD5', label: 'UD5' },
            { slug: 'MF0486_3/UD6', label: 'UD6' },
            { slug: 'MF0486_3/UD7', label: 'UD7' },
            { slug: 'MF0486_3/UD8', label: 'UD8' },
            { slug: 'MF0486_3/UD9', label: 'UD9' }
          ]
        },
        {
          slug: 'MF0487_3',
          label: 'MF0487_3',
          children: [
            { slug: 'MF0487_3/UD1', label: 'UD1' },
            { slug: 'MF0487_3/UD2', label: 'UD2' },
            { slug: 'MF0487_3/UD3', label: 'UD3' },
            { slug: 'MF0487_3/UD4', label: 'UD4' },
            { slug: 'MF0487_3/UD5', label: 'UD5' },
            { slug: 'MF0487_3/UD6', label: 'UD6' }
          ]
        },
        {
          slug: 'MF0488_3',
          label: 'MF0488_3',
          children: [
            { slug: 'MF0488_3/UD1', label: 'UD1' },
            { slug: 'MF0488_3/UD2', label: 'UD2' },
            { slug: 'MF0488_3/UD3', label: 'UD3' },
            { slug: 'MF0488_3/UD4', label: 'UD4' },
            { slug: 'MF0488_3/UD5', label: 'UD5' },
            { slug: 'MF0488_3/UD6', label: 'UD6' }
          ]
        },
        {
          slug: 'MF0489_3',
          label: 'MF0489_3',
          children: [
            { slug: 'MF0489_3/UD1', label: 'UD1' },
            { slug: 'MF0489_3/UD2', label: 'UD2' },
            { slug: 'MF0489_3/UD3', label: 'UD3' }
          ]
        },
        {
          slug: 'MF0490_3',
          label: 'MF0490_3',
          children: [
            { slug: 'MF0490_3/UD1', label: 'UD1' },
            { slug: 'MF0490_3/UD2', label: 'UD2' },
            { slug: 'MF0490_3/UD3', label: 'UD3' },
            { slug: 'MF0490_3/UD4', label: 'UD4' },
            { slug: 'MF0490_3/UD5', label: 'UD5' },
            { slug: 'MF0490_3/UD6', label: 'UD6' },
            { slug: 'MF0490_3/UD7', label: 'UD7' }
          ]
        },
        {
          slug: 'CTFs',
          label: 'CTFs'
        }
      ],
    }
  )]
});
import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Products',
      href: getPermalink('/products'),
    },
    {
      text: 'Gallery',
      href: getPermalink('/gallery'),
    },
    {
      text: 'Blogs',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contact Us',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '/' },
        { text: 'About', href: '/about' },
        { text: 'Products', href: '/products' },
        { text: 'Blogs', href: '/blog' },
        { text: 'Gallery', href: '/gallery' },
        { text: 'Contact Us', href: '/contact' },
      ],
    },
  ],
  addresses: [
    {
      title: 'Address',
      links: [
        { text: 'Mombasa Road, Nairobi', icon: 'world' },
        { text: 'PO Box : 26720-00504', icon: 'mail' },
        { text: 'Mon - Fri: 9:00 - 18:00', icon: 'clock' },
        { text: 'Closed on Weekends', icon: 'lock' },
      ],
    },
  ],
  contactdetails: [
    {
      title: 'Contact Us',
      links: [
        { text: '(+254) 730 785 000', icon: 'phone' },
        { text: 'info@prunusafrica.com', icon: 'mail-up' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/prunuspharma' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://www.twitter.com/prunuspharma' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/prunuspharma' },
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://bytepanda.in/favicon/favicon-32x32.png)]"></span>
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://bytepanda.in"> BytePanda Technologies</a> · All rights reserved.
  `,
};

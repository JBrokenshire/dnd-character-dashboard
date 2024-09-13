export const primaryColour = '#EC2127'

export const footerLinks = [
  {
    title: 'About',
    links: [
      { name: 'Website Information', url: '/about' },
      { name: 'GitHub Repository', url: 'https://www.github.com/JBrokenshire/dnd-website' },
      { name: 'Characters API', url: 'https://www.github.com/JBrokenshire/dnd-api' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { name: 'GitHub', url: 'https://github.com/JBrokenshire' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jared-brokenshire-771448227/' },
      { name: 'Instagram', url: 'https://www.instagram.com/jbrokenshire0/' }
    ]
  }
]

export const errorCodes = {
  '400': {
    title: '400 Bad Request',
    message: 'The request that you made was invalid.'
  },
  undefined: {
    title: '404 Not Found',
    message: 'The page you were looking for does not exist.'
  },
  '404': {
    title: '404 Not Found',
    message: 'The page you were looking for does not exist.'
  },
  '500': {
    title: '500 Internal Server Error',
    message: 'Oops! Something went wrong on our end, please try again later.'
  },
  default: {
    title: 'Something went wrong',
    message: "We aren't sure what happened there, please try again later."
  }
}

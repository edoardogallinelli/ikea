module.exports = {
  types: [
    {
      name: 'home',
      label: 'Home'
    }],
    park: [
    {
      name: 'articoli',
      label: 'Articoli',
      type: 'articoli-pages', 
      parkedId: 'lista-articoli',
      published: true,
      slug: '/lista-articoli'
    },
    {
      name: 'apostrophe-blog',
      label: 'Blog Page',
      type: 'apostrophe-blog-page', 
      parkedId: 'blog-page',
      published: true,
      slug: '/blog-page'
    },
    {
      name: 'salotti',
      label: 'Salotti',
      type: 'salotti-pages', 
      parkedId: 'lista-salotti',
      published: true,
      slug: '/lista-salotti'
    }
  ]
};

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
      name: 'salotti',
      label: 'Salotti',
      type: 'salotti-pages', 
      parkedId: 'lista-salotti',
      published: true,
      slug: '/lista-salotti'
    }
  ]
};

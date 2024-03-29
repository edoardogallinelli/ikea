module.exports = {
    extend: 'apostrophe-pieces',
    name: 'salotto',
    label: 'Salotto',
    pluralLabel: 'Salotti',
    addFields: [
        {
            name: 'nome',
            label: 'Nome Salotto',
            type: 'string',
            required: true
        },
        {
            name: '_articoli',
            label: 'Articoli collegati',
            // This is optional since the name of our join matches the name of the
          
            withType: 'articolo',
            type: 'joinByArray',
            filters: {
              // Fetch just enough information
              projection: {
                title: 1,
                slug: 1,
                type: 1,
                tags: 1
              }
            }
          }, 
          {
            name: 'image',
            label: 'Immagine',
            type: 'singleton',
            widgetType: 'apostrophe-images',
          },
    ]
};
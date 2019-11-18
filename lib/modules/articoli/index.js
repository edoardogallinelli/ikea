module.exports = {
    extend: 'apostrophe-pieces',
    name: 'articolo',
    label: 'Articolo',
    pluralLabel: 'Articoli',
    addFields: [
      {
        name: 'nome',
        label: 'Nome Articolo',
        type: 'string',
        required: true
      },
      {
        name: 'descrizione',
        label: 'Descrizione',
        type: 'area',
        options: {
          widgets: {
            'apostrophe-rich-text': {
              toolbar: [ 'Bold', 'Italic', 'Link', 'Unlink' ]
            }
          }
        }
      },
      {
        name: 'thumbnail',
        label: 'Thumbnail',
        type: 'singleton',
        widgetType: 'apostrophe-images',
        options: {
          limit: 1,
          minSize: [ 200, 200 ],
          aspectRatio: [ 1, 1 ]
        }
      },
      {
        
        name: '_salotti',
        type: 'joinByArrayReverse',
        // Optional since the name of ou join matches the name of the type, plus an s
        withType: 'salotto', 
        reverseOf: '_salotti'
      }
    ]
  };
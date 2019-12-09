module.exports = {
    extend: 'apostrophe-pieces',
    name: 'camere',
    label: 'Camera',
    pluralLabel: 'Camere',
    addFields: [
      {
        name: 'nomeCamera',
        label: 'Nome della camera',
        type: 'string',
        required: true
      },
      {
        name: 'descrizione',
        label: 'Descrizione',
        type: 'string',
        required: true
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
    ]
  };
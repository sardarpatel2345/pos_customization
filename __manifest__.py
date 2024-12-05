{
    'name': 'Custom Invoice',
    'version': '17.0',
    'author': 'Jay',
    'category': 'Point of sale',
    'depends': ['point_of_sale'],
    'data': [
        'data/point_of_sale_data.xml',
    ],
    'assets': {
        'point_of_sale._assets_pos': [
            'custom_pos/static/src/css/custom_pos.css',
            'custom_pos/static/src/js/custom_pos.js',
            'custom_pos/static/src/xml/pos.xml',
        ],
        'web.assets_backend': [
            'custom_pos/static/src/scss/custom_pos.scss',
            'custom_pos/static/src/js/chat.js'
        ]
    },
    'installable': True,
    'application': False,
}

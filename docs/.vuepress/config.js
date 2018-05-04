module.exports = {
    title: 'Chattic Documentation',
    description: "A documentation for chattic app",
    themeConfig:{
        nav: [
            { text: 'Specs', link: '/specs/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar: [
            {
              title: 'Specs',
              children: [
                '/specs/'
              ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ]
    }
}
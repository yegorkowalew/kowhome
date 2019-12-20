module.exports = {
    title: "Kowalew Home Site",
    markdown: {
        externalLinks: {
            target: '_self',
            rel: ''
        }
     },
    themeConfig: {
        search: false,
        searchMaxSuggestions: 10,
        nav: [
            { text: 'Home Assistant', link: 'http://ha.kowhome.pp.ua', target:"_blank", rel:'' },
            { text: 'Transmission', link: 'http://tr.kowhome.pp.ua', target:'_self', rel:'' },
          ]
      }
}
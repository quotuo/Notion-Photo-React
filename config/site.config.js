// Before you make changes to this document, please read https://docs.okis.dev/docs/notion-photo-react#change-the-site-configuration

module.exports = {
    global: {
        site: {
            name: '世界上只有一种英雄主义，那就是在看清生活的真相之后，依然热爱生活。',
            description: '',
            url: 'https://luyanshi.eu.org',
            author: '陆焉识',
            banner_img: `https://cdn.harrly.com/project/GitHub/Notion-Photo-React/img/Notion-Photo-React.Banner.png`,
            nav: [{
                    name: 'Home',
                    url: '/',
                    external: false,
                    position: 'left',
                },
                {
                    name: 'Blog',
                    url: 'https://yousi.eu.org',
                    external: true,
                    position: 'right',
                },
            ],
            language: [
                { name: '🇬🇧 English', code: 'en-GB' },
                { name: '🇨🇳 简体中文', code: 'zh-CN' },
                { name: '🇭🇰 繁體中文', code: 'zh-HK' },
            ],
            font: '',
        },
        content: {
            header: {
                description: ``,
            },
            license: {
                name: 'CC BY-NC-SA 4.0',
                url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
            },
            footer: {
                copyright: 'Copyright © 2023 Luyanshi. All rights reserved.',
            },
        },
        analytics: {
            umami: {
                url: 'https://umami.harisfox.com/script.js',
                website_id: '4c785146-016d-48b8-81fe-85172c82b37d',
            },
        },
    },
};

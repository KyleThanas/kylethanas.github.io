module.exports = {
    title: 'KyleThanas',
    description: 'KyleThanas的分享',
    dest: '../../dist', //指定 vuepress build 的输出目录
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '吐槽',
                link: 'https://support.qq.com/product/65891'
            },
        ]
    },
    plugins: [
        [
            'vuepress-plugin-yuque', {
                repoUrl: 'https://www.yuque.com/kylethanas/share',
                authToken: 'u1XU3a9AAwSEDtNjHXOXZ5ry0xlXwbHlxL49zn9a',
                html: true,
                home: {
                    actionText: '开始阅读 →',
                    features: [{
                            title: '前端知识',
                            details: '这里面包括一些前端的个人技术总结'
                        },
                        {
                            title: '读书',
                            details: '这是作者看过的书，并且把书中一些精华总结、整理'
                        },
                        {
                            title: '杂学',
                            details: '这是个人兴趣的学习总结'
                        }
                    ]
                }
            }
        ]
    ]
}
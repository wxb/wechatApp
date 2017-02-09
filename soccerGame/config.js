
const JUHE_DOMAIN = 'juhe.cn';

var config = {
    API_URL: {
        footballApi: `https://op.${JUHE_DOMAIN}/onebox/football/league`
    },
    API_KEY: {
        footballKey: '70ce6c71bf84b4d2373496e3cc42c932'
    },
    LEAGUE: ['中超','英超','西甲','德甲','意甲','法甲'],
    ICON_MAP: {
        csl: {
            '广州恒大':'hengda',
            '山东鲁能':'luneng',
        }
    }
}

module.exports = config;
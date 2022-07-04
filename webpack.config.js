const { join, resolve } = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': join(__dirname, '../'),
            assets: join(__dirname, '../src/assets'),
            components: join(__dirname, '../src/components'),
        },
    },
};

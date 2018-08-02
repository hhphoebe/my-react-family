const path = require('path');

module.exports = {

    /*这里是入口*/
    entry: path.join(__dirname, 'src/index.js'),

    /*这里是输出文件的出口，输出文件到dist文件夹，输出文件名为bundle.js*/
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'main.js'
    },

    /*src文件夹下面的以.js结尾的文件，要使用babel解析*/
    /*cacheDirectory是用来缓存编译结果，下次编译加速*/
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist')
    }
};
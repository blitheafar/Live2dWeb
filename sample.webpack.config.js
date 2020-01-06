
var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: 'development',

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: './Sample/TypeScript/Demo/src/main.ts',

    output: {
        filename: 'index.min.js',
        path: path.join(__dirname, './Sample/TypeScript/Demo/dist')
    },

    module: {
        rules: [
            {
                // 拡張子 .ts の場合
                test: /\.ts$/,

                // TypeScriptをコンパイルする
                use: 'ts-loader'
            }
        ]
    },
    plugins:[
        new UglifyJsPlugin()
    ],

    // ソースマップを含めた状態で出力
    devtool: 'inline-source-map',

    // import 文で .ts ファイルを解決するため
    resolve: {
        extensions: [
            '.ts',
        ]
    }
}
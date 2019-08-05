var path =require('path');
var settings =require('./settings');

module.exports = {
    entry : {
        App : settings.jsDir + "main.js"
    },
    output : {
        path : path.resolve(__dirname, settings.jsDir),
        filename : 'main-bundle.js'
    },
    module : {
        rules : [
           {
            test : /\.js$/,
            exclude : /node_modules/,
            use : {
              loader : 'babel-loader',
              options : {
                  presets : ['@babel/preset-env']
              }
            }
           }
        ]
    },
    mode : 'development'
}

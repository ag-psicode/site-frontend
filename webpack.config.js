const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Is the current build a development build
const IS_DEV = (process.env.NODE_ENV === 'dev');

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

/**
 * Webpack Configuration
 */
module.exports = {
    entry: {
        home: path.join(dirApp, 'index'),
        orcamento: path.join(dirApp, 'orcamento'),
        portfolio: path.join(dirApp, 'portfolio'),
        servicos: path.join(dirApp, 'servicos'),
        // vendor: [
        //     'lodash'
        // ],
    },
    resolve: {
        modules: [
            dirNode,
            dirApp,
            dirAssets
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            IS_DEV: IS_DEV
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'pages/index.ejs'),
            title: 'Psicode',
            chunks: ['home'],
            filename: "index.html"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'pages/orcamento.ejs'),
            title: 'Psicode',
            chunks: ['orcamento'],
            filename: "orcamento.html",
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'pages/portfolio.ejs'),
            title: 'Psicode',
            chunks: ['portfolio'],
            filename: "portfolio.html"
        }),

        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'pages/servicos.ejs'),
            title: 'Psicode',
            chunks: ['servicos'],
            filename: "servicos.html"
        })
    ],
    module: {
        rules: [
            // BABEL
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true
                }
            },

            // STYLES
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                ]
            },

            // CSS / SASS
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: IS_DEV
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: IS_DEV,
                            includePaths: [dirAssets]
                        }
                    }
                ]
            },

            // IMAGES
            {
                test: /\.(jpe?g|png|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    }
};

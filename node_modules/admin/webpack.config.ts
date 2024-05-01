

import path from 'path';
import webpack from 'webpack';
import {BuildMode, BuildPaths, BuildPlatform, buildWebpack, BuildOptions} from '@packages/build-config'
import packageJson from './package.json'
import Dotenv from 'dotenv-webpack';
interface EnvVariables {
    mode?: BuildMode;
    analyzer?: boolean;
    port?: number;
    platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'build'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        public: path.resolve(__dirname, 'public'),
        src: path.resolve(__dirname, 'src'),
    }

    const config: webpack.Configuration = buildWebpack({
        port: env.port ?? 3002,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer,
        platform: env.platform ?? 'desktop'
    })
    config.plugins!.push(
        new Dotenv(), // npm i --save-dev @types/dotenv-webpack
    );
    config.plugins.push(new webpack.container.ModuleFederationPlugin({
        name: 'admin',
        filename: 'remoteEntry.js',
        exposes: {
            './Router': './src/router/Router.tsx',
        },
        shared: {
            ...packageJson.dependencies,
            react: {
                eager: true,
                requiredVersion: packageJson.dependencies['react'],
          //   requiredVersion: '18.2.0',
                 singleton: true,
            },
            'react-router-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-router-dom'],
            //   requiredVersion: '18.2.0',
                 singleton: true,
            },
            'react-dom': {
                eager: true,
                requiredVersion: packageJson.dependencies['react-dom'],
            //  requiredVersion: '18.2.0',
                 singleton: true,
            },
        },
    }))

    return config;
}
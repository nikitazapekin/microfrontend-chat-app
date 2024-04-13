/*import {BuildOptions} from "../types/types";
import {removeDataTestIdBabelPlugin} from "./removeDataTestIdBabelPlugin";

export function buildBabelLoader({mode}: BuildOptions) {
    const isDev = mode === 'development';
    const isProd= mode === 'production';

    const plugins = [];

    if(isProd) {
        plugins.push([
            removeDataTestIdBabelPlugin,
            {
                props: ['data-testid']
            }
        ])
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ]
                ],
                plugins: plugins.length ? plugins : undefined,
            }
        }
    }
} */


import { BuildOptions } from "../types/types";
import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";
import { PluginItem } from '@babel/core';

interface DataTestIdPluginOptions {
    props: string[];
}

export function buildBabelLoader({ mode }: BuildOptions) {
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: (() => PluginItem) | { props: string[] }[] = [];

    if (isProd) {
        plugins.push([
            removeDataTestIdBabelPlugin,
            {
                props: ['data-testid']
            }
        ]);
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: [
                    '@babel/preset-env',
                    "@babel/preset-typescript",
                    [
                        "@babel/preset-react",
                        {
                            runtime: isDev ? 'automatic' : 'classic',
                        }
                    ]
                ],
                plugins: plugins.length ? plugins : undefined,
            }
        }
    };
}

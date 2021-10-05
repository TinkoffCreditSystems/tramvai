import path from 'path';
import webpack from 'webpack';
import type Config from 'webpack-chain';
import ExtractCssPlugin from 'mini-css-extract-plugin';

import type { ConfigManager } from '../../../../config/configManager';
import type { ApplicationConfigEntry } from '../../../../typings/configEntry/application';

import common from '../../common/main';
import files from '../../blocks/filesServer';
import ts from '../../blocks/ts';
import js from '../../blocks/js';
import css from '../../blocks/css';
import apiResolve from '../../blocks/apiResolve';
import { serverInline } from '../../blocks/serverInline';
import { browserslistConfigResolve } from '../../blocks/browserslistConfig';

// eslint-disable-next-line import/no-default-export
export default (configManager: ConfigManager<ApplicationConfigEntry>) => (config: Config) => {
  const { options: { server = '', outputServer = '' } = {} } = configManager.build;

  config.name('server');

  config.batch(common(configManager));
  config.batch(files(configManager));
  config.batch(apiResolve(configManager));

  config.target('node');
  config.output.libraryTarget('commonjs2');

  config.node.set('__dirname', false);

  config
    .entry('server')
    .add([path.resolve(__dirname, './global-agent'), path.resolve(configManager.rootDir, server)])
    .end()
    .resolve.extensions.merge(['.node']);

  config.output
    .path(configManager.getBuildPath())
    .publicPath(path.posix.join('/', outputServer))
    .filename('server.js');

  config.optimization.splitChunks(false).removeAvailableModules(false);

  config.module
    .rule('less')
    .test(/\.less$/)
    .use('ignore')
    .loader('null-loader');

  config.plugin('define').tap((args) => [
    {
      ...args[0],
      'global.GENTLY': false,
      'process.env.MODULE': true, // mimic module to bundle svg's inside js and prevent errors from iconLoader
      'process.env.BROWSER': false,
      'process.env.SERVER': true,
    },
  ]);

  config.plugin('extract-css').use(ExtractCssPlugin, [
    {
      filename: 'server.[contenthash].css',
      ignoreOrder: true,
      experimentalUseImportModule: !!configManager.experiments.minicss?.useImportModule,
    },
  ]);

  config.plugin('limit-chunk').use(webpack.optimize.LimitChunkCountPlugin, [
    {
      maxChunks: 1,
    },
  ]);

  config
    .batch(js(configManager))
    .batch(ts(configManager))
    .batch(serverInline(configManager))
    .batch(browserslistConfigResolve(configManager))
    .batch(css(configManager));

  return config;
};

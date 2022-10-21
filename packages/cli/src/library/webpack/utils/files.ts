import type Config from 'webpack-chain';
import type { ConfigManager } from '../../../config/configManager';
import { addTranspilerLoader, getTranspilerConfig } from './transpiler';

export const addSvgrLoader = (
  configManager: ConfigManager,
  config: Config,
  svgoOptions: Record<string, any>
) => {
  const transpilerConfig = getTranspilerConfig(configManager);
  // based on https://github.com/facebook/create-react-app/issues/11213#issuecomment-883466601
  const svgrConfig = config.module
    .rule('svgr')
    .test(/\.svg$/)
    // @todo: `issuer: /\.tsx?$/` нужен или нет?
    .set('resourceQuery', /react/);

  addTranspilerLoader(configManager, svgrConfig.use('svgr-transpiler'), {
    ...transpilerConfig,
    typescript: true,
  });

  svgrConfig.use('svgr').loader('@svgr/webpack').options({ babel: false, svgo: svgoOptions }).end();
};

export const getSvgoOptions = (configManager: ConfigManager) => {
  return {
    plugins: configManager.build?.configurations?.svgo?.plugins ?? [
      {
        cleanupIDs: false,
      },
      {
        collapseGroups: false,
      },
    ],
  };
};
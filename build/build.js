import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from 'webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build(),
  externals: externals.base({
    'next-fetch2base64': 'next-fetch2base64'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});

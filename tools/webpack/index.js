import loaders from './loaders';
import helpers from './helpers';

import webpack from 'webpack';
import _ from 'lodash';

class WebpackConf {

    constructor(config) {
      this.userConfig = config;
    }

    config = {
      output: {
        path: 'dist',
        filename: 'bundle.js'
      },
      module: {
        loaders: []
      },
      node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        fs: 'empty'
      },
      plugins: []
    }

    postProcess: []

    addLoaders(loaders) {
      this.config.module.loaders = this.config.module.loaders.concat(loaders);
      return this;
    }

    addPlugins(plugins) {
      this.config.plugins = this.config.plugins.concat(plugins);
      return this;
    }

    iNeedES7() {
      return this.addLoaders(loaders.ES7);
    }

    iNeedSCSS() {
      return this.addLoaders(loaders.SCSS);
    }

    iNeedReact() {
      return this.addLoaders(loaders.reactES7);
    }

    iNeedBootstrap() {
      return this.addLoaders(loaders.bootstrap);
    }

    iNeedImages() {
      return this.addLoaders(loaders.images);
    }

    iNeedInlineSVGs() {
      return this.addLoaders(loaders.inlineSVG);
    }

    iNeedHotDevServer() {
      this.postProcess.push(helpers.hotDevServer);
    }

    getConfig() {
      let conf = _.merge(this.config, this.userConfig);
      conf.plugins.push(new webpack.NoErrorsPlugin());

      _.each(this.postProcess, helper => {
        conf = helper(conf);
      });

      return conf;
    }

}

export default WebpackConf;

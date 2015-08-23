import _ from 'lodash';
import loaders from './loaders';
import webpack from 'webpack';

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
      plugins: [
        new webpack.NoErrorsPlugin()
      ]
    }

    iNeedES7() {
      this.config.module.loaders.concat(loaders.ES7);
      return this;
    }

    iNeedSCSS() {
      this.config.module.loaders.concat(loaders.SCSS);
      return this;
    }

    iNeedReact() {
      this.config.module.loaders.concat(loaders.reactES7);
      return this;
    }

    iNeedBootstrap() {
      this.config.module.loaders.concat(loaders.bootstrap);
      return this;
    }

    getConfig() {
       return _.merge(this.config, this.userConfig);
    }

}

export default WebpackConf;

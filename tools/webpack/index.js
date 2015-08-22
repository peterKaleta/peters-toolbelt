import _ from 'lodash';
import webpack from 'webpack';
import loaders from './loaders';

class WebpackConf {

    constructor(config) {
      this.userConfig = config;
    }

    config = {
      output: {
        path: 'dist',
        filename: 'bundle.js'
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
      this.config.loaders.concat(loaders.ES7);
      return this;
    }

    iNeedSCSS() {
      this.config.loaders.concat(loaders.SCSS);
      return this;
    }

    iNeedReact() {
      this.config.loaders.concat(loaders.reactES7);
      return this;
    }

    iNeedBootstrap() {
      this.config.loaders.concat(loaders.bootstrap);
      return this;
    }

    getConfig() {
       return _.merge(this.config, this.userConfig);
    }

}

export default WebpackConf;

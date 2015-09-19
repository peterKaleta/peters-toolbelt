import {extend} from 'lodash';

export default function styleDefaults(defaultStyles = {}) {

  return function (DecoratedComponent) {

    return class {
      render() {
          let { styles = {}, ...restProps } = this.props;
          styles = extend({}, defaultStyles, styles);
          return <DecoratedComponent {...restProps} styles={styles} />;
       }
    };

  };

}

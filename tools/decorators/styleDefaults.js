import {extend} from 'lodash';
import {Component} from 'react';

export default function styleDefaults(defaultStyles = {}) {

  return function (DecoratedComponent) {
    return class StyledComponent extends Component {

      render() {

          let { styles = {}, ...restProps } = this.props;
          styles = extend({}, defaultStyles, styles);

          return <Component {...restProps} styles={styles} />;

       }

    };
  };


}

import {extend} from 'lodash';
import React from 'react';

export default function styleDefaults(defaultStyles = {}) {

  return function (DecoratedComponent) {
    return class StyledComponent extends React.Component {

      render() {

          let { styles = {}, ...restProps } = this.props;
          styles = extend({}, defaultStyles, styles);

          return <DecoratedComponent {...restProps} styles={styles} />;

       }

    };
  };


}

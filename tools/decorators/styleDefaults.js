import {extend} from 'lodash';
import React from 'react';

export default function styleDefaults(Component, defaultStyles = {}) {

  return class StyledComponent extends React.Component {

    render() {

        let { styles = {}, ...restProps } = this.props;
        styles = extend({}, defaultStyles, styles);

        return <Component {...restProps} styles={styles} />;

     }

  };

}

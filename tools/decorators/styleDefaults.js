import {extend} from 'lodash';

export default function(styles = {}) {
  return function (Component) {
    Component.defaultProps = extend({}, {styles}, Component.defaultProps);
    return Component;
  };
}

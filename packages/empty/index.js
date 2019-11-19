import Empty from './src/index.jsx';

/* istanbul ignore next */
Empty.install = function(Vue) {
  Vue.component(Empty.name, Empty);
};

export default Empty;

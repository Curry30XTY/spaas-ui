import Affix from './src/index.jsx';

/* istanbul ignore next */
Affix.install = function(Vue) {
  Vue.component(Affix.name, Affix);
};

export default Affix;

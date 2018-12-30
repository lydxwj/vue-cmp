import VButton from './packages/button/index.js';
import VPhoto from './packages/photo/index.js';

const components = [
  VButton,
  VPhoto
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VButton,
  VPhoto
}
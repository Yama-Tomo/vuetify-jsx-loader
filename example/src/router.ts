import VueRouter from 'vue-router';
import SimpleTsx from './components/ts/simple_tsx';
import WithDecoratorTsx from './components/ts/with_decorator_tsx';
import SimpleTsxVue from './components/ts/simple_vue.vue';
import WithDecoratorTsxVue from './components/ts/with_decorator_vue.vue';
import SimpleJsx from './components/js/simple.jsx';
import SimpleJsxVue from './components/js/simple.vue';
import TemplateVue from './components/ts/template.vue';

export default () => new VueRouter({
  routes: [
    { path: '/tsx-simple', component: SimpleTsx },
    { path: '/tsx-with-decorator', component: WithDecoratorTsx },
    { path: '/tsx-simple-vue', component: SimpleTsxVue },
    { path: '/tsx-with-decorator-vue', component: WithDecoratorTsxVue },
    { path: '/jsx-simple', component: SimpleJsx },
    { path: '/jsx-simple-vue', component: SimpleJsxVue },
    { path: '/template-vue', component: TemplateVue },
  ]
});

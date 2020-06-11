import Vue from "vue";
import Button from "./button";
import Icon from "./icon";
import ButtonGroup from "./button-group";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);
Vue.component("g-button-group", ButtonGroup);

new Vue({
  el: "#app",
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
  },
});

//单元测试
import chai from "chai";
import spies from 'chai-spies'
chai.use(spies)

const expect = chai.expect;
{
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi",
    },
  });
  vm.$mount();
  let useElement = vm.$el.querySelector('use');
  let href = useElement.getAttribute('xlink:href');
  expect(href).to.eq("#i-shezhi");
  vm.$el.remove();
  vm.$destroy();
}
{
  const Constructor = Vue.extend(Button);
  const button = new Constructor({
    propsData: {
      icon: "shezhi",
      loading: true,
    },
  });
  button.$mount();
  let useElement = button.$el.querySelector("use");
  let href = useElement.getAttribute("xlink:href");
  expect(href).to.eq("#i-jiazaizhong");
  button.$el.remove()
  button.$destroy()
}
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'shezhi'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
//   }
// {
//   const div = document.createElement("div");
//   document.body.appendChild(div);
//   const Constructor = Vue.extend(Button);
//   const vm = new Constructor({
//     propsData: {
//       icon: "shezhi",
//       iconPosition: "right",
//     },
//   });
//   vm.$mount(div);
//   let svg = vm.$el.querySelector("svg");
//   let { order } = window.getComputedStyle(svg);
//   expect(order).to.eq("2");
//   vm.$el.remove();
//   vm.$destroy();
// }
{
  //mock
  const Constructor = Vue.extend(Button);
  const vm = new Constructor({
    propsData: {
      icon: "shezhi",
    },
  });
  vm.$mount();
  let spy = chai.spy(function(){})
  vm.$on('click',spy)
  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()
}


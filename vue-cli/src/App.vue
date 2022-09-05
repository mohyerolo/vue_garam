<template>
  <!-- template root는 하나의 엘리먼트만 있어야 됨 -->
  <div>
    <app-header 
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
// new Vue({
//     data: {

//     }
// })
/**이렇게만 했어도 됐는데 .vue에서는 컴포넌트를 재사용할 가능성이 높음.
 * 그러면 여러 개의 컴포넌트에서 동일한 값을 공유, 참조하면 안 되기 때문에
 * data만 쓰는 게 아닌 새 객체를 반환하는 형식으로 진행해야 됨.
 */
import AppHeader from "./components/AppHeader.vue";

export default {
  data: function () {
    return {
      str: "Header",
    };
  },
  components: {
    "app-header": AppHeader,
  },
  methods: {
    renewStr: function() {
        this.str = 'hi'
    }
  }
};
</script>

<style></style>
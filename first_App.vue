<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- <hello-world></hello-world>,
     <HelloWorld></HelloWorld>이것과 같음.
     컴포넌트의 세가지 명명법 -->

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  // 인스턴스 옴션 속설 or 컴포넌트 옵션 속성
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
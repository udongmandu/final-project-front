<template>
  <div id="app">
    <Header />
    <div class="app-wrapper">
      <Sidebar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.app-wrapper {
  display: flex;
  flex: 1;
  height: calc(100vh - 60px); /* Header 제외한 높이 */
  overflow: hidden;
}

.content {
  flex: 1;
  overflow-y: auto; /* router-view만 스크롤 가능 */
  padding: 20px;
}
</style>

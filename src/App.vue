<template>
  <div id="app">
    <Header />
    <MainView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/header/Header.vue';
import MainView from './components/mainview/MainView.vue';
import Footer from './components/footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    MainView,
    Footer
  }
}
</script>

<style lang="scss">
html, body, h1, h2, h3, h4, h5, h6, p, pre, dl, dd, ol, ul, menu, form, table, th, td, caption {
  margin: 0;
  padding: 0;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden !important;
  cursor: default;
  background: #eee;
}

html {
  color: #111;
  font-family: "HelveticaNeue","Helvetica Neue","sans-serif",Arial;
  font-size: 8px;
}

body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: default;
  background: #eee;
  font-size: 12px;
  line-height: 20px;
  color: #111;
}

a {
  color: #39d;
  text-decoration: none;
  cursor: pointer;
}

#app {
  width: 100%;
  height: 100%;
  min-width: 1024px;
  min-height: 300px;
  background-color: #eee;
  overflow: hidden;
}
button, select {
  text-transform: none;
  outline: 0;
  cursor: pointer;
}
button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
  border: 0;
}
.btn {
  position: relative;
  font-size: 11px;
  line-height: 1em;
  vertical-align: middle;
  display: block;
  width: 100%;
  padding: 6.5px 8px;
  background: #e5e5e5;
  color: #111;
  border-radius: 2px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}

.v-table {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  thead {
    tr {
      height: 25px !important;
      padding: 0 8px !important;
      &.v-datatable__progress {
        height: auto !important;
      }
      th {
        padding: 0 8px !important;
      }
    }
  }
  tbody {
    td {
      height: 25px !important;
      font-size: 12px !important;
      padding: 0 8px !important;
    }
  }
}
// Custom scrollbars

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

::-webkit-scrollbar-thumb {
  min-height: 40px;
  background: rgba(120, 122, 147, 0.5); // 'slate gray' with opacity 0.5
}

</style>

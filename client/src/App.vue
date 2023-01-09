<template>
  <img alt="Faker.js logo" style="width: 100px; height: 100px" src="./assets/favicon.png" />
  <div>
    <h1>Ipsum Generator</h1>
    <p>No-ads Online Lorem Ipsum Generator</p>
  </div>
  <div>
    <b-button>Button</b-button>
    <b-button variant="danger">Button</b-button>
    <b-button variant="success">Button</b-button>
    <b-button variant="outline-primary">Button</b-button>
  </div>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
    <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    <div class="mt-3">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
  <div>Made By <a href="https://github.com/Walkers15">Walkers15</a> / Ipsum By <a href="https://fakerjs.dev/">Faker.js</a></div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  compatConfig: { MODE: 3 },
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

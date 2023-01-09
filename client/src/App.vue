<template>
  <img alt="Faker.js logo" style="width: 100px; height: 100px" src="./assets/favicon.png" />
  <div>
    <h1>Ipsum Generator</h1>
    <p>No-ads Online Lorem Ipsum Generator</p>
  </div>
  <div>
    <b-container>
      <b-row>
        <b-col cols="4">
          <b-form-select v-model="languageSelected" :options="languageOptions"></b-form-select>
        </b-col>
        <b-col cols="3">
          <b-form-select v-model="typeSelected" :options="typeOptions"></b-form-select>
        </b-col>
        <b-col cols="3">
          <b-form-input type="number" v-model="count" placeholder="Count"></b-form-input>
        </b-col>
        <b-col cols="2">
          <b-button variant="primary" @click="makeIpsum">Ipsum!</b-button>
        </b-col>
      </b-row>
      <b-card class="mt-3" header="Ipsum Result">
        <pre class="m-0">{{ text }}</pre>
      </b-card>
    </b-container>
  </div>
  <div></div>
  <div>Made By <a href="https://github.com/Walkers15">Walkers15</a> / Ipsum By <a href="https://fakerjs.dev/">Faker.js</a></div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      languageSelected: "en",
      languageOptions: [
        { value: "en", text: "English" },
        { value: "ko", text: "Korean" },
        { value: "ja", text: "Japanese" },
        { value: "zh_CN", text: "Chinese" },
      ],
      typeSelected: 0,
      typeOptions: [
        { value: 0, text: "paragraphs" },
        { value: 1, text: "words" },
        { value: 2, text: "sentences" },
        { value: 3, text: "lines" },
      ],
      count: 3,
      text: "",
    };
  },
  methods: {
    async makeIpsum() {
      if (this.count <= 0) {
        alert("count가 0 이하입니다!");
        this.count = 3;
        return;
      }
      const result = await axios.get(`https://mapled.kro.kr/ipsum?language=${this.languageSelected}&type=${this.typeSelected}&count=${this.count}`);
      // console.log(result.data.ipsum);
      this.text = result.data.ipsum;
    },
  },
  compatConfig: { MODE: 3 },
};
</script>

<style>
@font-face {
  font-family: "Jalnan";
  src: url(./assets/Jalnan.ttf);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

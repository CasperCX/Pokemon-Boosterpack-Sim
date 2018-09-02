<template>
  <div id="app">
    <div class="banner">
      <Header :msg="msg"/>
      <h1>Welcome to {{ hello }}</h1>
    </div>
    <p> {{ pack }} </p>
    <h1>{{ input }}</h1>
    <input type="text" v-model="input">
      <button @click="getPack">Open pack</button>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from './Header';

  export default {
    name: 'app',
    data() {
      return {
        hello: "The Pokemon API app",
        input: 'dw',
        msg: 'hello world',
        pack: []
      }
    },
    methods: {
      async getPack() {
       try {
         this.pack = await axios.get('http://localhost:5000/getpack');
         console.log("got:", res.data);
       } catch(err) {
         console.log(err);
       }
      }
    },
    components: {
      Header
    }
  }
</script>

<!-- CSS libraries -->
<style src="normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
  code {
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    font-size: 0.9em;
    white-space: pre-wrap;
    color: #2c3e50;
  }

  code::before, code::after {
    content: '`';
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
  #app {
    text-align: center;
  }

  #app h1 {
    color: #2c3e50;
    font-weight: 300;
    margin: 0;
  }

  .banner {
    height: 200px;
    background-color: #f6f6f6;
    padding: 50px 10px;
  }

  .bottom {
    padding: 80px 10px;
    font-size: 24px;
    font-weight: 300;
  }

  .fade {
    font-size: 14px;
  }

  .logo {
    animation: spin 4s 1s infinite linear
  }

  @keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  }
</style>

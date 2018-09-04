<template>
  <div id="app">
    <div class="banner">
      <Header/>
        <button @click="getPack">Open pack</button>
    </div>

    <div class="cards-container">
        <div v-for="(item, index) in pack" :key="index">
          <Card :card={item} />
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import Header from './Header';
  import Card from './Card';

  export default {
    name: 'app',
    data() {
      return {
        pack: []
      }
    },
    methods: {
      async getPack() {
       try {
         const res = await axios.get('http://localhost:5000/getpack');
         this.pack = res.data;
       } catch(err) {
         console.log(err);
       }
      }
    },
    computed: {
      rotateCard : function() { 
      let i = 0;
      for (let card of document.querySelectorAll('.card')) {
          card.style.left = (10 * ++i) + 'px';
          }
      }
    },
    components: {
      Header,
      Card
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

  .cards-container {
    position: relative;   
    height: 700px;
    width: 70%;
    margin: auto;
    display: inline-block;
    
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

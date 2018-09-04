<template>
    <div class="card">
        <!-- {{ card.item.supertype }} {{ card.item.rarity }} {{ card.item.name }} -->
       <img :src="card.item.imageUrl" />
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object
    },
  
}

</script>
<style>
   
</style>
<style scoped>
    .card {
        float: left;
        border-radius: 5px;
        width: 100px;
        height: 200px;  
        z-index: 0;
    }
    .card :hover {
        margin-top: -50px;
        width:275px;
        height:400px;
        border-radius: 5px;
        z-index:999;
    }
    .card :nth-child(1) {
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
     
    /* @for $i from 1 through 15 {
        .bar:nth-child(#{$i}) {
            left: ($i * 10px);
        } */
        /* } */
</style>

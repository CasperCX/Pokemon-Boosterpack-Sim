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
    }
}

</script>

<style scoped>
    .card {
        position: relative;
        float: left;
        border: 1px solid black;
        background: red;
        width: 100px;
        height: 200px;  
        z-index: 0;
    }
    .card :hover {
        margin-top: -50px;
        width:275px;
        height:400px;
        border:thin solid black;
        background-color:red;
        z-index:999;
    }
</style>

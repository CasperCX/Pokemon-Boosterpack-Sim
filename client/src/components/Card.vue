<template>
    <div>
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

<style>

</style>

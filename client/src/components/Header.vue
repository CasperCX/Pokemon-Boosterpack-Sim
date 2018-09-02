<template>
    <div>
        <h1>This is from Header {{msg}}</h1>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        msg: String
    }
}
</script>

<style>

</style>

<template>
　　<div>
　　　
　　</div>
</template>

<script>

　　import Vue from 'vue'

　　export default{
　　　　data(){
　　　　　　return {
　　　　　　　　active: false,
　　　　　　　　items: [
　　　　　　　　　　{select:'第一行'},
　　　　　　　　　　{select:'第二行'},
　　　　　　　　　　{select:'第三行'},
　　　　　　　　　　{select:'第四行'}
　　　　　　　　]
　　　　　　}
　　　　},


　　methods: {
　　　　selectStyle (item, index) {
　　　　　　this.$nextTick(function () {
　　　　　　　　this.items.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
　　　　　　});
　　　　}
　　}
}
</script>
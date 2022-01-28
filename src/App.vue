<script setup lang="ts">
import { ref, onMounted } from "vue";
import MyComponent from "./MyComponent.vue";

type ComponentType = typeof MyComponent extends new () => infer T ? T : never;

const myRef = ref<ComponentType>();
onMounted(() => {
	console.log(myRef.value?.printHello)
});
</script>

<template>
  <MyComponent ref="myRef" />
</template>

<script setup lang="ts">
function printHello() {
	console.log("Hello from MyComponent!");
}

defineExpose({
	printHello,
});
</script>

<template>
  <div />
</template>

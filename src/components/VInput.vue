<template>
  <input
    @v-model="value"
    class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-1"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
<script>
export default {
  data: () => ({
    modelValue: null,
  }),
};
</script>

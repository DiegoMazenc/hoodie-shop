<script>
export default {
  name: "SizeSelectCard",
  props: {
    size: String,
    sizeIndex: Number,
    selectedSizeIndex: Number,
  },
  methods: {
    updateSelectedSizeIndex() {
      this.$emit("size-selected", this.sizeIndex, this.size);
    },
  },
};
</script>
<template>
  <button
    type="button"
    :class="{
      'inline-block rounded border-2 border-tertiary-contrast border-opacity-75 px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info':
        sizeIndex !== selectedSizeIndex,
      'inline-block rounded border-2  border-button-text px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal text-info ':
        sizeIndex === selectedSizeIndex,
    }"
    @click="updateSelectedSizeIndex"
  >
    {{ size }}
  </button>
</template>

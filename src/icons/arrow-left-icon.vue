<script setup lang="ts">
const { width = 20, height = 20 } = defineProps<{
  width?: number
  height?: number
}>()
</script>

<template>
  <svg
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="presentation"
    focusable="false"
    :style="{
      display: 'block',
      fill: 'none',
      height: `${height}px`,
      width: `${width}px`,
      strokeWidth: '5.33333',
      overflow: 'visible'
    }"
    style="stroke: currentColor"
  >
    <g fill="none">
      <path
        d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
      ></path>
    </g>
  </svg>
</template>

<style scoped></style>

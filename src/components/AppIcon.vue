<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="app-icon"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    disabled
  >
    <g :fill="fill" :stroke="stroke" :stroke-width="strokeWidth">
      <slot>
        <component :is="name" />
      </slot>
    </g>
  </svg>
</template>

<script>
import icons from './icons'

export default {
  components: icons,
  props: {
    width: {
      type: [Number, String],
      default: 18
    },
    height: {
      type: [Number, String],
      default: 18
    },
    viewBox: {
      type: String,
      default: '0 0 200 200'
    },
    name: {
      type: String,
      default: null
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    stroke: {
      type: String,
      default: 'currentColor'
    },
    strokeWidth: {
      type: [Number, String],
      default: '2'
    }
  }
}
</script>

<style lang="scss" scoped>
svg.app-icon {
  display: inline-block;
  vertical-align: baseline;
  color: inherit;
}
</style>

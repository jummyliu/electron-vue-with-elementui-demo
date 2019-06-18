<template>
  <header class="app-header">
    <div class="app-title"></div>
    <div class="app-nav"></div>
    <div class="app-button-area">
      <button @click="minimize">
        <AppIcon name="IconMinimize" fill="transparent" />
      </button>
      <button @click="maximize">
        <AppIcon :name="isMaximized ? 'IconUnmaximize' : 'IconMaximize'" fill="transparent" />
      </button>
      <button @click="close">
        <AppIcon name="IconClose" fill="transparent" />
      </button>
    </div>
  </header>
</template>

<script>
import { ipcRenderer } from 'electron'
import { mapState, mapMutations } from 'vuex'
import store from '@/store'
import * as types from '@/store/types'

ipcRenderer.on('isMaximized', (event, state) => {
  store.commit(`app/${types.APP_CHANGE_MAXIMIZED}`, state)
})

export default {
  computed: {
    ...mapState('app', ['isMaximized'])
  },
  methods: {
    minimize () {
      ipcRenderer.send('minimize')
    },
    maximize () {
      ipcRenderer.send('maximize')
    },
    close () {
      ipcRenderer.send('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  height: 36px;
  -webkit-user-select: none;
  -webkit-app-region: drag;
  position: relative;
  display: flex;
  justify-content: space-between;

  > *:not(.app-title) {
    -webkit-app-region: no-drag;
  }

  .app-title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .app-button-area {
    display: flex;
    justify-content: flex-end;

    > button {
      background: none;
      border: none;
      width: 40px;
      color: $--color-icon-noactive;
      cursor: pointer;

      &:focus {
        outline: none;
      }

      &:hover {
        color: $--color-icon;
        background: $--color-background;
      }
    }
  }
}
</style>

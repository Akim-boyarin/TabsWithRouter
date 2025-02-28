<template>
  <button :class="['form-button', { 'form-button_active': isValidForm }]" type="button">
    <slot></slot>
  </button>
</template>

<script>
import {useAppStore} from "@/store/app.js";

export default {
  name: "FormButton",
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    }
  },
  computed: {
    isValidForm() {
      return this.appStore.isValidForm.value;
    }
  }
}
</script>

<style lang="scss">
  .form-button {
    display: inline-block;
    padding: 12px 22px;
    border-radius: 10px;
    font-family: "Lato";
    font-size: 14px;
    line-height: 140%;
    font-weight: 900;
    letter-spacing: 0.05em;
    background: linear-gradient(133deg, rgba(255,255,255,1) 0%, rgba(207,231,206,1) 22%);
    color: #26272c;

    &:hover {
      @media (min-width: 1200px) {
        background: linear-gradient(133deg, rgba(203,230,202,1) 0%, rgba(149,211,147,1) 22%);
        color: white;
      }
    }
  }

  .form-button_active {
    background: #95d393;
    color: white;

    &:hover {
      background: #95d393;
      color: white;

    }
  }
</style>
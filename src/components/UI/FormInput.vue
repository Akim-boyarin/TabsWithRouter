<template>
  <div class="form-input">
    <template v-if="mask.length > 0">
      <input class="form-input__field" type="text" v-mask="mask" v-model="appStore.formData[fieldKey].value" :placeholder="appStore.formData[fieldKey].placeholder">
    </template>
    <template v-else>
      <input class="form-input__field" type="text" v-model="appStore.formData[fieldKey].value" :placeholder="appStore.formData[fieldKey].placeholder">
    </template>
    <span class="form-input__error-message" v-show="!hasErrorMessage">{{ errorMessageText }}</span>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import {useAppStore} from "@/store/app.js";
export default {
  name: "FormInput",
  props: {
    fieldKey: [String],
    mask: [String],
  },
  directives: { mask },
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    }
  },
  computed: {
    hasErrorMessage() {
      return this.appStore.isValidForm.fields[this.fieldKey];
    },
    errorMessageText() {
      return this.appStore.formData[this.fieldKey].errorMessage;
    }
  },
}
</script>

<style lang="scss">
  .form-input {
    width: 100%;
    padding-bottom: 20px;
    position: relative;
    &__field {
      display: block;
      width: 100%;
      font-family: 'Lato';
      font-size: 16px;
      line-height: 140%;
      font-weight: 400;
      padding: 12px 18px;
      color: #3a3b3f;
      border: 1px solid #d6d6d6;
      border-radius: 10px;
      transition: all 0.2s ease;

      &:focus {
        border-color: #3a3b3f;
      }
    }
    &__error-message {
      font-family: 'Lato';
      font-size: 12px;
      line-height: 140%;
      font-weight: 400;
      color: #5e7cc3;
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
</style>
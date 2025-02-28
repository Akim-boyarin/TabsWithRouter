<template>
  <div class="form-block">
    <div class="form-block__content-wrapper">
      <form class="form-block__form">
        <div class="form-block__fields">
          <FormInput class="form-block__field-block"
                     v-for="fieldData in Object.values(appStore.formData)"
                     :key="fieldData.id"
                     :fieldKey="fieldData.fieldKey"
                     :mask="fieldData.mask">
          </FormInput>
        </div>
        <div class="form-block__action-button-wrapper">
          <FormButton class="form-block__action-button"
                      @click="appStore.addDataToTable">
            Отправить
          </FormButton>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {useAppStore} from "@/store/app.js";

export default {
  name: "Form",
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    }
  },
}
</script>

<style lang="scss">
.form-block {
  width: 100%;
  &__content-wrapper {

  }
  &__form {

  }
  &__fields {
    margin-bottom: 42px;
  }
  &__field-block {
    margin-bottom: 14px;
  }
  &__action-button-wrapper {
    width: 100%;
    @include center-content;
  }
  &__action-button {

  }
}
</style>
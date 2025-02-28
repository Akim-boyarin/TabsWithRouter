<template>
  <div class="tabs-with-router">
    <div class="tabs-with-router__app-wrapper">
      <div class="tabs-with-router__nav-menu-wrapper">
        <nav class="tabs-with-router__nav-menu">
          <RouterLink
              v-for="link in appStore.routerLinks"
              :key="link.id"
              :to="link.url">
            {{ link.title }}
          </RouterLink>
        </nav>
      </div>
      <div class="tabs-with-router__body-wrapper">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app.js";

export default {
  name: "TabsWithRouter",
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    }
  },
  data() {
    return {

    };
  },
}
</script>

<style lang="scss">
  @import "@/assets/scss/default-styles";

  .tabs-with-router {
    background: #fff;
    @include center-content;
    &__app-wrapper {
      padding: 40px 0;
      @include content-side-offset;
      background: #fff;
      max-width: 1200px;
      width: 100%;
      flex-grow: 0;
      flex-shrink: 0;
      position: relative;
      @media (min-width: 1200px) {
        box-shadow: 0px 0px 8px 3px rgba(34, 60, 80, 0.2);
      }
    }
    &__nav-menu-wrapper {
      width: 100%;
      @include center-content;
    }
    &__nav-menu {
      display: inline-block;
      border-bottom: 2px solid #f2f2f2;
      margin-bottom: 25px;
    }
    &__nav-menu a {
      display: inline-block;
      font-family: "Lato";
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      padding: 20px 35px 6px;
      color: #828282;
      border-bottom: 4px solid rgba(0, 128, 0, 0);
      position: relative;
      top: 4px;
      transition: all 0.2s ease;
      @media (min-width: 1200px) {
        font-size: 22px;
        padding: 25px 45px 6px;
      }
    }
    &__nav-menu .router-link-active {
      border-color: #39b84a;
      color: #111111;
    }
    &__body-wrapper {}
  }
</style>
<template>
  <div class="form-table-block">
    <table class="form-table">
      <thead>
      <tr class="form-table__row">
        <th class="form-table__item form-table__item_header"
            v-for="(header, index) in appStore.tableHeaders"
            :key="index">
          {{ header }}
        </th>
      </tr>
      </thead>
      <tbody>
        <tr class="form-table__row" v-for="(row, rowIndex) in appStore.tableBody" :key="rowIndex">
          <td class="form-table__item" v-for="(itemData, itemIndex) in Object.values(row)" :key="itemIndex">{{ itemData }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {useAppStore} from "@/store/app.js";

export default {
  name: "FormTable",
  setup() {
    const appStore = useAppStore();

    return {
      appStore,
    }
  },
}
</script>

<style lang="scss">
  .form-table-block {
    width: 100%;
    padding-bottom: 12px;
    overflow: auto;
  }
  .form-table {
    width: 100%;
    min-width: 600px;
    border-spacing: 0px;
    border-collapse: collapse;
    &__row {

    }
    &__item {
      text-align: center;
      font-family: "Lato";
      font-size: 14px;
      font-weight: 400;
      line-height: 120%;
      padding: 8px 0;
      background: white;
      border: 2px solid #f0f0f0;
      color: #3a3a3f;
    }
    &__item_header {
      background: #f5f5f5;
      color: #232328;
      font-weight: 800;
    }
  }

</style>
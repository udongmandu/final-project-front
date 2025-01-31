<template>
  <div id="kt_app_content" class="app-content flex-column-fluid">
    <div id="kt_app_content_container" class="app-container container-xxl">
      <!-- 여기부터 -->
      <Account_overview />
      <Account_profile_detail />
      <Account_category />
      <Account_items />
      <!-- 여기까지 -->
    </div>
  </div>
</template>

<script>
import Account_overview from "./Account_overview.vue";
import Account_profile_detail from "./Account_profile_detail.vue";
import Account_category from "./Account_category.vue";
import Account_items from "./Account_items.vue";

export default {
  name: "Account_Content",
  components: {
    Account_overview,
    Account_profile_detail,
    Account_category,
    Account_items,
  },
};
</script>

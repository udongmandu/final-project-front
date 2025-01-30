<template>
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <Toolbar />
    <div id="kt_app_content" class="app-content flex-column-fluid">
      <div id="kt_app_content_container" class="app-container container-xxl">
        <UserProfile />
        <Navbar />
        <ProfileDetails />
        <ChartsWidget />
        <StockReport />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import ChartsWidget from "./Account/ChartsWidget.vue";
import Footer from "./Account/Footer.vue";
import Navbar from "./Account/Navbar.vue";
import ProfileDetails from "./Account/ProfileDetails.vue";
import StockReport from "./Account/StockReport.vue";
import Toolbar from "./Account/Toolbar.vue";
import UserProfile from "./Account/UserProfile.vue";

export default {
  name: "Home",
  components: {
    Toolbar,
    UserProfile,
    Navbar,
    ProfileDetails,
    ChartsWidget,
    StockReport,
    Footer,
  },
};
</script>

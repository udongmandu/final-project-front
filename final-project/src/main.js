import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// ✅ Bootstrap 및 Popper.js를 npm 패키지에서 불러오기
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// ✅ 기타 CSS 파일들 추가
import "./assets/css/blue-theme.css";
import "./assets/css/flaticon.css";
import "./assets/css/menu.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/owl.carousel.min.css";
import "./assets/css/owl.theme.default.min.css";
import "./assets/css/lunar.css";
import "./assets/css/animate.css";
import "./assets/css/responsive.css";

const app = createApp(App);
app.use(router);
app.mount("#app");

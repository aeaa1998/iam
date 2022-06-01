import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/output.css"
import VInput from "@/components/VInput"
import RoundedButton from "@/components/RoundedButton"

createApp(App)
.component('v-input', VInput)
.component('v-rounded-btn', RoundedButton)
.use(store).use(router).mount("#app");

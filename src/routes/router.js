import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Gallery from "../components/Gallery.vue";
import Contact from "../components/Contact.vue";
import CourseList from "../components/Courses/CourseList.vue";
import CourseAdd from "../components/Courses/CourseAdd.vue";
import CourseEdit from "../components/Courses/CourseEdit.vue";
import Register from "../components/Authentication/Register.vue";
import Login from "../components/Authentication/Login.vue";
import Dashboard from "../components/Authentication/Dashboard.vue";

const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Gallery", path: "/gallery", component: Gallery },
  { name: "Contact", path: "/contact-us", component: Contact },
  { name: "CourseList", path: "/courselist", component: CourseList },
  { name: "CourseAdd", path: "/courseadd", component: CourseAdd },
  { name: "CourseEdit", path: "/courseedit/:id", component: CourseEdit },
  { name: "Register", path: "/register", component: Register },
  { name: "Login", path: "/login", component: Login },
  {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    meta: { requireAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// interceptor
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((route) => route.meta.requireAuth)) {
    // authentication check
    const token = localStorage.getItem("token");
    if (token) {
      // check if token is detected
      return next();
    }
    // check if token is not detected
    return next("/login");
  }
  next();
});

export default router;

<script setup>
import { reactive, ref } from "vue";

// Declarative Rendering
const counter = reactive({ count: 10, value: 0, })
const message = ref('Hello, Inixindo!')
const myTitle = ref('title')   // Attribute Binding

// variabel
const value1 = ref(0);   // nilai awal adalah 0
// Event Listener
function increment() {
    value1.value++
}

// Form Bindings
const myName = ref('')
const myHobbies = ref([])
const picked = ref('One')
const selected = ref('')

const status = ref(true)
function toggleStatus() {
    status.value = !status.value
}

// deklarasi variabel: var, const, let
const abc = 'nilai'    // diawal harus diinisialisasi
let id = 0             // diawal tidak harus diinisialisasi

const newCourse = ref('')   // diinisialisasi dengan empty string
const courses = ref([
    { id: id++, title: 'Learn HTML CSS JS' },
    { id: id++, title: 'Learn Vue.js' },
    { id: id++, title: 'Learn React.js' },
    { id: id++, title: 'Learn Laravel' },
])
function addCourse() {
    courses.value.push({ id: id++, title: newCourse.value })
    newCourse.value = '';
}
function removeCourse(course) {
    courses.value = courses.value.filter((c) => c !== course)
}

counter.count++
</script>

<template>
    <div>
        <h3 :class="myTitle">{{ message }}</h3>
        <p>Count is : {{ counter.count }}</p>
        <button v-on:click="increment">{{ value1 }}</button>
        <button @click="increment">{{ value1 }}</button>
        <hr>
        <input placeholder="Enter your name" v-model="myName">
        <p>{{ myName }}</p>

        <p>My Hobbies: {{ myHobbies }}</p>
        <input type="checkbox" id="coding" value="Coding" v-model="myHobbies">
        <label for="coding">Coding</label>
        <input type="checkbox" id="reading" value="Reading" v-model="myHobbies">
        <label for="reading">Reading</label>
        <input type="checkbox" id="football" value="Football" v-model="myHobbies">
        <label for="football">Football</label>

        <p>Picked: {{ picked }}</p>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <input type="radio" id="three" value="Three" v-model="picked">
        <label for="three">Three</label>

        <p>Selected: {{ selected }}</p>
        <select v-model="selected">
            <option value="" disabled>Please select one</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        <hr>

        <button @click="toggleStatus">Status: {{ status }}</button>
        <p v-if="status">Status is true</p>
        <p v-else>Status is false</p>

        <hr>

        <form @submit.prevent="addCourse">
            <input type="text" placeholder="Enter course title" v-model="newCourse">
            &nbsp;
            <button>Add Course</button>
        </form>
        <ul>
            <li v-for="course in courses" :key="course.id">
                {{ course.title }} &nbsp; | &nbsp;
                <button @click="removeCourse(course)">
                    X
                </button>
            </li>
        </ul>
    </div>
</template>

<style>
.title {
    color: crimson;
}
</style>
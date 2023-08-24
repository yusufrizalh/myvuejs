<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";

let courses = ref([]);  // array kosong

async function getAllCourses() {
    try {
        const response = await axios.get("http://localhost:5001/courses");
        courses.value = response.data;  // array diisi data
        console.log("Courses: ", response.data);
    } catch (error) {
        console.error(error);
    }
};

async function deleteCourse(id) {
    if (confirm("Are you sure to delete this course?")) {
        try {
            await axios.delete(`http://localhost:5001/courses/${id}`);
            await getAllCourses();
        } catch (error) {
            console.log(error);
        }
    }
}

onMounted(async () => {
    console.log("onMounted called when component is mounted");
    await getAllCourses();
});

</script>

<template>
    <div>
        <div class="d-flex justify-content-between">
            <h3>All Courses</h3>
            <router-link to="/courseadd" class="btn btn-md btn-primary">
                New Course
            </router-link>
        </div>
        <hr>
        <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>Course Title</th>
                    <th>Price</th>
                    <th>Duration</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody v-if="courses && courses.length">
                <tr v-for="course in courses" :key="course.id">
                    <td>{{ course.title }}</td>
                    <td>{{ course.price }}</td>
                    <td>{{ course.duration }}</td>
                    <td>
                        <router-link v-if="(typeof course.id !== 'undefined')"
                            v-bind:to="{ name: 'CourseEdit', params: { id: course.id } }"
                            class="btn btn-sm btn-outline-warning">
                            Edit
                        </router-link>
                        &nbsp;
                        <a class="btn btn-sm btn-outline-danger" @click="deleteCourse(course.id)">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="4">No data found!</td>
                </tr>
            </tbody>
        </table>

        <!-- <div v-if="courses && courses.length">
            <div class="row">
                <div v-for="course of courses">
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header"><b>{{ course.title }}</b></div>
                            <div class="card-body">
                                <p>Price: {{ course.price }}</p>
                                <p>Duration: {{ course.duration }}</p>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-between">
                                    <button class="btn btn-sm btn-warning">Edit</button>
                                    <button class="btn btn-sm btn-danger">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row">
                <div class="col-md-6">
                    <div class="card m-3">
                        <div class="card-header">Result</div>
                        <div class="card-body">No data found</div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style></style>
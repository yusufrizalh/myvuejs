<script>
import axios from 'axios';

export default {
    name: "CourseEdit",
    components: {},
    data() {
        return {
            title: "",
            price: "",
            duration: "",
            description: "",
        };
    },
    methods: {
        // method 1: getCourseById
        async getCourseById() {
            try {
                const response = await axios.get(
                    `http://localhost:5001/courses/${this.$route.params.id}`
                );
                console.log("Course: ", response.data);     // cek ada data atau tidak
                this.title = response.data.title;
                this.price = response.data.price;
                this.duration = response.data.duration;
                this.description = response.data.description;
            } catch (error) {
                console.error(error);
            }
        },
        // method 2: updateCourse
        async updateCourse() {
            try {
                await axios.put(
                    `http://localhost:5001/courses/${this.$route.params.id}`,
                    {
                        title: this.title,
                        price: this.price,
                        duration: this.duration,
                        description: this.description,
                    }
                );
                // redirect ke courselist
                this.$router.push("/courselist");
            } catch (error) {
                console.error(error);
            }
        },
    },
    // created: function () {
    //     this.getCourseById();
    // },
    mounted: function () {
        this.getCourseById();
    },
}
</script>

<template>
    <div>
        <h3 class="text-dark">Edit Course</h3>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateCourse">
                    <div class="mb-3">
                        <label for="title" class="mb-2"><strong>Course Title</strong></label>
                        <input type="text" placeholder="Enter course title" class="form-control" v-model="title" required
                            autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="price" class="mb-2"><strong>Course Price</strong></label>
                        <input type="number" placeholder="Enter course price" class="form-control" v-model="price" required
                            autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="duration" class="mb-2"><strong>Course Duration</strong></label>
                        <input type="number" placeholder="Enter course duration" class="form-control" v-model="duration"
                            required autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="description" class="mb-2"><strong>Course Description</strong></label>
                        <textarea class="form-control" rows="4" v-model="description"></textarea>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-md btn-outline-primary">
                            Update Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
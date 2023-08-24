<script>
// OPTIONS

import axios from 'axios';

export default {
    name: "CourseAdd",
    data() {        // letak deklarasi variable
        return {
            title: "",
            price: "",
            duration: "",
            description: "",
        };
    },
    methods: {      // letak deklarasi function
        async createCourse() {
            try {
                await axios.post("http://localhost:5001/courses", {
                    title: this.title,
                    price: this.price,
                    duration: this.duration,
                    description: this.description,
                });
                this.title = "";
                this.price = "";
                this.duration = "";
                this.description = "";
                // redirect ke courselist
                this.$router.push("/courselist");
            } catch (error) {
                console.error(error);
            }
        }
    },

}
</script>

<template>
    <div>
        <h3 class="text-dark">Create New Course</h3>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="createCourse">
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
                            Create Course
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
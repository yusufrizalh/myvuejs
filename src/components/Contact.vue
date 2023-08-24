<script>
import emailjs from "@emailjs/browser";

export default {
    name: "Contact",
    data() {
        return {
            user_name: "",
            user_email: "",
            message: "",
        }
    },
    methods: {
        sendEmail(event) {
            try {
                emailjs.sendForm('service_fwugjuf',
                    'template_w9lgba4',
                    event.target,
                    'cW3Xc0NnKWgExrSo4', {
                    user_name: this.user_name,
                    user_email: this.user_email,
                    message: this.message,
                })
            } catch (error) {
                if (error instanceof ReferenceError) {
                    alert("Error: " + error.message)
                } else {
                    throw error
                }
            }
            this.name = "";
            this.email = "";
            this.message = "";
        }
    }
}
</script>

<template>
    <div>
        <h3 class="text-dark">Contact Us</h3>
        <hr>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="sendEmail">
                    <div class="mb-3">
                        <label for="name" class="mb-2"><strong>Your Name</strong></label>
                        <input type="text" placeholder="Enter your name" class="form-control" name="user_name"
                            v-model="user_name" required autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="mb-2"><strong>Your Email</strong></label>
                        <input type="email" placeholder="Enter your email address" class="form-control" name="user_email"
                            v-model="user_email" required autocomplete="off">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="mb-2"><strong>Your Message</strong></label>
                        <textarea class="form-control" rows="4" name="message" v-model="message"></textarea>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-md btn-outline-primary">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>
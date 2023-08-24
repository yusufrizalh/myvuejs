<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const conf_password = ref("");
const router = useRouter();

const registerUser = async () => {
    const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.value, password: password.value })
    }).then(response => response.json());

    if (response.success) {
        localStorage.setItem("token", response.token);
        router.push("/dashboard");
    } else {
        alert(response.message);
    }
}

</script>

<template>
    <div>
        <main>
            <h3 class="text-dark">Register Page</h3>
            <hr>
            <div class="row">
                <div class="col-md-6">
                    <form @submit.prevent="registerUser">
                        <div class="mb-3">
                            <label for="email" class="mb-2"><strong>Email Address</strong></label>
                            <input type="email" placeholder="test@email.com" class="form-control" v-model="email" required
                                autocomplete="off">
                        </div>
                        <div class="mb-3">
                            <label for="password" class="mb-2"><strong>Password</strong></label>
                            <input type="password" placeholder="**********" class="form-control" v-model="password" required
                                autocomplete="off">
                        </div>
                        <div class="mb-3">
                            <label for="conf_password" class="mb-2"><strong>Confirm Password</strong></label>
                            <input type="password" placeholder="**********" class="form-control" v-model="conf_password"
                                required autocomplete="off">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-md btn-primary">
                                Register
                            </button>
                        </div>
                        <div class="mb-3">
                            <p class="text-secondary">
                                Already have an account?
                                <router-link to="/login" class="text-primary" style="text-decoration: none;">
                                    Login here
                                </router-link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>

<style></style>
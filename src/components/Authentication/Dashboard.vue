<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const userLogout = async () => {
    const response = await fetch("http://localhost:5001/logout", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            session_token: localStorage.getItem("token")
        })
    }).then(response => response.json());

    if (response.success) {
        localStorage.removeItem("token");
        router.push("/login");
    } else {
        alert(response.message);
    }
};
</script>

<template>
    <div>
        <main>
            <h3>This is Dashboard Page</h3>
            <button class="btn btn-md btn-primary" @click="userLogout">
                Logout
            </button>
        </main>
    </div>
</template>

<style></style>
<template>
  <div class="greetings">
    <h1 :class="isAuthenticated ? 'green' : ''">{{ isAuthenticated ? 'User logged in' : '-'}}</h1>
    
    <div class="border">
    <div  v-if="isAuthenticated">
      User: {{user.name}} <br />
      <img :src="user.picture" alt="User Profile" height="100px" />
      <hr />
      <button class="mt-2" @click="logOut">Log out</button>
    </div>
    <button v-else class="mt-2" @click="login">Log in</button>
    </div>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<script setup lang="ts">
    import { useAuth0 } from '@auth0/auth0-vue';
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    const login = ()=>loginWithRedirect();
    const logOut = ()=>logout({returnTo: window.location.origin});
    
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.mt-2{
  margin-top: 1rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.border{
  border: 1px solid #65656d;
  padding: 0.5rem;
  margin: 0.25rem;
  border-radius: 0.25rem;
}
</style>

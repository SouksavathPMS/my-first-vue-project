
<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "active",
      tasks: ["Task one, Task two, Task three"],
      link: "https:google.com",
    };
  },

  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
};
</script>

<template>
  <h1>Vue Jobs {{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">Pending</p>
  <p v-else>User inactive</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }} br</li>
  </ul>
  <a :href="link">Click for google</a>

  <button @click="toggleStatus">Change status</button>
</template>


<style scoped>
h1 {
  color: red;
}
</style>

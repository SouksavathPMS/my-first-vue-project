<script setup>
import MyNavbar from "./components/MyNavbar.vue";
import HeroBar from "./components/HeroBar.vue";
import HomeCard from "./components/HomeCard.vue";
import JobListings from "./components/JobListings.vue";
</script>

<template>
  <MyNavbar />
  <HeroBar />
  <HomeCard />
  <JobListings :limit="3" :showButton="true" />
</template>



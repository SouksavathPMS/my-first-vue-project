<script setup>
import HeroBar from "@/components/HeroBar.vue";
import HomeCard from "@/components/HomeCard.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <HeroBar />
  <HomeCard />
  <JobListings :limit="3" :showButton="true" />
</template>



<script setup>
import { useCourse } from '../stores/course';
const { course } = useCourse();
</script>
<template>
  <div class="container mt-5 text-center">
    <div class="row mt-2" style="font-size: 22px; color:burlywood;">
      <div class="col text-start">Course</div>
    </div>
    <div class="row mt-4" style="font-size: 22px; color:blue;">
      <div class="col">
        <div>No.</div>
      </div>
      <div class="col">
        <div>Name</div>
      </div>
      <div class="col">
        <div>Sec.</div>
      </div>
    </div>
    <div class="row mt-3" v-for="n in course.length">
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].code }}
      </div>
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].nameTh }}<br>
        {{ course[n - 1].nameEg }}
      </div>
      <div class="col" v-if="course && course[n - 1]">
        {{ course[n - 1].group }}
      </div>
    </div>
  </div>
</template>


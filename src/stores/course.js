import { ref } from "vue";
import { defineStore } from "pinia";

export const useCourse = defineStore("Course", () => {
  const course = ref([
    {
        code:'คพ121',
        nameTh:'ตรรกศาสตร์เชิงดิจิทัลและอุปกรณ์อัจฉริยะ',
        nameEg:'Digital Logic and Smart Device	',
        group:'2',
    },
    {
        code:' คพ221',
        nameTh:'การวิเคราะห์และออกแบบเชิงวัตถุ',
        nameEg:'Data Structures',
        group:'1',
    },
    {
        code:'คพ231',
        nameTh:'ระบบคอมพิวเตอร์และภาษาแอสเซมบลี',
        nameEg:'Computer System and Assembly Language Programming',
        group:'1',
    },
    {
        code:'คพ241',
        nameTh:'ระบบฐานข้อมูล',
        nameEg:'Database Systems',
        group:'1',
    },
    
    {
        code:'คศ101',
        nameTh:'แคลคูลัส 1',
        nameEg:'Calculus 1',
        group:'1',
    },
    {
        code:' วอ101',
        nameTh:'วิศวกรรมเบื้องต้นในชีวิตประจำวัน',
        nameEg:'Basic Engineering in Daily Life',
        group:'1',
    },
    {
        code:' ศท241  ',
        nameTh:'ภาษาอังกฤษเชิงวิทยาศาสตร์และเทคโนโลยี 1',
        nameEg:'English for Science and Technology 1	',
        group:'1',
    },
  ]);
  return {course};
});

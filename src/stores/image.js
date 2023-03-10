import { ref } from "vue";
import { defineStore } from "pinia";

export const useImage = defineStore("Image", () => {
  const image = ref([
    {
        src:`https://erp.mju.ac.th/picture/information/f711818cec30471d907bd82d84802db5s.jpg`,
        alt:'01',
        detail:' ม.แม่โจ้ จัดงานแสดงมุทิตาจิตแก่ผู้เกษียณอายุ ประจำปี 2565 “เกษียณสุขใจ สายใยชาวแม่โจ้',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/14fa2ba5f9a84e8fb7f107863d7bdacbs.jpg',
        alt:'02',
        detail:'ม.แม่โจ้ จัดกิจกรรม MJU Car Free Day 2022 ขับเคลื่อน MJU Green University',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/954d7ee022d6497c8e84fb3dcaffb2e8s.jpg',
        alt:'03',
        detail:'  ปิดฉากกีฬาทัวร์นาเมนต์ ครั้งที่ 11 แม่โจ้ - มช.- ม.กีฬาแห่งชาติ ครองแชมป์แต่ละประเภท”',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/1c2623f7493a464888eab8babf87ab0fs.jpg',
        alt:'04',
        detail:' มศว. เยือน ม.แม่โจ้ พบปะหารือเตรียมสร้างเครือข่ายและขับเคลื่อนยุทธศาสตร์ เพื่อการพัฒนาชุมชน',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/8928b26064ea4bcf9a81e8088dbc3347s.jpg',
        alt:'05',
        detail:' ศูนย์ประสานงาน อพ.สธ.-มจ. ร่วมงานเปิดตัวหนังสือ Impatiens of Thailand (พืชสกุลเทียนในประเทศไทย)',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/64ea22dcc07543768451c9aff4f9bfdfs.jpg',
        alt:'06',
        detail:' ขอแสดงความยินดีกับทีมน้องๆ นักศึกษามหาวิทยาลัยแม่โจ้ คว้ารางวัลชนะเลิศ Best of the Best ประเภท กินดี ระดับประเทศ ประจำปี 2565',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/5e32c99e0ace411e9d07f6ae41dc7f15s.jpg',
        alt:'07',
        detail:' ม.แม่โจ้ เจ้าภาพจัดลั่นฆ้อง เปิดชิงชัยกีฬาทัวร์นาเมนต์ 12 สถาบันในเชียงใหม่ ครั้งที่ 11',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/6e740aae51e44ea1bb24c134b9bc1c6fs.jpg',
        alt:'08',
        detail:' ม.แม่โจ้ ร่วมพิธีวันพระบิดาแห่งฝนหลวง ประจำปี 2565',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/f5e9607b21d74d22a7d6e3d2cc33a017s.jpg',
        alt:'09',
        detail:' คณะศิลปศาสตร์ จัดโครงการอบรมจริยธรรมการวิจัยในคนและพัฒนาศักยภาพนักวิจัย',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/1c6abba2ba22427cb79bb5904ad91c5bs.jpg',
        alt:'10',
        detail:' คณะสัตวแพทยศาสตร์ ม.แม่โจ้ ออกพื้นที่ปฏิบัติงานในหน่วยสัตวแพทย์อาสาจุฬาภรณ์',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/bcbcc7b16cc140e0ae7d1ece92959a57s.jpg',
        alt:'11',
        detail:' ม.แม่โจ้ ได้จัดการประกวดสุนทรพจน์ภาษาอังกฤษ MJU Liberal Arts English Speech Contest 2023 ภายใต้หัวข้อ ',
    },
    {
        src:'https://erp.mju.ac.th/picture/information/f26bd3d195d1468e9942c1d52e5b16efs.jpeg',
        alt:'12',
        detail:' ขอแสดงความยินดี อธิการบดี ม.แม่โจ้ รับโล่เกียรติยศนักเรียนเก่าฟิลิปปินส์ดีเด่น ปี 2565',
    },
  ]);
  return {image};
});

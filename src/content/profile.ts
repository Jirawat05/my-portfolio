type Profile = {
  photo?: string   // รูปโปรไฟล์ (ไม่บังคับ)
  email: string
  github: string
  linkedin: string
}

// วิธีเพิ่มรูปโปรไฟล์วันหลัง:
// 1. วางไฟล์รูปไว้ที่ src/assets/profile.webp
// 2. เพิ่มบรรทัดนี้ไว้บนสุดของไฟล์:  import photo from '../assets/profile.webp'
// 3. เพิ่ม photo ลงใน profile ด้านล่าง เช่น  photo,  หรือ  photo: photo,
// ถ้ายังไม่มี photo หน้าเว็บจะแสดงตัวอักษรแรกของชื่อแทน
export const profile: Profile = {
  email: 'jirawat33163@gmail.com',
  github: 'https://github.com/Jirawat05',
  linkedin: '', // ยังไม่มี
}

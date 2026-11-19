import type { Content } from './types'

const th: Content = {
   nav: { about: 'เกี่ยวกับ', experience: 'ประสบการณ์', skills: 'ทักษะ', projects: 'ผลงาน', certificates: 'ใบรับรอง', contact: 'ติดต่อ' },

  hero: {
    greeting: 'สวัสดีครับ ผมชื่อ',
    name: 'จิรวัฒน์',
    tagline: 'นักศึกษาสหกิจ ที่ชอบสร้างเครื่องมือให้งานประจำวันง่ายขึ้น',
    primaryCta: 'ดูผลงาน',
    secondaryCta: 'ติดต่อผม',
  },

  about: {
    title: 'เกี่ยวกับผม',
    lead: 'ผมเปลี่ยนงานที่ยุ่งยากและทำด้วยมือ ให้เป็นแอปที่ใช้ง่ายและข้อมูลที่เป็นระเบียบ',
    paragraphs: [
      'ผมเป็นนักศึกษาที่กำลังฝึกสหกิจศึกษา สร้างเครื่องมือช่วยงานให้ทีมในโรงงานอุตสาหกรรม',
      'ผมชอบคุยกับคนหน้างาน หาว่างานติดขัดตรงไหน แล้วสร้างเครื่องมือที่ช่วยได้จริง',
    ],
  },

  experience: {
    title: 'ประสบการณ์',
    items: [
      {
        role: 'นักศึกษาสหกิจศึกษา',
        org: 'บริษัทอุตสาหกรรมการผลิต',
        period: '2569',
        points: [
          'พัฒนาแอประบบเบิกหมึกด้วย Power Apps และ SharePoint แทนการจดมือ',
          'วิเคราะห์ข้อมูล QA ที่กระจายอยู่หลายที่ และออกแบบฐานข้อมูลกลาง',
        ],
      },
    ],
  },

    skills: {
    title: 'ทักษะ',
    groups: [
      { name: 'ภาษาโปรแกรม', items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C / C++'] },
      { name: 'ฟรอนต์เอนด์', items: ['React', 'HTML', 'CSS', 'Tailwind CSS'] },
      { name: 'ฐานข้อมูล', items: ['MySQL', 'PostgreSQL', 'SQL Server', 'SQLite'] },
      { name: 'แอปธุรกิจ', items: ['Power Apps', 'Power BI', 'SharePoint', 'Excel'] },
      { name: 'เครื่องมือ', items: ['Git', 'GitHub', 'VS Code', 'Docker', 'Postman', 'Figma', 'Google Sheets', 'Apps Script'] },
    ],
  },

  projects: {
    title: 'ผลงาน',
    viewDetails: 'ดูรายละเอียด',
    close: 'ปิด',
    viewCode: 'ดูโค้ด',
    viewDemo: 'ดูเว็บจริง',
    items: [
      {
        id: 'ink-stock',
        title: 'ระบบเบิกหมึก',
        category: 'แอปธุรกิจ',
        year: '2569',
        summary: 'แอปรับเข้าและเบิกจ่ายหมึกพิมพ์ ติดตามตามล็อต และเซ็นชื่อแบบดิจิทัล',
        highlights: [
          'หน้ารับเข้าแบบตะกร้า: ใบขอซื้อหนึ่งใบหลายรายการ บันทึกได้ในครั้งเดียว',
          'ตัดสต็อกแบบเข้าก่อนออกก่อนตามล็อต',
          'เซ็นชื่อทุกครั้งที่เบิก และค้นประวัติย้อนหลังได้',
          'ส่งข้อมูลต่อให้รายงาน Power BI ดูปริมาณการใช้และต้นทุน',
        ],
        tech: ['Power Apps', 'SharePoint', 'Power Fx', 'Power BI'],
      },
      {
        id: 'qa-leak-log',
        title: 'ฐานข้อมูลบันทึกรอยรั่ว QA',
        category: 'ข้อมูลและฐานข้อมูล',
        year: '2569',
        summary: 'ย้ายบันทึกรอยรั่วจากสเปรดชีตและฟอร์มที่กระจายอยู่หลายที่ มารวมเป็นฐานข้อมูลเดียว',
        highlights: [
          'สำรวจข้อมูลใบสั่งผลิตหลายพันรายการ และบันทึกรอยรั่วหลายร้อยรายการ',
          'พบและสรุปปัญหาคุณภาพข้อมูล เช่น วันที่เป็นปี พ.ศ. และเลขศูนย์นำหน้าหาย',
          'ออกแบบตารางข้อมูลหลัก การผลิต บันทึก QA และประวัติการแก้ไข',
          'กำหนดกฎตรวจสอบข้อมูล เช่น เลขซีเรียลต้องอยู่ในช่วงที่ออกให้',
        ],
        tech: ['SQL', 'Data modeling', 'Excel', 'Google Sheets'],
      },
      {
        id: 'portfolio',
        title: 'เว็บพอร์ตโฟลิโอ',
        category: 'เว็บ',
        year: '2569',
        summary: 'เว็บนี้เอง พอร์ตโฟลิโอสองภาษาที่สร้างด้วย React และ Tailwind CSS',
        highlights: [
          'สลับภาษาไทยและอังกฤษได้ โดยเก็บข้อความทั้งหมดไว้ในไฟล์เนื้อหาที่กำหนดชนิดข้อมูลไว้',
          'แสดงรายละเอียดผลงานในป๊อปอัปที่รองรับการเข้าถึง',
          'ปิดแอนิเมชันให้อัตโนมัติเมื่อผู้ใช้ตั้งค่าลดการเคลื่อนไหว',
          'เผยแพร่บน GitHub Pages',
        ],
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
        codeUrl: 'https://github.com/Jirawat05/my-portfolio',
        demoUrl: 'https://jirawat05.github.io/my-portfolio/',
      },
    ],
  },

  certificates: {
    title: 'ใบรับรอง',
    viewCredential: 'ดูใบรับรอง',
    items: [],
  },

  contact: {
    title: 'มาคุยกัน',
    subtitle: 'พร้อมรับโอกาสฝึกงานและงานระดับเริ่มต้น',
    emailLabel: 'ส่งอีเมลหาผม',
    copyEmail: 'คัดลอกอีเมล',
    copied: 'คัดลอกแล้ว',
  },
}

export default th
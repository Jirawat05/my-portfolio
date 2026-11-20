import { useLanguage } from '../i18n/useLanguage'
import { profile } from '../content/profile'

export function Avatar() {
  const { t } = useLanguage()

  // มีรูป: แสดงรูป
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={t.hero.name}
        width={128}
        height={128}
        className="mx-auto mb-10 h-32 w-32 rounded-full object-cover shadow-sm ring-4 ring-white motion-safe:animate-rise"
      />
    )
  }

  // ไม่มีรูป: วงแหวนสีหมุน + ตัวอักษรแรกของชื่อ
  return (
    <div className="relative mx-auto mb-10 h-32 w-32 rounded-full shadow-sm motion-safe:animate-rise">
      {/* วงแหวนสี: ของตกแต่ง จึงซ่อนจากโปรแกรมอ่านหน้าจอ */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[conic-gradient(#0071e3,#a855f7,#ec4899,#f59e0b,#22d3ee,#34c759,#0071e3)] motion-safe:animate-[spin_8s_linear_infinite]"
      />
      {/* วงกลมขาวด้านใน: อยู่นอกวงแหวน จึงไม่หมุนตาม */}
      <div className="absolute inset-[3px] flex items-center justify-center rounded-full bg-white text-5xl font-semibold">
        {t.hero.name.charAt(0)}
      </div>
    </div>
  )
}

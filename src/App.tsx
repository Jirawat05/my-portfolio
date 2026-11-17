function App() {
  return (
    <main className="min-h-screen bg-mist flex items-center justify-center px-6">
      <section className="max-w-3xl text-center">
        <p className="text-xl text-muted">สวัสดีครับ ผมชื่อ</p>
        <h1 className="mt-2 text-6xl md:text-8xl font-semibold tracking-tight">
          Jirawat
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-muted">
          นักศึกษาสหกิจ ที่ชอบสร้างเครื่องมือให้งานง่ายขึ้น
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#projects"
             className="rounded-full bg-accent px-6 py-3 text-white transition-colors hover:bg-accent-hover">
            ดูผลงาน
          </a>
          <a href="#contact"
             className="rounded-full px-6 py-3 text-link ring-1 ring-link transition-colors hover:bg-link hover:text-white">
            ติดต่อ
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
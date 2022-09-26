import CalendarLayout from "../calendar/calendar-layout";

function Home() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Easy Tasks Manager</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

          <div className="px-4 py-6 sm:px-0">
            <CalendarLayout />
          </div>

        </div>
      </main>
    </>
  )
}

export default Home;
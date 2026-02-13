import { useState } from 'react'
import workoutImage from './assets/workout_option_image.jpeg'
import massageImage from './assets/massage_option_image.jpg'
import ayotomiImage from './assets/ayotomi_stuff.jpeg'
import valentineYesImage from './assets/valentine_yes.jpeg'
import valentineNoImage from './assets/valentine_no.jpeg'

function App() {
  const [screen, setScreen] = useState('landing')

  const plans = [
    {
      title: 'Working Out',
      image: workoutImage,
      text: 'Start the day doing one of the things we enjoy doing best.',
      alt: 'Couple workout mirror selfie',
    },
    {
      title: 'Massage',
      image: massageImage,
      text: "You've had a long week. Let the professionals take care of you :)",
      alt: 'Relaxing massage experience',
    },
    {
      title: "We'd do some Ayotomi stuff",
      image: ayotomiImage,
      text: "We'd go to Orca and then Imani Vintage for some shopping :)",
      alt: 'Stylish date night picture',
    },
  ]

  if (screen === 'no') {
    return (
      <main className="flex min-h-screen items-center justify-center px-5 py-10">
        <section className="w-full max-w-xl rounded-3xl border border-red-200 bg-white p-8 text-center shadow-lg shadow-red-100">
          <h1 className="text-3xl font-bold text-red-600 sm:text-4xl">Error 404</h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-700">
            Reply not accepted. Go back and press the right thing before I knock you.
          </p>
          <button
            type="button"
            onClick={() => setScreen('landing')}
            className="mt-8 inline-flex rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Go Back
          </button>
        </section>
      </main>
    )
  }

  if (screen === 'yes') {
    return (
      <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        <section className="rounded-3xl border border-rose-100 bg-white/90 p-6 shadow-xl shadow-rose-100 backdrop-blur sm:p-10">
          <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight text-rose-700 sm:text-4xl lg:text-5xl">
            Thank you my sunshine for saying yes! Let&apos;s have a day of love and see what I&apos;ve
            planned for us.
          </h1>
          <p className="mt-4 text-center text-sm text-slate-600 sm:text-base">
            A little journey made just for us.
          </p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className="overflow-hidden rounded-3xl border border-rose-100 bg-white shadow-md shadow-rose-100/60 transition hover:-translate-y-1"
            >
              <img src={plan.image} alt={plan.alt} className="h-72 w-full object-cover sm:h-80" />
              <div className="p-5 sm:p-6">
                <h2 className="text-2xl font-bold text-slate-900">{plan.title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{plan.text}</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setScreen('landing')}
            className="inline-flex rounded-full border border-rose-300 bg-white px-6 py-3 text-sm font-semibold text-rose-700 transition hover:bg-rose-50"
          >
            Back to Start
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-4 py-8 sm:px-6 sm:py-12">
      <section className="w-full rounded-3xl border border-rose-100 bg-white/90 p-5 shadow-xl shadow-rose-100 backdrop-blur sm:p-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
          Valentine Invite
        </p>
        <h1 className="mx-auto mt-3 max-w-3xl text-center text-4xl font-bold text-slate-900 sm:text-5xl">
          Will you be my Valentine?
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600 sm:text-base">
          Choose one card. Choose wisely.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          <button
            type="button"
            onClick={() => setScreen('yes')}
            className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
          >
            <img
              src={valentineYesImage}
              alt="Yes option"
              className="h-80 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96"
            />
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl font-semibold text-emerald-700">Yes</h2>
              <p className="mt-2 text-sm text-slate-600">Tap here if you&apos;re ready for love day plans.</p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setScreen('no')}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500"
          >
            <img
              src={valentineNoImage}
              alt="No option"
              className="h-80 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-96"
            />
            <div className="p-4 sm:p-5">
              <h2 className="text-2xl font-semibold text-slate-800">No</h2>
              <p className="mt-2 text-sm text-slate-600">
                This button exists, but it might not be wise to pick it.
              </p>
            </div>
          </button>
        </div>
      </section>
    </main>
  )
}

export default App

import './App.css'

const App = () => {
  return (
    <>
      <main className="main flex flex-col items-center w-[1425px] h-[843px]">
        <h1 className="title text-7xl mt-10">The Kris Kurzawa Group Plays</h1>
        <h1 className="title text-9xl mb-20">Jimi Hendrix</h1>
        <h2 className="featuring text-5xl mb-5">Feautring:</h2>
        <article className='flex gap-20'>
          <h3 className='kenny text-6xl'>Kenny Watson</h3>
          <h3 className='mark text-6xl'>Mark Harper</h3>
        </article>
        <article className='flex gap-20 mb-20'>
          <h3 className='todd text-6xl'>Todd Glass</h3>
          <h3 className='john text-6xl'>John Barron</h3>
        </article>
        <h4 className="date text-4xl mb-2">March 22, 2025</h4>
        <h4 className="time text-4xl mb-2">8:30pm</h4>
        <h4 className="venue text-4xl mb-2">At the Cadiuex Cafe</h4>
        <h4 className="cover text-4xl">$20</h4>
      </main>
      <img src="/Jimi2.jpeg" alt="jimi" className="jimi-pic w-[1500px] absolute top-0 left-0" />

      <div className="shape-one absolute w-36 h-36 rounded-full"></div>
      <div className="shape-two absolute w-20 h-20 rounded-full"></div>
      <div className="shape-three absolute w-20 h-20 rounded-full"></div>
      <div className="shape-four absolute w-48 h-48 rounded-full"></div>
      <div className="shape-five absolute w-72 h-72 rounded-full"></div>
    </>
  )
}

export default App
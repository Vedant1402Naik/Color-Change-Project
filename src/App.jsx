import { useState } from 'react'

import './App.css'

function App() {
  const defaultColor = 'beige'
  const [color, setColor] = useState('defaultColor')
  const handleClick = () => {
    setColor(prevColor => prevColor === defaultColor ? '' : defaultColor);
  };

  return (
    <>
      <div className='w-full h-screen'
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className=' flex flex-wrap justify-center gap-4 shadow-lg bg-slate-400 rounded-2xl px-4 py-1 mx-4'>
            <button className='border outline-none px-4 rounded-xl m-1 text-white shadow-lg' style={{ backgroundColor: "darkred" }} onClick={() => { setColor('darkred') }} >
              darkred
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 text-white shadow-lg' style={{ backgroundColor: "fuchsia" }} onClick={() => { setColor('fuchsia') }} >
              fuchsia
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 text-white shadow-lg' style={{ backgroundColor: "cadetblue" }} onClick={() => { setColor('cadetblue') }}>
              cadetblue
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 text-white shadow-lg' style={{ backgroundColor: "darkolivegreen" }} onClick={() => { setColor('darkolivegreen') }}>
              darkolivegreen
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 text-black shadow-lg' style={{ backgroundColor: "lightcyan" }} onClick={() => { setColor('lightcyan') }}>
              lightcyan
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 shadow-lg text-black' style={{ backgroundColor: "lightpink" }} onClick={() => setColor('lightpink')}>
              lightpink
            </button>

            <button className='border outline-none px-4 rounded-xl m-1 ttext-black shadow-lg' style={{ backgroundColor: "sandybrown" }} onClick={() => setColor('sandybrown')} >
              sandybrown
            </button>
          </div>


        </div>


      </div>

    </>
  )
}

export default App

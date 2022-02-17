import Head from 'next/head'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2d242f] text-white select-none flex flex-col justify-between`
}

export default function Home() {
  return (
   <div className={style.wrapper}> 
   <h2>Hello</h2> 
   </div>
  )
}

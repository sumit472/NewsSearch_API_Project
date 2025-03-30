import React, { useEffect, useState } from 'react'
import Card from './Card'

const NewsPaper = () => {
  const [value, setValue] = useState('')
  const [newsData, setNewsData] = useState(null)
  const API_KEY = '43967ac530364367be020d2d6d31acd2';
  const fetchingData = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${value}&apiKey=${API_KEY}`);
      const data = await response.json()
      // console.log(data)
      setNewsData(data.articles)

    } catch (error) {
      console.log(error)
    }
  }
  const handlerInputValue = (e) => {
    setValue(e.target.value)
  }

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl italic font-bold ml-20">NewsPaper</a>
        </div>
        <div><h1 className='font-bold'>All Trending News</h1></div>
        <div className='flex md:ml-20 space-x-4'>
          <input type="text" placeholder="Type here" className="input md:w-80" value={value} onChange={(e) => setValue(e.target.value)} />
          <a className="btn rounded-md" onClick={fetchingData}>Search</a>
        </div>
      </div>
      <div className='mt-5 mb-5'>
        <h1 className='text-center font-bold text-3xl'>Stay Update With Trendy News</h1>
      </div>
      <div className='space-x-7 flex justify-center mt-2'>
        <button className='bg-amber-500 px-6 py-1 font-semibold rounded-2xl hover:bg-amber-700 duration-200 cursor-pointer' value={"Sports"} onClick={handlerInputValue}>Sports</button>
        <button className='bg-amber-500 px-6 py-1 font-semibold rounded-2xl hover:bg-amber-700 duration-200 cursor-pointer' value={"Politics"} onClick={handlerInputValue}>Politics</button>
        <button className='bg-amber-500 px-6 py-1 font-semibold rounded-2xl hover:bg-amber-700 duration-200 cursor-pointer' value={"Entertainment"} onClick={handlerInputValue}>Entertainment</button>
        <button className='bg-amber-500 px-6 py-1 font-semibold rounded-2xl hover:bg-amber-700 duration-200 cursor-pointer' value={"Health"} onClick={handlerInputValue}>Health</button>
        <button className='bg-amber-500 px-6 py-1 font-semibold rounded-2xl hover:bg-amber-700 duration-200 cursor-pointer' onClick={handlerInputValue} value={"Fitness"}>Fitness</button>
      </div>
      <div className='flex justify-center items-center flex-wrap mt-10 space-x-7 space-y-5'>
        {newsData ? <Card data={newsData} /> : null}

      </div>
    </div>
  )
}

export default NewsPaper
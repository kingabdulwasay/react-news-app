
import './App.css'
import News from './News/News'
function App() {

  return (
    <>

     <header class="text-gray-400 bg-gray-900 body-font">
  <div style={{width: "100%", flexDirection:"row"}} class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

 <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>


      <span class="ml-3 text-xl">News App of King AWR</span>

    </a>


    <nav style={{width:"50%"}} class="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
  
    </nav>

  </div>
</header>
     <News />
     <footer class="text-gray-400 bg-gray-900 body-font">
  <div style={{width:"100%", flexDirection:"row"}} class="container px-5 py-8 mx-auto flex items-center sm:flex-row">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">News App</span>
    </a>
    <p class=" text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2024 Created by Abdul Wasay Rais
      {/* <p class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</p> */}
    </p>
   
  </div>
</footer>
     

    </>
  )
}

export default App

import axios from 'axios';
import React, { useEffect, useState } from 'react'

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() =>{
      const getNews = async () => {
        const options = {
            method: 'GET',
            url: 'https://real-time-news-data.p.rapidapi.com/search',
            params: {
              query: 'latest',
              limit: '500',
              time_published: 'anytime',
              country: 'US',
              lang: 'en'
            },
            headers: {
              'x-rapidapi-key': '0fc119891cmshb9a616a8d975b40p1a5257jsn30617a50bb1b',
              'x-rapidapi-host': 'real-time-news-data.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              setNews(response.data.data)
          } catch (error) {
              console.error(error);
          }
    }
    getNews();
    },[]);
  return (
    <>
    <section class="text-gray-400 bg-gray-900 body-font">
  <div style={{width: "100%"}} class=" container px-5 py-24 mx-auto">
   
        <div class="flex flex-wrap -m-4">
        {
            news.map((data)=>{
                return(
                    <div class="p-4 md:w-1/3">
                    <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                      <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={data.photo_url} alt="blog"/>
                      <div class="p-6">
                        <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">{data.publisher}</h2>
                        <h1 class="title-font text-lg font-medium text-white mb-3">{data.title}</h1>
                        <p class="leading-relaxed mb-3">{data.snippet}</p>
                        <div class="flex items-center flex-wrap ">
                          <a href={data.link} target='_blank' class="text-blue-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                        
                        </div>
                      </div>
                    </div>
                  </div>
                )
            })
        }
 
 
    </div> 
    
   
  </div>
</section>
    </>
  )
}

export default News
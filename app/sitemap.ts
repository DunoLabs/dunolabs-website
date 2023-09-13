export default function sitemap (){
     const baseUrl = 'https://www.dunolabs.in'
     return [
          {
               url : baseUrl,
               lastModified : new Date().toISOString(),
          }
     ]
}
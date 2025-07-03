import { createRoot } from 'react-dom/client'


function homePage(){
  return <h1>Hello World</h1>
}

createRoot(document.getElementById('root')).render(
  homePage()
)
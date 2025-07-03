import { createRoot } from 'react-dom/client'

const root= createRoot(document.getElementById('root'))

function HomePage(){
  return (
  <div>
    <h1>Hello World</h1>
    <h1>Hello World</h1>
    </div>
  )
}

root.render(
  <div>
  <HomePage/>
  <HomePage/>
  <HomePage/>
  <HomePage/>
  </div>
)
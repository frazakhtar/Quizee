

export default function NavBar():any {

  const test= document.getElementById('test')
  test?.addEventListener('click',()=>{
    console.log('clicked')
  })

return `<button id = "test">Hello from navbar</button>`

}
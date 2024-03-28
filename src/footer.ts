

export default function Footer():any { 

    const test1= document.getElementById('test1')
    test1?.addEventListener('click',()=>{
      console.log('clicked')
    })
  return `<button id='test1'>Hello from footer</button>`
  
  }


export default function makeResizableDiv(divClass: string, resizerClass: string) {
    const element = document.querySelector<HTMLElement>('.'+divClass) 
    const resizers = document.querySelector<HTMLElement>('.'+resizerClass) 
    resizers?.addEventListener('mousedown', function(e) {
        e.preventDefault()
        window.addEventListener('mousemove', resize)
        window.addEventListener('mouseup', stopResize)
      
    })
    function resize(e:any,) {
        if (element) {
            element.style.width = e.pageX - element.getBoundingClientRect().left + 'px'
        }
    }
    
    function stopResize() {
      window.removeEventListener('mousemove', resize)
    }
  }
  
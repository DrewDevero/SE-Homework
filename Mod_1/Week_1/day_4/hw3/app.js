// work coppied from student-examples folder as per canvas assignment instructions

$(()=>{
    const $tiles = $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active')  
    })
})




    const mainimg= document.getElementById("mainimg");
  const smallimg =document.getElementsByClassName("small-img");
              
          smallimg[0].onclick = function(){
                mainimg.src =smallimg[1].src;
          }
          smallimg[1].onclick = function(){
             mainimg.src =smallimg[2].src;
            }
            smallimg[2].onclick = function(){
                mainimg.src =smallimg[3].src;
            }
            // smallimg[3].onclick = function(){
            //     mainimg.src =smallimg[0].src;
            // }
            
        //    let readMoreBtn =document.querySelector(".read-more-btn");
        //    let text = document.querySelector(".text");

        //    readMoreBtn.addEventListener('click',(e)=>{
        //     text.classList.toggle ('show-more')
        //    })
        var doc= document.querySelector('p')
doc.classList = 'head1'
console.log('doc');
doc.classList = 'head font' // stylecss

doc.addEventListener('click', ()=>{
    doc.innerText='sed corrupti, impedit quos excepturi eos, eligendi doloribus iste consequuntur odit! Illo natus illum ratione facere, repudiandae ea molestiae aspernatur nemo, et sequi, saepe dolorum doloremque at numquam a veritatis quaerat ipsa accusamus sed adipisci optio qui fugiat. Eligendi tempora, repellendus ratione aut quo distinctio necessitatibus laborum quod obcaecati possimus, explicabo qui velit ut accusantium suscipit? Nostrum modi nihil, ea quidem distinctio nesciunt ut placeat explicabo non iste ab, id omnis enim consequatur? Recusandae cumque quidem sequi expedita, similique eaque et atque repudiandae dicta ratione obcaecati consequuntur voluptates pariatur... read more'
doc.classList = 'head font'})
doc.classList='font'

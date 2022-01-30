console.log("welcome")

const imgbox=document.querySelector('.imgbox');
const whiteboxes=document.getElementsByClassName('whitebox');

imgbox.addEventListener('dragstart',(e)=>{
    console.log("drag started");
    e.target.className +=' hold';
setTimeout(() => {
    e.target.className=' hide'
}, 0);

})

imgbox.addEventListener('dragend',(e)=>{
    console.log("drag End")
e.target.className='imgbox'


})

for(whitebox of whiteboxes){
    whitebox.addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("drag over");

    })


    whitebox.addEventListener('dragenter',(e)=>{
        console.log("drag enter");
e.target.className+=' dashed'

    })


    whitebox.addEventListener('dragleave',(e)=>{
        console.log("drag leave");
e.target.className=' whitebox';
    })



    whitebox.addEventListener('drop',(e)=>{
        console.log(" drop");
e.target.append(imgbox);

    })



}

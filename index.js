// SIDEBAR 
const menuItem = document.querySelectorAll('.menu-item')

const messageNotification=document.querySelector('#messages-notification') 
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')

const messageSerach = document.querySelector('#message-serch')


// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = ()=>{
    menuItem.forEach(item=>item.classList.remove('active'))
}



// console.log(menuItem);
menuItem.forEach(item=>item.addEventListener('click',()=>{
    changeActiveItem();
    item.classList.add('active')
    if(item.id !='notifications'){
        document.querySelector('.notification-popup').style.display ="none"
    }
    else{
            document.querySelector('.notification-popup').style.display="block"
            document.querySelector('#notifications .notification-count').style.display = 'none'
    }
}
))


// ==============MESSAGE===========

// search chats
const searchMessage =()=>{
    // const val = messageSerach.value.toLowerCase();
    const val = messageSerach.value.toLowerCase()
    console.log(val);
    
    message.forEach(chat=>{
        let name= chat.querySelectorAll('h5').textContent.toLocaleLowerCase()
        if(name.indexOf(val) != -1){
            chat.style.display ="flex"
        }           
        else{
            chat.style.display="none"
        }
    })
    
}

// search chat
messageSerach.addEventListener('keyup',searchMessage)


messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)'
    messageNotification.querySelector('.notification-count').style.display='none'
    setTimeout(()=>{
        messages.style.boxShadow = "none"
    },2000)
})



// // SIDEBAR
// const menuItems = document.querySelectorAll('.menu-item')
// console.log(menuItems);





// // REMOVE THE ACTIVE CLASS 
// const changerActiveItem = ()=>{
//    menuItems.forEach(item=>item.classList.remove('active'))
// }

// menuItems.forEach(item=>item.addEventListener('click',()=>{

//     changerActiveItem()
//     item.classList.add('active')
// }))

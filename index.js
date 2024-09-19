// SIDEBAR 
const menuItem = document.querySelectorAll('.menu-item')

const messageNotification=document.querySelector('#messages-notification') 
const messages = document.querySelector('.messages')
const message = document.querySelectorAll('.message')

const messageSerach = document.querySelector('#message-serch')

// theme
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSize = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPalette = document.querySelectorAll('.choose-color span')

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


// THEME/DISPLAY CUSTOMIZATION

// open modal
const openThemeModal =()=>{
    themeModal.style.display="grid";
}

// close modal
const closeThemeModal =(e)=>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display="none"
    }
}
themeModal.addEventListener('click',closeThemeModal)

theme.addEventListener('click',openThemeModal)



// ================== FONTS ===================
// remove active class from span or font size selctor
const removeSizeSelector =()=>{
    fontSize.forEach((size)=>{
          size.classList.remove('active')
    })
}
fontSize.forEach((size)=>{
    size.addEventListener('click',()=>{
         removeSizeSelector()
         let fontSize;
         size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize = "10px"
            root.style.setProperty(' --sticky-top-left','5.4')
            root.style.setProperty(' --sticky-top-right','5.4')
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = "13px"
            root.style.setProperty(' --sticky-top-left','5.4')
            root.style.setProperty(' --sticky-top-right','-7rem')
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = "16px"
            root.style.setProperty(' --sticky-top-left','-2rem')
            root.style.setProperty(' --sticky-top-right','-17rem')
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = "19px"
            root.style.setProperty(' --sticky-top-left','-5rem')
            root.style.setProperty(' --sticky-top-right','-25rem')
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = "22px"
            root.style.setProperty(' --sticky-top-left','-10rem')
            root.style.setProperty(' --sticky-top-right','5rem')
        }
        // chnage font size of the root html
        document.querySelector('html').style.fontSize =fontSize
     })

})

// remove active class from colors
const changeActiveColorClass = ()=>{
    colorPalette.forEach((colorPicker)=>{
        colorPicker.classList.remove('active')
    })
}
// change primary color
colorPalette.forEach((color)=>{
    color.addEventListener('click',()=>{
        let primary;
        changeActiveColorClass()
        if(color.classList.contains('color-1')){
            primaryHue=252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue=52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue=352
        }
        else if(color.classList.contains('color-4')){
            primaryHue=152
        }
        else if(color.classList.contains('color-5')){
            primaryHue=202
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue)
    })
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

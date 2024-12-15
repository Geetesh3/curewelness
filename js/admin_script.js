let header = document.querySelector('.header');

document.querySelector('#menu-btn').onclick = () =>{
   header.classList.toggle('active');
}

window.onscroll = () =>{
   header.classList.remove('active');
}

document.querySelectorAll('.posts-content').forEach(content => {
   if(content.innerHTML.length > 100) content.innerHTML = content.innerHTML.slice(0, 100);
});
CKEDITOR.replace('content', {
   toolbar: [
       { name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike'] },
       { name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent'] },
       { name: 'links', items: ['Link', 'Unlink'] },
       { name: 'insert', items: ['Image', 'Table'] }
   ],
   height: 300
});

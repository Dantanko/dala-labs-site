
(function(){
 const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const toggle=document.querySelector('[data-nav-toggle]'), menu=document.querySelector('[data-mobile-menu]');
 if(toggle&&menu){toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')))}
 const els=document.querySelectorAll('.reveal');
 if(!reduce&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});els.forEach(e=>io.observe(e))}else els.forEach(e=>e.classList.add('visible'));
 const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
 const form=document.querySelector('[data-contact-form]');if(form){form.addEventListener('submit',e=>{e.preventDefault();const note=form.querySelector('[data-form-note]');note.textContent='This static build has no submission endpoint configured yet. The form is intentionally non-fabricated until a real contact channel is provided.';note.setAttribute('role','status')})}
})();


document.addEventListener('DOMContentLoaded', function(){
  const target = document.getElementById('api-result');
  const reload = document.getElementById('reload');
  function fetchData(){
    if(target) target.innerText = 'Loading...';
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(r=>r.json())
      .then(data=>{
        if(target) target.innerHTML = '<h4>'+escapeHtml(data.title)+'</h4><p>'+escapeHtml(data.body)+'</p>';
      })
      .catch(err=>{
        if(target) target.innerText = 'API fetch failed: '+err;
      });
  }
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[m]; }); }
  fetchData();
  if(reload) reload.addEventListener('click', fetchData);

  // simple contact form handler (non-destructive)
  const form = document.getElementById('contact-form');
  const res = document.getElementById('form-result');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const data = new FormData(form);
      res.innerText = 'Submitting... (this is a demo, no data is sent)';
      setTimeout(()=>{ res.innerText = 'Thank you, ' + (data.get('name')||'') + '. Message not actually sent in demo.'; }, 700);
    });
  }
});

document.querySelector('#addBtn').addEventListener('click', addBurger);

async function addBurger() {
  const input = document.querySelector('#burgerInput').value;
  console.log('Reading input: ', input);
  // reject empty string
  if (input === '') return;
  // send data to server
  const res = await fetch(`/burger`, { 
    method:'POST',
    headers: { 'Content-Type': 'application/JSON' },
    body: `{ \"input\": \"${input}\" }`
  }).then( r => r.json());
  console.log(res.message);
  // empty input & reload list
  document.querySelector('#burgerInput').value = '';
  loadList();
}


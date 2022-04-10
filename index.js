
function handleClick() {

  let copiedBP = JSON.parse(JSON.stringify(bootstrap));
  resultArea.value = " "
  let pageCode = document.getElementById('codeArea').value;
  const classes = pageCode.split(' ');

  if (classes.length > 0) {
    for (k in copiedBP) {
      for (let j = 0; j < classes.length; j++) {
        if (classes[j].search(k) >= 0) {
          console.log(k, "found")
          resultArea.value += copiedBP[k];
          copiedBP[k]=" ";
        }
      }
    }
  } else {
    resultArea.value = " "
  }




}


function switchDark() {
  document.getElementById('codeArea').classList.toggle('bg-dark')
  document.getElementById('resultArea').classList.toggle('bg-dark')
  document.getElementById('mainBody').classList.toggle('bg-dark')
  if (document.getElementById('darkModeBtn').classList.contains('fa-moon')) {

    document.getElementById('darkModeBtn').classList.remove('fa-moon')
    document.getElementById('darkModeBtn').classList.add('fa-sun')
  } else {
    document.getElementById('darkModeBtn').classList.remove('fa-sun')
    document.getElementById('darkModeBtn').classList.add('fa-moon')
  }
  if (document.getElementById('slideBtn').classList.contains('btn-outline-dark')) {

    document.getElementById('darkModeBtn').classList.remove('btn-outline-dark')
    document.getElementById('darkModeBtn').classList.add('btn-outline-light')
  } else {
    document.getElementById('darkModeBtn').classList.remove('btn-outline-light')
    document.getElementById('darkModeBtn').classList.add('btn-outline-dark')
  }
  document.getElementById('appBody').classList.toggle('text-white')
  document.getElementById('codeArea').classList.toggle('text-white')
  document.getElementById('resultArea').classList.toggle('text-white')
  document.getElementById('home').classList.toggle('text-white')



}
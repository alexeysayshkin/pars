(function play() {
  const timeOut = 500;
  let buttonRun = document.getElementById("buttonRun");
  let codes = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8], i, j, x, y;
  for (y = codes.length; y;) { j = Math.floor(Math.random() * y); x = codes[--y]; codes[y] = codes[j]; codes[j] = x; }
  for (j = 0; j < 16; j++) document.getElementById('pole').innerHTML += '<button color="' + codes[j] + '" class="color' + codes[j] + ' hidden">' + codes[j] + '</button>';
  let check = false, selcolor = 0, sela, steps = 0, open = 0, timer, button = document.getElementsByTagName('button');
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (e) {
      let el = e.target;

      if (el.className.indexOf('hidden') > -1) {
        steps++;
        el.className = el.className.replace('hidden', '');
        setTimeout(() => {
          if (check) {
            check = false;
            if (el.getAttribute('color') == selcolor) {
              open++;
              if (open == 8) { buttonRun.classList.add('active') };

            }
            else {
              sela.className += ' hidden'; el.className += ' hidden';
            }
          }
          else {
            selcolor = el.getAttribute('color'); sela = el; check = true;
          }
        }, timeOut);
      }

    });
  }
})();

buttonRun.addEventListener('click', function () {
  location.reload();
})

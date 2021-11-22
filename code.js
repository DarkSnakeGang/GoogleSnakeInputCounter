if(window.snake)snake.count_inputs = function() {
  const a = new Image();
  a.src = 'https://www.google.com/logos/fnbx/snake_arcade/keys.svg';
  a.width = a.height = 25;
  a.style = 'position:relative;left:460px;top:11.5px;';

  window.________b = document.createElement('div');
  ________b.style = 'width:25px;position:relative;left:490px;top:-24px;font-size:20px;font-family:Roboto,Arial,sans-serif;'

  document.getElementsByClassName('sEOCsb')[0].appendChild(a);
  document.getElementsByClassName('sEOCsb')[0].appendChild(________b);

  window._____inputs = 0;
  const scripts = document.getElementsByTagName('script');
  for(let script of scripts) {
    const req = new XMLHttpRequest();
    req.open('GET', script.src);
    req.onload = function() {
      const code = this.responseText;
      if(code.indexOf('#A2') === -1)return;

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,7}\.prototype\.reset=function\(\){var a=this;[^]*?resetState\(\)}\)}/
        )[0].replace(
          '{',
          `{
            window.________b.innerHTML = window._____inputs = 0;
          `
        )
      );

      eval(
        code.match(
          /[a-zA-Z0-9_$]{1,7}=function\(a,b\){if\(![^}]*?=!1}}/
        )[0].replace(
          '{',
          `{
            if(b !== a.direction) { window.________b.innerHTML = ++window._____inputs; }
          `
        )
      );
    };
    req.send();
  }
};

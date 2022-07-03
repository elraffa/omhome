function w3_open() {
  var x = document.getElementById('myAccordion');
  if (x.style.display === 'none') {
    x.style.display = 'block';
    if (document.getElementById('navbtn_menu')) {
      document
        .getElementById('navbtn_menu')
        .getElementsByTagName('i')[0].style.display = 'none';
      document
        .getElementById('navbtn_menu')
        .getElementsByTagName('i')[1].style.display = 'inline';
    }
  } else {
    x.style.display = 'none';
    if (document.getElementById('navbtn_menu')) {
      document
        .getElementById('navbtn_menu')
        .getElementsByTagName('i')[0].style.display = 'inline';
      document
        .getElementById('navbtn_menu')
        .getElementsByTagName('i')[1].style.display = 'none';
    }
  }
}
function w3_close() {
  document.getElementById('myAccordion').style.display = 'none';
}
function open_xs_menu(x) {
  if (document.getElementById('sectionxs_' + x).innerHTML == '') {
    document.getElementById('sectionxs_' + x).innerHTML =
      document.getElementById('nav_' + x).innerHTML;
  } else {
    document.getElementById('sectionxs_' + x).innerHTML = '';
  }
}

function om_open_nav(x) {
  if (document.getElementById('nav_' + x).style.display == 'block') {
    om_close_nav(x);
  } else {
    om_close_nav('cursos');
    om_close_nav('aprendizaje');
    om_close_nav('listening');
    om_close_nav('servicios');
    document.getElementById('nav_' + x).style.display = 'block';

    if (document.getElementById('navbtn_' + x)) {
      document
        .getElementById('navbtn_' + x)
        .getElementsByTagName('i')[0].style.display = 'none';
      document
        .getElementById('navbtn_' + x)
        .getElementsByTagName('i')[1].style.display = 'inline';
      document.getElementById('navbtn_' + x).classList.add('navbtn_active');
    }
  }
}

function om_close_nav(x) {
  document.getElementById('nav_' + x).style.display = 'none';
  if (document.getElementById('navbtn_' + x)) {
    document
      .getElementById('navbtn_' + x)
      .getElementsByTagName('i')[0].style.display = 'inline';
    document
      .getElementById('navbtn_' + x)
      .getElementsByTagName('i')[1].style.display = 'none';
    document.getElementById('navbtn_' + x).classList.remove('navbtn_active');
  }
}

function om_close_all_nav() {
  om_close_nav('cursos');
  om_close_nav('aprendizaje');
  om_close_nav('listening');
  om_close_nav('servicios');
  om_close();
}

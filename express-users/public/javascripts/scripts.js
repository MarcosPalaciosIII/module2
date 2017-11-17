const images = [
  "../images/tardis1.gif",
  "../images/tardis2.gif",
  "../images/tardis3.gif"
];



var url = window.location.href.split('/');
var divClass = '';
switch(url) {
    case 'http://localhost:3000/signup':
    divClass ='signUp';
      break;

    case '/login':
    divClass ='logIn';
      break;

    default:
    divClass ='homepage';
      break;
}

$("#layoutBody").addClass(divClass);

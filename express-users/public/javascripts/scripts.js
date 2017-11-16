const images = [
  "../images/tardis1.gif",
  "../images/tardis2.gif",
  "../images/tardis3.gif"
];

switch (location.pathname()) {
    case "/":
    $("body").attr("src", iamges[0]);
    break;
    case "/signup":
    $("body").attr("src", iamges[1]);
    break;
    case "/login":
    $("body").attr("src", iamges[2]);
    break;
    default:
    break;
}

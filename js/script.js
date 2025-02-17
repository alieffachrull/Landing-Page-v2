function sendMessage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const projectDetails = document.getElementById("projectDetails").value;
  const budget = document.getElementById("budget").value;
  const timeline = document.getElementById("timeline").value;

  const url =
    "https://api.whatsapp.com/send?phone=6285824054165&text=Hallo%20alieffchrull%0AI%20am%20*" +
    name +
    "*%0Amy%20email%20*" +
    email +
    "*%0Amy%20project%20details%20is%20*" +
    projectDetails +
    "*%0Aso%20I%20have%20budget%20*" +
    budget +
    "*%0Aand%20the%20timeline%20*" +
    timeline +
    "*%0A%0Acan%20you%20help%20me%3F%0A%0A";

  window.open(url);
}

var infoArray = [
  "Життя - це як велетеньське колесо, іноді ти вгорі, іноді ти внизу, але завжди рухаєшся вперед.",
  "Будьте зміною, яку ви хочете бачити в світі.",
  "Світ - це сцена, і всі люди просто актори.",
  "Найскладніше почати діяти, все інше залежить тільки від наполегливості",
  "Найбільший секрет життя - в тому, щоб постійно цікавитися.",
  "Будьте самим собою; всі інші вже зайняті.",
  "Ви отримаєте все в житті, що хочете, якщо дозволите іншим отримати те, що вони хочуть.",
  "Людина - це те, що вона думає.",
];

function getRandomInfo() {
  var randomIndex = Math.floor(Math.random() * infoArray.length);
  return infoArray[randomIndex];
}

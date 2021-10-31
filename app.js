/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

// blue är likamed false. På rad 12 hämtar jag diven som jag vill ändra bakgrundsfärg på. I min function så gör jag en if sats som kollar statusen på blue.
// Sedan vad som händer är att on click så kommer värdet ändras till true och den får backrunsfärgen blå.Annars blir den false och får bakgrundsfärgen vit.
let blue = false;

function taskOne() {
  const divWindow = document.getElementById("answer-one");
  if (blue === false) {
    blue = true;
    divWindow.style.backgroundColor = "blue";
  } else {
    blue = false;
    divWindow.style.backgroundColor = "white";
  }
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];

function taskTwo() {
  const divWindowTwo = document.getElementById("answer-two"); // Jag börjar med att hämta Diven och ger den namnet divWindowTwo
  const theMath = Math.random() * 1000; // Här skapar jag en const med namnet theMath som är likamed en function "Math.Random" som ger mig en siffra mellan 0 och 1 * med 1000. För att jag vill ha en siffra mellan 1000 och inte 0 till 1.
  const theRounder = Math.round(theMath); // Här skapar jag en const med namnet "theRounder" som är kopplat till en funktion som rundar av siffror, för att undvika massa decimaler.
  numbers.push(theRounder); // Här pushar jag theRounder till numbers arrayen.
  divWindowTwo.innerHTML = numbers; // Här skriver jag ut numbers i divWindowTwo.
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
  const date = new Date(); // Här skapar jag en const som har funktionen new Date. Den skapar ett datumobjekt med dagens datum.
  const theDay = date.getDay(); // Här skapar jag en const som heter theDay och den använder sig av const date för att hämta dag.

  if (theDay === 0 || theDay === 6) {
    //Här skapar jag en enkel if/else sats. Där om dagen är 0 vilket är söndag, eller dag 6 vilket är lördag så ska ett alert meddelande skickas ut.
    alert("Wohoo it's weekend");
  } else {
    // Om inte dagen är Lördag (6) eller Söndag (0) så blir det else "FML" på resterande dagar.
    alert("FML");
  }
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {
  // Här skapar jag en funktion som heter multiplier och den tar emot två värden, valueOne och valueTwo.
  if (typeof valueOne === "number" && typeof valueTwo === "number") {
    // Här kollar jag om valueOne och valueTwo är nummer
    const theMath = valueOne * valueTwo; // Här skapar jag en const som heter theMath som är valueOne * valueTwo
    alert("The result is: " + theMath); // Här skapar jag ett alertmeddelande + resultatet av const theMath.
  } else {
    alert("I can only multiply with numbers"); // Om det inte är några siffror involverade så skickas denna alert ut istället.
  }
}

function taskFour() {
  multiplier(5, 10); // Här anropar jag multiplier och förser dom med värden som senare multipliceras med varandra.
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  const divElement = document.getElementById("answer-five"); // Jag hämtar divelementet "answer-five"

  fruits.forEach((fruitItem) => {
    //Jag skapar en forEach loop som koller igenom alla items i array fruits.
    if (fruitItem === "apelsin" || fruitItem === "päron") {
      // OM frukten är apelsin eller päron så pushar jag det till trash array.
      trash.push(fruitItem);
    } else {
      // Annars om de inte är frukt "apelsin" eller "päron" så skickas det till eatable arrayen.
      eatable.push(fruitItem);
    }
  });
  divElement.innerHTML = // Här skapar jag en textsträng i innerHTML med "Eatable" och "Trash" i bold. Där lägger jag också till "+" array.
    "Eatable: ".bold() + eatable + "<br>" + "Trash: ".bold() + trash;
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  const divElement = document.getElementById("answer-six"); // Jag hämtar divelementet "answer-six"
  persons.forEach((aboutPerson) => {
    //Jag skapar en forEach loop som koller igenom alla items i persons array och jag döper varje item till aboutPerson.
    if (aboutPerson.age < 30) {
      // Jag skapar en if sats för att kolla om aboutPerson är under 30, om aboutPerson är under 30 så pushar jag till underThirty array.
      underThirty.push(aboutPerson.name);
    } else {
      // Om item inte är under 30 så sker istället en push till overThirty array.
      overThirty.push(aboutPerson.name);
    }
    if (aboutPerson.married === true) {
      // Jag kollar om married status är === true. Om den är true på aboutPerson så pushar jag till married array.
      married.push(aboutPerson.name);
    } else {
      // Om inte true, så pushar jag istället till notMarried array.
      notMarried.push(aboutPerson.name);
    }
  });
  divElement.innerHTML = // Här skapar jag en textsträng med de olika information gällande array och precis som förut lägger jag till .bold() funktion.
    "Under 30: ".bold() +
    underThirty +
    "<br>" +
    "Over 30: ".bold() +
    overThirty +
    "<br>" +
    "Married: ".bold() +
    married +
    "<br>" +
    "Not married: ".bold() +
    notMarried;
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  const divElement = document.getElementById("answer-seven"); // Jag hämtar divelementet "answer-seven"
  const lineBreak = addMeSomeLineBreaks.split(","); // Jag skapar en const som tar variabeln "addMeSomeLineBreaks" och lägger till funktionen split() som delar upp strängen på varje ","
  divElement.innerHTML = lineBreak; // Här lägger jag till det i div elementet så det blir synligt.
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  const divElement = document.getElementById("card-eight"); // Jag hämtar divelementet "answer-eight"
  divElement.style.display = "none"; // Här sitter jag diven till display "none" när man trycker på knappen.
  setTimeout(function () {
    // Här skapar jag en function som tar tillbaka diven till display "block" efter 3 sekunder.
    divElement.style.display = "block";
  }, 3000);
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  const divElement = document.getElementsByClassName("answer-container"); // Här hämtar jag alla divar med klassen "answer-container"
  const date = new Date(); // Här skapar jag ett date object
  const theHour = date.getHours(); //Här använder jag mig av date objectet för att kolla tid.
  for (let item of divElement) {
    // Här skapar jag en for loop där jag kollar alla "item" av divElement.
    if (theHour < 17) {
      // Här sätter jag en regel där jag säger att om klockan är mindre än 17 vill jag att alla "item" till divElement ska få bakgrundsfärgen röd. Annars blå.
      item.style.backgroundColor = "red";
    } else {
      item.style.backgroundColor = "blue";
    }
  }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  if (typeof valueOne === "number" && typeof valueTwo === "number") {
    // Här kollar jag om typeof valueOne och typeof valueTwo är likamed "number"
    switch (
      operator // Här skapar jag en switch, beroende på vad min operator ska göra
    ) {
      case "add": // Om operator är likamed "add", då ska den räkna ut add.
        const add = valueOne + valueTwo;
        alert("This is the result: " + add); // Här lägger jag till add
        break;
      case "subtract":
        const subtract = valueOne - valueTwo;
        alert("This is the result: " + subtract); // Här lägger jag till subtract
        break;
      case "multiply":
        const multiply = valueOne * valueTwo;
        alert("This is the result: " + multiply); // Här lägger jag till multiply
        break;
      case "divide":
        const divide = valueOne / valueTwo;
        alert("This is the result: " + divide); // Här lägger jag till divide
        break;

      default:
        alert("Something is wrong"); // Om operator inte har något av de ovanstående att jobba med, så skickas denna alert som default
        break;
    }
  } else {
    alert("I can only do math with numbers"); // När valueOne och valueTwo inte är numbers.
  }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(5, 5, "divide"); // Här skickar jag in vad jag ska räkna ut. (valueOne, valueTwo, "case")
}

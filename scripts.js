let j = 0;
let j2 = 0;
let type = 0;
const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${month}-${day}-${year}`;
console.log(currentDate); // "17-6-2022"

function type_change(x) {
  type = x;
  colorIteration();
  return type;
}

//Check if Spacebar is pressed
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {

    document.getElementById("pressSpace").style.display = "none";

    if (j == 0) {
      document.getElementById("firstColor").style.paddingTop = "20%";

    }


    colorIteration();
  }
})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction(button_select) {
  document.getElementById("myDropdown" + button_select).classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function display1() {
  j = 0;
  j2 = 4;
  colorIteration();

  document.getElementById("random_Color_0").style.textAlign = "center";
  document.getElementById("firstColor").style.paddingTop = "20%";

  document.getElementById("random_Color_0").style.display = "block";
  document.getElementById("random_Color_1").style.display = "none";
  document.getElementById("random_Color_2").style.display = "none";
  document.getElementById("random_Color_3").style.display = "none";
  document.getElementById("random_Color_4").style.display = "none";

  document.getElementById("dropbuttons").style.height = "10vh";
  document.getElementById("dropbuttons2").style.height = "10vh";
  document.getElementById("dropbuttons3").style.height = "10vh";

  return j;
}

function display2() {
  j = 1;
  j2 = 2;
  colorIteration();

  document.getElementById("firstColor").style.paddingTop = "0%";

  document.getElementById("random_Color_0").style.textAlign = "left";
  document.getElementById("random_Color_1").style.textAlign = "left";
  document.getElementById("random_Color_2").style.textAlign = "left";
  document.getElementById("random_Color_3").style.textAlign = "left";
  document.getElementById("random_Color_4").style.textAlign = "left";

  document.getElementById("random_Color_0").style.display = "block";
  document.getElementById("random_Color_1").style.display = "block";
  document.getElementById("random_Color_2").style.display = "none";
  document.getElementById("random_Color_3").style.display = "none";
  document.getElementById("random_Color_4").style.display = "none";

  document.getElementById("dropbuttons").style.height = "10vh";
  document.getElementById("dropbuttons2").style.height = "10vh";
  document.getElementById("dropbuttons3").style.height = "10vh";

  return j;
}

function display3() {
  j = 2;
  j2 = 1.3333;
  colorIteration();
  document.getElementById("pressSpace").style.display = "none";

  document.getElementById("firstColor").style.paddingTop = "0%";

  document.getElementById("random_Color_1").style.fontSize = "medium";

  document.getElementById("random_Color_0").style.textAlign = "left";
  document.getElementById("random_Color_1").style.textAlign = "left";
  document.getElementById("random_Color_2").style.textAlign = "left";
  document.getElementById("random_Color_3").style.textAlign = "left";
  document.getElementById("random_Color_4").style.textAlign = "left";

  document.getElementById("random_Color_0").style.display = "block";
  document.getElementById("random_Color_1").style.display = "block";
  document.getElementById("random_Color_2").style.display = "block";
  document.getElementById("random_Color_3").style.display = "none";
  document.getElementById("random_Color_4").style.display = "none";

  document.getElementById("dropbuttons").style.height = "8vh";
  document.getElementById("dropbuttons2").style.height = "8vh";
  document.getElementById("dropbuttons3").style.height = "8vh";
  return j;
}

function display4() {
  j = 3;
  j2 = 1;
  colorIteration();

  document.getElementById("firstColor").style.paddingTop = "0%";

  document.getElementById("random_Color_1").style.fontSize = "medium";

  document.getElementById("random_Color_0").style.textAlign = "left";
  document.getElementById("random_Color_1").style.textAlign = "left";
  document.getElementById("random_Color_2").style.textAlign = "left";
  document.getElementById("random_Color_3").style.textAlign = "left";
  document.getElementById("random_Color_4").style.textAlign = "left";

  document.getElementById("random_Color_0").style.display = "block";
  document.getElementById("random_Color_1").style.display = "block";
  document.getElementById("random_Color_2").style.display = "block";
  document.getElementById("random_Color_3").style.display = "block";
  document.getElementById("random_Color_4").style.display = "none";

  //NavBar Buttons Resize
  document.getElementById("dropbuttons").style.height = "7vh";
  document.getElementById("dropbuttons2").style.height = "7vh";
  document.getElementById("dropbuttons3").style.height = "7vh";

  return j;
}

function display5() {
  j = 4;
  j2 = 0.8;
  colorIteration();

  document.getElementById("firstColor").style.paddingTop = "0%";

  // document.getElementById("random_Color_1").style.fontSize = "medium";

  document.getElementById("random_Color_0").style.textAlign = "left";
  document.getElementById("random_Color_1").style.textAlign = "left";
  document.getElementById("random_Color_2").style.textAlign = "left";
  document.getElementById("random_Color_3").style.textAlign = "left";
  document.getElementById("random_Color_4").style.textAlign = "left";

  document.getElementById("random_Color_0").style.display = "block";
  document.getElementById("random_Color_1").style.display = "block";
  document.getElementById("random_Color_2").style.display = "block";
  document.getElementById("random_Color_3").style.display = "block";
  document.getElementById("random_Color_4").style.display = "block";

  document.getElementById("colorName0").style.fontSize = "5vh";
  document.getElementById("colorName1").style.fontSize = "5vh";
  document.getElementById("colorName2").style.fontSize = "5vh";
  document.getElementById("colorName3").style.fontSize = "5vh";
  document.getElementById("colorName4").style.fontSize = "5vh";


  //NavBar Buttons Resize
  document.getElementById("dropbuttons").style.height = "5vh";
  document.getElementById("dropbuttons2").style.height = "5vh";
  document.getElementById("dropbuttons3").style.height = "5vh";

  return j;
}

//Get Random Number
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

//Converting RGB to HEX
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function colorIteration() {

  document.getElementById("startup").style.display = "none";

  var hex;
  var rgb;
  var R;
  var R2;
  var G;
  var G2;
  var B;
  var B2;
  var hexName;
  var diff = 255;
  var color;

  function randomColor(colorName, hexcode, RGB, randomColor) {
    var name = document.getElementById(colorName);
    var hex = document.getElementById(hexcode);
    var rgb = document.getElementById(RGB);

    var R = getRandomIntInclusive(0, 225);
    var G = getRandomIntInclusive(0, 225);
    var B = getRandomIntInclusive(0, 225);

    //fetch stuff
    let hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';

    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';


    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
      document.getElementById("navOptions").style.color = "white";

    }
    else {
      document.getElementById(randomColor).style.color = "black";
      document.getElementById("navOptions").style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B;

  }
  function randomWarmColor(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    R = getRandomIntInclusive(190, 225);
    G = getRandomIntInclusive(0, R);
    B = 0;
    // if (B => 0){
    //   G= 0;
    // }

    diff = Math.abs((R + G + B) - (R2 + G2 + B2));

    if (diff <= 300) {
      // R = getRandomIntInclusive(190, 225);
      // G = getRandomIntInclusive(45, R);
      // B = 0;
    }


    R2 = R;
    G2 = G;
    B2 = B;

    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';






    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';













    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
      document.getElementById("navOptions").style.color = "white";

    }
    else {
      document.getElementById(randomColor).style.color = "black";
      document.getElementById("navOptions").style.color = "black";


    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, diff, hex, name, rgb, hexName;

  }
  function randomCoolColor(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    R = getRandomIntInclusive(0, 235);
    G = getRandomIntInclusive(0, 235);
    B = getRandomIntInclusive(100, 235);

    if (G => 100 && G >= 235) {
      R = getRandomIntInclusive(0, 100);
    }


    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';






    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';













    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
    }
    else {
      document.getElementById(randomColor).style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, hex, name, rgb, hexName;

  }
  function randomPastelColor(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    R = getRandomIntInclusive(192, 255);
    G = getRandomIntInclusive(192, 255);
    B = getRandomIntInclusive(192, 128);

    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';






    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';













    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
    }
    else {
      document.getElementById(randomColor).style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, diff, hex, name, rgb, hexName;

  }
  function randomEarthToneColor(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    R = getRandomIntInclusive(10, 53);
    G = getRandomIntInclusive(10, R);
    B = getRandomIntInclusive(10, G);

    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';

    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
    }
    else {
      document.getElementById(randomColor).style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, diff, hex, name, rgb, hexName;

  }
  function randomEarthTone2Color(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    // color = getRandomIntInclusive(0,2);
    var color23 = getRandomIntInclusive(0, 2);
    if (color23 == 0) {
      console.log("this Is working")
      G = getRandomIntInclusive(125, 150);
      R = getRandomIntInclusive(90, G);
      B = getRandomIntInclusive(90, R);
    }
    else {
      R = getRandomIntInclusive(124, 150);
      G = getRandomIntInclusive(61, R);
      B = getRandomIntInclusive(61, G);



    }

    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';

    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
    }
    else {
      document.getElementById(randomColor).style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, diff, hex, name, rgb, hexName;

  }
  function randomEarthTone3Color(colorName, hexcode, RGB, randomColor) {
    let name = document.getElementById(colorName);
    hex = document.getElementById(hexcode);
    rgb = document.getElementById(RGB);

    let random = getRandomIntInclusive(0, 10);
    R = getRandomIntInclusive(124, 225);
    G = R + random;
    B = R + random;

    //fetch stuff
    hexName = rgbToHex(R, G, B);
    console.log(hexName);
    fetch('https://api.color.pizza/v1/?values=' + hexName)
      .then(response => {
        if (response.ok) {
          return response.json(); // Parse the response data as JSON 
        } else {
          throw new Error('API request failed');
        }
      })

      .then(data => {
        // Process the response data here 
        name.innerHTML = data.paletteTitle;
      })
      .catch(error => {
        // Handle any errors here 
        console.error(error); // Example: Logging the error to the console 
      });

    console.log(R, G, B);
    document.getElementById(randomColor).style.backgroundColor = 'rgb(' + R + ',' + G + ',' + B + ')';
    document.getElementById(randomColor).style.height = (100 / (j + 1)) + '%';

    //change color to white if dark 
    if (R + G + B / 2 <= 383) {
      document.getElementById(randomColor).style.color = "white";
    }
    else {
      document.getElementById(randomColor).style.color = "black";

    }

    //Change hexcode
    hex.innerHTML = '#' + rgbToHex(R, G, B);
    rgb.innerHTML = 'rgb( ' + R + ', ' + G + ', ' + B + ' )';

    return R, G, B, diff, hex, name, rgb, hexName;

  }
  //all colors are randomly generated at once
  for (i = 0; i <= 4; i++) {

    if (type == 0) {
      randomColor('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
    if (type == 1) {
      randomWarmColor('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
    if (type == 2) {
      randomCoolColor('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
    if (type == 3) {
      randomPastelColor('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }



  }
  //colors are generated in batches
  for (i = 0; i <= 1; i++) {
    if (type == 4) {
      randomEarthToneColor('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
  }
  for (i = 2; i <= 2; i++) {
    if (type == 4) {
      randomEarthTone3Color('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
  }
  for (i = 3; i <= 4; i++) {
    if (type == 4) {
      randomEarthTone2Color('colorName' + i, 'hexcode' + i, 'RGB' + i, 'random_Color_' + i);
    }
  }
}


// find user color
var userColor;

function getUserColor() {
  userColor = document.getElementById("head").value;
  console.log(userColor);
  return userColor;
}

var hexr;
var hexg;
var hexb;
var bigint;

//Converting HEX to RGB
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

let cmin, cmax, delta, h, s, l;
function RGBToHSL(RHSL, GHSL, BHSL) {

  //Make R, G, B values fractions of 1
  RHSL /= 255;
  GHSL /= 255;
  BHSL /= 255;

  //Find greatest and smallest channel values
   cmin = Math.min(RHSL, GHSL, BHSL);
   cmax = Math.max(RHSL, GHSL, BHSL);
   console.log(cmin, cmax);
   delta = cmax - cmin;
   h = 0, s = 0, l = 0;

  //Calculate Hue
  //No difference 
  if (delta == 0)
    h = 0;
  //Red is max 
  else if (cmax == RHSL)
    h = ((GHSL -BHSL) / delta) % 6;
  //Green is max
  else if (cmax == GHSL)
    h = (BHSL - RHSL) / delta + 2;
  //Blue is max
  else 
    h = (RHSL - GHSL) / delta + 4;

    h = Math.round(h * 60);

    //Make negatives hues positive behind 360 degrees
    if (h < 0)
    h += 360;

    //Calculate lightness
    l = (cmax + cmin) / 2;

    //Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
console.log(s);
    //Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return h, s, l;
}

var compR;
var compG;
var compB;
function complementaryColor() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

//Change complementary color
if (h >=180)
h-=180; 

else
h +=180;

  document.getElementById("complementaryColor").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

}

let h2, h3;
function SplitComplementaryColors() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor2").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

//Change complementary color
if (h >=180)
h-=180; 

else
h +=180;

//Split Color 1
h2 = h;

if (h2 >= 331)
h2 -= 330;

else 
h2 +=30;
  document.getElementById("complementaryColor2").style.backgroundColor = ("hsl("+h2+", "+s+"%, "+l+"%)");

  console.log("hsl("+h2+", "+s+"%, "+l+"%)");

//Split Color2
  h3 = h;

if (h3 <= 30){
  h3 -= 30;
  h3 = 360 - Math.abs(h3);
}


else 
h3 -=30;
  document.getElementById("SplitComplementaryColors").style.backgroundColor = ("hsl("+h3+", "+s+"%, "+l+"%)");

  console.log("hsl("+h3+", "+s+"%, "+l+"%)");

}
let l1, l2;
function monochromaticColors() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor3").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

  if(l > 60){
    l1 = l - 20;
  
  }
  else
  l1 = l + 20;

//Change monchromatic color 1
  document.getElementById("monochromaticColor").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l1+"%)");
  console.log("hsl("+h+", "+s+"%, "+l1+"%)");

  if(l > 60){
    l2 = l - 40;
  
  }
  else
  l2 = l + 40;

  document.getElementById("monochromaticColor2").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l2+"%)");
  console.log("hsl("+h+", "+s+"%, "+l2+"%)");


}

function AnalogousColors() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor4").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");



//Analogous Color 1
h2 = h;

if (h2 >= 331)
h2 -= 330;

else 
h2 +=30;
  document.getElementById("Analogous").style.backgroundColor = ("hsl("+h2+", "+s+"%, "+l+"%)");

  console.log("hsl("+h2+", "+s+"%, "+l+"%)");

//Analogous Color2
  h3 = h2;

if (h3 >= 361){
  h3 -= 30;
  h3 = 360 - Math.abs(h3);
}


else 
h3 +=30;
  document.getElementById("Analogous2").style.backgroundColor = ("hsl("+h3+", "+s+"%, "+l+"%)");

  console.log("hsl("+h3+", "+s+"%, "+l+"%)");

}
function triadColors() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor5").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

//Change complementary color
if (h >=180)
h-=180; 

else
h +=180;

//Triad Color 1
h2 = h;

if (h2 >= 241)
h2 -= 240;

else 
h2 +=60;
  document.getElementById("Triad").style.backgroundColor = ("hsl("+h2+", "+s+"%, "+l+"%)");

  console.log("hsl("+h2+", "+s+"%, "+l+"%)");

//Triad Color 2
  h3 = h;

if (h3 <= 120){
  h3 -= 120;
  h3 = 360 - Math.abs(h3);
}


else 
h3 -=60;
  document.getElementById("Triad2").style.backgroundColor = ("hsl("+h3+", "+s+"%, "+l+"%)");

  console.log("hsl("+h3+", "+s+"%, "+l+"%)");

}

let h4, h5;
function squareColors() {
  getUserColor();
  compR = Math.abs(255 - hexToRgb(userColor).r);
  compG = Math.abs(255 - hexToRgb(userColor).g);
  compB = Math.abs(255 - hexToRgb(userColor).b);
  console.log("rgb(" + compR + "," + compG + "," + compB + ")");
  // document.getElementById("complementaryColor").style.backgroundColor = ("rgb(" + compR + "," + compG + "," + compB + ")");

  RGBToHSL(hexToRgb(userColor).r, hexToRgb(userColor).g, hexToRgb(userColor).b);
  //Get normal base color
  document.getElementById("baseColor6").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

//Change other colors
if (h >180){
  h-=180; 

  document.getElementById("Square2").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

  h+=90;

  document.getElementById("Square").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)"); 

  h+=180;
  h4 = Math.abs(360 - h);

  document.getElementById("Square3").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h4+", "+s+"%, "+l+"%)"); 
}

else{
  h +=180;

  document.getElementById("Square2").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

  h -= 90;

  document.getElementById("Square").style.backgroundColor = ("hsl("+h+", "+s+"%, "+l+"%)");
  console.log("hsl("+h+", "+s+"%, "+l+"%)");

  h+= 180;
  console.log(h);
  console.log(h5);

  h5 = Math.abs(360 - h);

  console.log(h5);

  document.getElementById("Square3").style.backgroundColor = ("hsl("+h5+", "+s+"%, "+l+"%)");
  console.log("hsl("+h5+", "+s+"%, "+l+"%)");
}

for (var i=0; i<360; i++) {
  var color = document.createElement("span")
  color.setAttribute("id", "d" + i)
  color.style.backgroundColor = "hsl(" + i + ", 100%, 50%)"
  color.style.msTransform = "rotate(" + i + "deg)"
  color.style.webkitTransform = "rotate(" + i + "deg)"
  color.style.MozTransform = "rotate(" + i + "deg)"
  color.style.OTransform = "rotate(" + i + "deg)"
  color.style.transform = "rotate(" + i + "deg)"
  document.getElementById('colorwheel').appendChild(color)
};

}

// function draw()
//   {
// var canvas = document.getElementById('circle');
// if (canvas.getContext)
// {
// var ctx = canvas.getContext('2d'); 
// var X = canvas.width / 2;
// var Y = canvas.height / 2;
// var R = 45;
// ctx.beginPath();
// ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
// ctx.lineWidth = 25;
// ctx.strokeStyle = '#FF0000';
// ctx.stroke();
// }
// }
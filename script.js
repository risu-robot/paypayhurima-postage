document.getElementById("yamato").style.display = "none";
document.getElementById("yuubinn").style.display = "none";

function displayReset() {
  const x_css = document.getElementById('x-message');
  const y_css = document.getElementById('y-message');
  const z_css = document.getElementById('z-message');
  const mass_css = document.getElementById('mass-message');
  x_css.style.background = "white";
  x_css.style.borderColor = "gray";
  y_css.style.background = "white";
  y_css.style.borderColor = "gray";
  z_css.style.background = "white";
  z_css.style.borderColor = "gray";
  mass_css.style.background = "white";
  mass_css.style.borderColor = "gray";
  document.getElementById("yamato").style.display = "none";
  document.getElementById("yuubinn").style.display = "none";
  const output = "";
  const output2 = "";
  document.getElementById("output-message").innerHTML = output;
  document.getElementById("sub-message").innerHTML = output2;
}

function result() {
  const x_css = document.getElementById('x-message');
  const y_css = document.getElementById('y-message');
  const z_css = document.getElementById('z-message');
  const mass_css = document.getElementById('mass-message');
  x_css.style.background = "white";
  x_css.style.borderColor = "gray";
  y_css.style.background = "white";
  y_css.style.borderColor = "gray";
  z_css.style.background = "white";
  z_css.style.borderColor = "gray";
  mass_css.style.background = "white";
  mass_css.style.borderColor = "gray";
  document.getElementById("yamato").style.display = "none";
  document.getElementById("yuubinn").style.display = "none";
  let send = document.getElementById("how");
  let x = document.getElementById("x-message");
  let y = document.getElementById("y-message");
  let z = document.getElementById("z-message");
  let mass = document.getElementById("mass-message");
  send = Number(send.value);
  x = Number(x.value);
  y = Number(y.value);
  z = Number(z.value);
  mass = Number(mass.value);

  if (x > 0 && y > 0 && z > 0 && mass > 0) {
    let min = Math.min(x, y, z);
    let max = Math.max(x, y, z);
    let medium = x + y + z - max - min;

    if (min <= 3 && medium <= 22.8 && max <= 31.2 && mass <= 1000 && send == 0 || min <= 3 && medium <= 22.8 && max <= 31.2 && mass <= 1000 && send == 1) {
      const output = "170円 ネコポス";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 60 && min <= 3 && max <= 34 && mass <= 1000 && send == 0 || min + medium + max <= 60 && min <= 3 && max <= 34 && mass <= 1000 && send == 2) {
      const output = "175円 ゆうパケット";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 60 && max <= 34 && mass <= 2000 && send == 0 || min + medium + max <= 60 && max <= 34 && mass <= 2000 && send == 2) {
      const output = "180円 ゆうパケットポスト";
      const output2 = "発送用シール代を含む";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min <= 3 && medium <= 22.8 && max <= 32.7 && mass <= 2000 && send == 0 || min <= 3 && medium <= 22.8 && max <= 32.7 && mass <= 2000 && send == 2) {
      const output = "240円 ゆうパケットポスト";
      const output2 = "専用箱代を含む";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min <= 5 && medium <= 20 && max <= 25 && send == 0 || min <= 5 && medium <= 20 && max <= 25 && send == 1) {
      const output = "450円 宅急便コンパクト";
      const output2 = "専用BOX代を含む";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min <= 5 && medium <= 24.8 && max <= 34 && send == 0 || min <= 5 && medium <= 24.8 && max <= 34 && send == 1) {
      const output = "450円 宅急便コンパクト ※厚み注意";
      const output2 = "専用薄型BOX代を含む";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 60 && mass <= 2000 && send == 0 || min + medium + max <= 60 && mass <= 2000 && send == 1) {
      const output = "700円 宅急便 60サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 60 && mass <= 25000 && send == 0 || min + medium + max <= 60 && mass <= 25000 && send == 2) {
      const output = "700円 ゆうパック 60サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 5000 && send == 0 || min + medium + max <= 80 && mass <= 5000 && send == 1) {
      const output = "800円 宅急便 80サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 25000 && send == 0 || min + medium + max <= 80 && mass <= 25000 && send == 2) {
      const output = "800円 ゆうパック 80サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 100 && mass <= 10000 && send == 0 || min + medium + max <= 100 && mass <= 10000 && send == 1) {
      const output = "1000円 宅急便 100サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 100 && mass <= 25000 && send == 0 || min + medium + max <= 100 && mass <= 25000 && send == 2) {
      const output = "1000円 ゆうパック 100サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 120 && mass <= 15000 && send == 0 || min + medium + max <= 120 && mass <= 15000 && send == 1) {
      const output = "1100円 宅急便 120サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 120 && mass <= 25000 && send == 0 || min + medium + max <= 120 && mass <= 25000 && send == 2) {
      const output = "1100円 ゆうパック 120サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 140 && mass <= 20000 && send == 0 || min + medium + max <= 140 && mass <= 20000 && send == 1) {
      const output = "1300円 宅急便 140サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 140 && mass <= 25000 && send == 0 ||min + medium + max <= 140 && mass <= 25000 && send == 2) {
      const output = "1300円 ゆうパック 140サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 160 && mass <= 25000 && send == 0 || min + medium + max <= 160 && mass <= 25000 && send == 1) {
      const output = "1600円 宅急便 160サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yamato").style.display = "inline-block";
    } else if (min + medium + max <= 160 && mass <= 25000 && send == 0 || min + medium + max <= 160 && mass <= 25000 && send == 2) {
      const output = "1600円 ゆうパック 160サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 80 && mass <= 150000 && send == 0 || min + medium + max <= 80 && mass <= 150000 && send == 3) {
      const output = "1700円 おまかせ配送 80サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 170 && mass <= 25000 && send == 0 || min + medium + max <= 170 && mass <= 25000 && send == 2) {
      const output = "1800円 ゆうパック 170サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
      document.getElementById("yuubinn").style.display = "inline-block";
    } else if (min + medium + max <= 120 && mass <= 150000 && send == 0 || min + medium + max <= 120 && mass <= 150000 && send == 3) {
      const output = "2400円 おまかせ配送 120サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 160 && mass <= 150000 && send == 0 || min + medium + max <= 160 && mass <= 150000 && send == 3) {
      const output = "3400円 おまかせ配送 160サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 200 && mass <= 150000 && send == 0 || min + medium + max <= 200 && mass <= 150000 && send == 3) {
      const output = "5000円 おまかせ配送 200サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 250 && mass <= 150000 && send == 0 || min + medium + max <= 250 && mass <= 150000 && send == 3) {
      const output = "8600円 おまかせ配送 250サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 300 && mass <= 150000 && send == 0 || min + medium + max <= 300 && mass <= 150000 && send == 3) {
      const output = "12000円 おまかせ配送 300サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 350 && mass <= 150000 && send == 0 || min + medium + max <= 350 && mass <= 150000 && send == 3) {
      const output = "18500円 おまかせ配送 350サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 400 && mass <= 150000 && send == 0 || min + medium + max <= 400 && mass <= 150000 && send == 3) {
      const output = "25400円 おまかせ配送 400サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else if (min + medium + max <= 450 && mass <= 150000 && send == 0 || min + medium + max <= 450 && mass <= 150000 && send == 3) {
      const output = "33000円 おまかせ配送 450サイズ";
      const output2 = "";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    } else {
      const output = "規格外";
      const output2 = "サイズまたは質量が規格外です";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;
    }
  } else {
      const output = "Error";
      const output2 = "入力に誤りがあります";
      document.getElementById("output-message").innerHTML = output;
      document.getElementById("sub-message").innerHTML = output2;

    if (x <= 0) {
      const x_css = document.getElementById('x-message');
      x_css.style.background = "pink";
      x_css.style.borderColor = "red";
    }
    if (y <= 0) {
      const y_css = document.getElementById('y-message');
      y_css.style.background = "pink";
      y_css.style.borderColor = "red";
    }
    if (z <= 0) {
      const z_css = document.getElementById('z-message');
      z_css.style.background = "pink";
      z_css.style.borderColor = "red";
    }
    if (mass <= 0) {
      const mass_css = document.getElementById('mass-message');
      mass_css.style.background = "pink";
      mass_css.style.borderColor = "red";
    }
  }
}

console.log("GitHub Pages を使って公開しています ('ω')");

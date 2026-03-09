const n = 7;
let row_start = 0;
for (let i = n; i > 0; i--) {
  row_start += i;
}

for (let i = 0; i < n; i++) {
  if (i == 0) {
    row_start = row_start;
  } else if (i % 2 == 0) {
    row_start = row_start - (i / 2) * 4;
  } else {
    row_start = row_start - 1;
  }

  let curr = row_start;
  let str = "";

  for (let j = 0; j < i; j++) {
    str += "   ";
  }

  for (let j = i; j < n; j++) {
    str += `${curr}  `;

    if (j % 2 == 0) {
      curr -= Math.abs(i - j) * 2 + 2;
    } else {
      curr -= i * 2 + 1;
    }
  }

  console.log(str);
}

entries.forEach(function(element) {
  let moodsPos = [];
  let moodsNeg = [];
  let countPos = 0;
  let countNeg = 0;
  let label = element[0];
  element[1].forEach(function(element2) {
    if (
      element2.mood == "Happy" ||
      element2.mood == "Peaceful" ||
      element2.mood == "Thrilled"
    ) {
      var countPos = +1;
      moodsPos.push(element2.mood);
    } else {
      var countNeg = +1;
      moodsNeg.push(element2.mood);
    }
  });
  let linePos = `label: ${label}, y: ${countPos}, indexLabel: ${moodsPos}`;
  let lineNeg = `label: ${label}, y: ${countNrg}, indexLabel: ${moodsNeg}`;
  dataPos.push(linePos);
  dataNeg.push(lineNeg);
});

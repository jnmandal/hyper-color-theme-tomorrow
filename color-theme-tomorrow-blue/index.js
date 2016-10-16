function shadeColor(color, percent) {
  let R = parseInt(color.substring(1,3),16);
  let G = parseInt(color.substring(3,5),16);
  let B = parseInt(color.substring(5,7),16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R<255)?R:255;
  G = (G<255)?G:255;
  B = (B<255)?B:255;

  let RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  let GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  let BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

const colors = {
  // special colors
  background:  '#002451',
  currentLine: '#00346e',
  selection:   '#003f8e',
  foreground:  '#ffffff',
  comment:     '#7285b7',
  // base colors
  white:  '#ffffff',
  red:    '#ff9da4',
  orange: '#ffc58f',
  yellow: '#ffeead',
  green:  '#d1f1a9',
  aqua:   '#99ffff',
  blue:   '#bbdaff',
  purple: '#ebbbff'
};

const lightenPercent = 20;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    // terminal
    cursorColor:     colors.selection,
    foregroundColor: colors.foreground,
    backgroundColor: colors.background,
    borderColor:     colors.selection,
    // base colors
    colors: {
      black:   colors.currentLine,
      red:     colors.red,
      green:   colors.green,
      yellow:  colors.yellow,
      blue:    colors.blue,
      magenta: colors.purple,
      cyan:    colors.aqua,
      white:   colors.white,
      // light colors
      lightBlack:   shadeColor(colors.currentLine, lightenPercent),
      lightRed:     shadeColor(colors.red, lightenPercent),
      lightGreen:   shadeColor(colors.green, lightenPercent),
      lightYellow:  shadeColor(colors.yellow, lightenPercent),
      lightBlue:    shadeColor(colors.blue, lightenPercent),
      lightMagenta: shadeColor(colors.purple, lightenPercent),
      lightCyan:    shadeColor(colors.aqua, lightenPercent),
      lightWhite:   colors.white
    }
  });
}

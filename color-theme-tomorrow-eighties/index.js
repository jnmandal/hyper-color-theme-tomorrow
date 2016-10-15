function shadeColor(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

  return "#"+RR+GG+BB;
}

const colors = {
  // special colors
  background:  '#2d2d2d',
  currentLine: '#393939',
  selection:   '#515151',
  foreground:  '#cccccc',
  comment:     '#999999',
  // base colors
  white:  '#ffffff',
  red:    '#f2777a',
  orange: '#f99157',
  yellow: '#ffcc66',
  green:  '#99cc99',
  aqua:   '#66cccc',
  blue:   '#6699cc',
  purple: '#cc99cc'
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

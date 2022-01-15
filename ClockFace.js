;(function () {
  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');

    switch (Settings.Font) {
      case null:
      case undefined: g.setFont('Vector', 22); break;
      case 'custom':  break;
      default:        g.setFont(Settings.Font, Settings.FontScale || 1);
    }

    let roman = Settings.romanNumerals;

    g.setFontAlign(0,-1);
    g.drawString(roman ? 'XII' : '12', CenterX,CenterY-outerRadius);

    g.setFontAlign(1,0);
    g.drawString(roman ? 'III' : '3', CenterX+outerRadius,CenterY);

    g.setFontAlign(0,1);
    g.drawString(roman ? 'VI' : '6', CenterX,CenterY+outerRadius);

    g.setFontAlign(-1,0);
    g.drawString(roman ? 'IX' : '9', CenterX-outerRadius,CenterY);
  };
})();

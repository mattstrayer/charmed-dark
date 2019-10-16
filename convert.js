var fs = require('fs')
var ntc = require('./NameThatColor')
ntc.init()

function RGBAToHexA(r, g, b, a) {
    r = Math.round(r * 255).toString(16);
    g = Math.round(g * 255).toString(16);
    b = Math.round(b * 255).toString(16);
    a = Math.round(a * 255).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    if (a.length == 1)
        a = "0" + a;

    return "#" + r + g + b + a;
}

fs.readFile('./xcode/CharmedDark.xccolortheme', 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }
    let colors = new Set()
    var res = data.replace(/([0-9]*\.?[0-9]+[\s]?){4}/g, function (match) {
        let [r, g, b, a] = match.split(' ')
        let hex = RGBAToHexA(parseFloat(r), parseFloat(g), parseFloat(b), parseFloat(a))
        colors.add(hex)
        return hex
    })
    // console.log(colors)
    var namedColors = {}
    colors.forEach(c => {
        console.log(c)
        console.log(ntc.name(c.substring(0, 7)))
        namedColors[ntc.name(c.substring(0, 7))[1]] = c
    })
    console.log(namedColors)
    // fs.writeFile('./xcode/CharmedDark.xccolortheme-hex', res, 'utf8', function (err) {
    //     if (err) return console.log(err);
    // });
});
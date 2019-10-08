var fs = require('fs')

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
    var res = data.replace(/([0-9]*\.?[0-9]+[\s]?){4}/g, function (match) {
        let [r, g, b, a] = match.split(' ')
        let hex = RGBAToHexA(parseFloat(r), parseFloat(g), parseFloat(b), parseFloat(a))
        return hex
    })

    fs.writeFile('./xcode/CharmedDark.xccolortheme-hex', res, 'utf8', function (err) {
        if (err) return console.log(err);
    });
});
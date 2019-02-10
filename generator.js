const fs = require('fs');
const Handlebars = require('handlebars');
 const path = require('path');
// const doAsync = require('doasync');

// var source;

// doAsync(fs).readFile('./template.html')
//     .then((data) => console.log(data));

    // util = require("util");
    var content;
    console.log(content);
    fs.readFile("template.html", 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        const template = Handlebars.compile(data);
        const segments = ['current', 'lapsed', 'nondonor'];
        for (i=0;i<segments.length;i++){

        const contents = template(
          {
            title: 'Wohooo!',
            segment: segments[i]});

        fs.writeFile(`contents ${segments[i]}.html`, contents, err => {
            if (err) {
                return console.error(`Autsch! Failed to store template: ${err.message}.`);
            }

            console.log('Saved template!');
          })
        };
    });

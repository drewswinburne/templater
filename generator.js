const fs = require('fs');
const Handlebars = require('handlebars');
const segmentation = require('./segmentation');


fs.readFile("template.html", 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    const template = Handlebars.compile(data);

    Object.keys(segmentation.segments).forEach(seg =>  {
    const segment = segmentation.segments[seg]
    const contents = template(
      {
        segment: segment.name,
        url: segment.url,
        text: segment.text
      }
    );

    fs.writeFile(`contents ${segment.name}.html`, contents, err => {
        if (err) {
            return console.error(`Error! ${err.message}.`);
        }
        console.log('Saved template!', seg);
      })
    }
      )
});

const fs = require('fs');
const Handlebars = require('handlebars');

fs.readFile("template.html", 'utf8', function (err, data) {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    const template = Handlebars.compile(data);
    const control = 'control.html'
    const test = 'test.html'
    const segments = {
      currentC: {
        name: 'current control',
        url: `http://currenturl.com/${control}`
      },
      currentT: {
        name: 'current test',
        url: `http://currenturl.com/${test}`
      },
      lapsed: {
        name: 'lapsed',
        url: 'http://lapsedurl.com',
        text: 'renew'
      },
      nondonor: {
        name: 'nondonor',
        url: 'http://nondonorurl.com',
        text: 'join'
      }
    }

    Object.keys(segments).forEach((seg) =>  {
    const segment = segments[seg]
    const contents = template(
      {
        title: 'City of Hope',
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

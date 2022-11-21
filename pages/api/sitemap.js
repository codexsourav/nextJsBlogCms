import Postdata from "../../database/blogposts";
import fs from "fs";
import path from "path";
export default function handler(req, res) {
  let data = [];
  Postdata.find(
    { view: 1 },
    { content: 0, tags: 0, view: 0, _id: 0, title: 0, desc: 0 }
  )
    .then((result) => {
      for (let i = 0; i < result.length; i++) {
        const element = result[i];
        const date = new Date(element.date);
        data[i] = {
          url: {
            loc: "https://codexsourav.vercel.app/blog/" + element.uri,
            lastmod: date.toUTCString(),
          },
        };
      }

      function OBJtoXML(obj) {
        var xml = "";
        for (var prop in obj) {
          xml += "<" + prop + ">";
          if (Array.isArray(obj[prop])) {
            for (var array of obj[prop]) {
              // A real botch fix here
              xml += "</" + prop + ">";
              xml += "<" + prop + ">";

              xml += OBJtoXML(new Object(array));
            }
          } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
          } else {
            xml += obj[prop];
          }
          xml += "</" + prop + ">";
        }
        var xml = xml.replace(/<\/?[0-9]{1,}>/g, "");
        return xml;
      }

      if (data.length == result.length) {
        fs.writeFileSync(
          "./public/sitemap.xml",
          `<?xml version='1.0' encoding='UTF-8'?>
        <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>` +
            OBJtoXML(data) +
            `</urlset>`
        );

        res.setHeader("Content-Type", "text/xml");
        res.send(
          `<?xml version='1.0' encoding='UTF-8'?>
        <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>` +
            OBJtoXML(data) +
            `</urlset>`
        );
        res.end();
      }
    })
    .catch((err) => {
      res.send(err);
    });
}

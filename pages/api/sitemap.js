import fs from "fs";
import Postdata from "../../database/blogposts";

export default async function handler(req, res) {
  const data = await Postdata.find(
    { view: 1 },
    { content: 0, tags: 0, view: 0 }
  );

  let xml = `<?xml version='1.0' encoding='UTF-8'?>
  <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
  `;

  fs.writeFile("public/sitemap.xml", xml, function (err) {
    if (err) throw err;

    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      const datet = `${element.date.toString()}`;

      let xmldata = ` 
    <url>
        <loc>${process.env.HOST + "/post/" + element.uri}</loc>
        <lastmod>${datet}</lastmod>
    </url>
`;
      fs.appendFile("public/sitemap.xml", xmldata, function (err) {
        if (err) throw err;
      });
    }

    fs.appendFile("public/sitemap.xml", `</urlset>`, function (err) {
      if (err) throw err;
      res.send("Updated Sitemap");
    });
  });
}

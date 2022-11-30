import React from "react";

function sitemap(data) {
  return <div>sitemap</div>;
}
export async function getServerSideProps(context) {
  let options = {
    method: "GET",
    headers: {
      Accept: "*/*",
    },
  };

  const host = process.env.HOST;
  const data = await fetch(`${host}/api/posts`, options);
  const posts = await data.json();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  context.res.setHeader("Content-Type", "text/xml");
  context.res.write(xml);
  posts.map((e) => {
    context.res.write(`
        <url>
            <loc>${process.env.HOST + "/blog/" + e.uri}</loc>
            <lastmod>${e.date}</lastmod>
        </url>
    `);
  });

  context.res.write("</urlset>");
  context.res.end();
  return { props: {} };
}
export default sitemap;

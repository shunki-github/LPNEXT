import { BlogNum } from "@/lib/graphQl";

const generateSitemap = (blogList, origin) => {
  let xml = `
    <url>
    <loc>https://dev.oovo.app/</loc>
    <lastmod>2021-10-05</lastmod>
    </url>
    <url>
    <loc>https://dev.oovo.app/contact</loc>
    <lastmod>2021-10-05</lastmod>
    </url>
    <url>
    <loc>https://dev.oovo.app/blog</loc>
    <lastmod>2021-10-05</lastmod>
    </url>
    `;

  blogList.map((blogElm) => {
    xml += `<url>
        <loc>${origin + blogElm.location}</loc>
        <lastmod>${blogElm.lastMod}</lastmod>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${xml}
      </urlset>`;
};

export async function getServerSideProps({ res }) {
  const gqlBox = new BlogNum();
  const rawdata = await gqlBox.returnData();
  const dataList = rawdata.data.blogs;

  const blogdata = [];
  dataList.map((dataElm) => {
    let updatedAt = dataElm.updatedAt.split("T")[0];
    blogdata.push({ location: dataElm.blogNumber, lastMod: updatedAt });
  });

  res.setHeader("Content-Type", "text/xml");
  res.write(generateSitemap(blogdata, "http://dev.oovo.app/"));

  res.end();

  return {
    props: {},
  };
}

const SitemapIndex = () => null;
export default SitemapIndex;

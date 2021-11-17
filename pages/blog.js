/* eslint-disable */

import { useRouter } from "next/router";
import React from "react";
import { BlogList } from "@/lib/graphQl";

import {TempBlog} from "@/Templates/blogList.js";

export default function Blog(staticData) {
  const { locale, asPath } = useRouter();

  return <>{TempBlog(asPath, locale, staticData)}</>;
}

export async function getStaticProps(context) {
  const gqlBox = new BlogList(context.locale);
  const rawdata = await gqlBox.returnData();
  const blogs = rawdata.data.blogs;
  const popular = rawdata.data.popularBlogs;
  const category = rawdata.data.categories;

  return {
    props: {
      staticData: blogs,
      subPopular: popular,
      subCategory: category,
    },
    //staticData contains all
  };
}

/* eslint-disable */

import { useRouter } from "next/router";
import React from "react";

import {BlogElm , BlogList} from "../../lib/GraphQl"
import TempBlogDetail from "../../components/Templates/blog/id.js"


export default function Blog(staticData) {
  const { locale, asPath } = useRouter();

  return (
      <>
      { TempBlogDetail(asPath, locale, staticData)}
      </>
  );
}

export async function getStaticProps({ locale, params }) {
    const gqlBox = new BlogElm(locale, params.id)
    const rawdata = await gqlBox.returnData()
    const blogs = rawdata.data.blogs
    const popular = rawdata.data.popularBlogs
    const category = rawdata.data.categories

    return {
        props: {
        staticData: blogs,
        subPopular: popular,
        subCategory: category,
        },
    }
    }

export async function getStaticPaths({locales}) {
    const gqlBox = new BlogList('ja')
    const rawdata = await gqlBox.returnData()

    const allBlogs = rawdata.data.blogs

    let rawpaths = []

    locales.map((locale) => {
        allBlogs.map((blog) => {
        rawpaths.push({
            params: {
            id: `${blog.blogNumber}`
            },
            locale
        })
        })
    })

    return {
        //paths: allBlogs.map(( blog ) => `/blog/${blog.blogNumber}`) || [],
        paths: rawpaths || [],
        fallback: false,
    }
}

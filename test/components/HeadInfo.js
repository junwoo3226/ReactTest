import React from 'react'
import Head from 'next/head'


const HeadInfo = ({title,keyword,contents}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta keyword={keyword}/>
        <meta contents={contents}/>
    </Head>

  )
}

HeadInfo.defaultProp={
    title: "동물",
    keyword: "동물이름",
    contents: "동물이름"

}


export default HeadInfo
import Head from 'next/head';

const HeadInfo = ({title, keyword, contents}) => {
  return (
      <Head>
          <title>{title}</title>
          <meta keyword={keyword} />
          <meta contents={contents} />
      </Head>
  );
}

HeadInfo.defaultProps={
    title: '내블로그',
    keyword: '블로그 powered by Next js',
    contents: 'practice by Next js'
}

export default HeadInfo
import Head from 'next/head';
import React from 'react';

type MetaProps = {
  title: string;
  description: string;
  imageUrl?: string;
  timestamp?: string;
};

export function Meta({ title, description, imageUrl, timestamp }: MetaProps) {
  return (
    <Head>
      <title>Superlend - {title}</title>
      <meta name="description" content={description} key="description" />
      <meta property="og:title" content={`Superlend - ${title}`} key="title" />
      <meta property="og:description" content={description} key="ogdescription" />
      {imageUrl && <meta property="og:image" content={imageUrl} key="ogimage" />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} key="twitterimage" />}
      {imageUrl && <meta name="twitter:image:alt" content={`Superlend logo`} key="twitteralt" />}
      <meta name="twitter:site" content="@AaveAave" key="twittersite" />
      <meta
        property="twitter:card"
        content={imageUrl ? 'summary_large_image' : 'summary'}
        key="twittercard"
      />
      <meta name="twitter:title" content={title} key="twittertitle" />
      <meta name="twitter:description" content={description} key="twitterdescription" />
      {timestamp && <meta name="revised" content={timestamp} key="timestamp" />}
      <meta
        name="keywords"
        key="keywords"
        content="Decentralized Finance, DeFi, lending, borrowing, stablecoins, Ethereum, assets, erc-20, smart contracts, open finance, trustless"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#171715" />
      <meta name="theme-color" content="#FF5B00" />
    </Head>
  );
}

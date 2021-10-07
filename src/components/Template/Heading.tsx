import Head from "next/head";

import Title from "./Title";
interface HeadingProps {
  title: string;
  caption: string;
}

const Heading: React.FC<HeadingProps> = (props) => {
  const { title, caption } = props;
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Title title={title} caption={caption} />
      </div>
    </>
  );
};

export default Heading;

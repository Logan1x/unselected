import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>unselected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          <span className="font-light line-through">un</span>
          <a className="text-blue-600" href="https://nextjs.org">
            selected
          </a>
        </h1>

        <p className="mt-3 text-2xl">Let AI write your cover letter </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        a project by <a href="https://twitter.com/herkuch"> @herkuch</a> and{" "}
        <a href="https://twitter.com/parthpandyappp"> @parthpandyappp</a>
      </footer>
    </div>
  );
};

export default Home;

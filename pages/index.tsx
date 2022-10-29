import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>unselected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-medium text-blue-600 flex items-center">
          <span className="font-light line-through text-gray-500">un</span>
          <span className="bg-gray-200 p-1 rounded">selected</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 text-blue-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-blue-700"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </h1>

        <p className="mt-3 text-2xl text-gray-700">
          Let AI write your cover letter{" "}
        </p>
      </main>

      <footer className="flex h-24 w-full items-center justify-around border-t">
        <p>
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4">
            <a href="/about">about</a>
          </span>
        </p>
        <p>
          a project by{" "}
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4">
            <a href="https://twitter.com/herkuch"> @herkuch</a>
          </span>{" "}
          and{" "}
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4">
            <a href="https://twitter.com/parthpandyappp"> @parthpandyappp</a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Home;

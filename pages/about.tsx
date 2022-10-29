import Head from "next/head";

export default function about() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>unselected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <section>
          <h1 className="text-3xl text-gray-500">about</h1>

          <p className="mt-3 text-xl text-gray-700">
            Let AI write your cover letter{" "}
          </p>
        </section>
      </main>

      <footer className="flex h-24 w-full items-center justify-around border-t">
        <p>
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4">
            <a href="/">home</a>
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
}

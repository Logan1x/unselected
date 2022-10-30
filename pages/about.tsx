import Head from "next/head";

export default function about() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>unselected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-6 lg:px-20 text-center">
        <section className="w-full lg:w-2/4 text-justify">
          <h1 className="text-4xl text-gray-500 text-center">about</h1>

          <p className="mt-3 text-xl text-gray-700">
            Unselected is built using GPT3 (Generative Pre-trained Transformer
            3) which is an autoregressive language model that uses deep learning
            model text-davinci-002 to produce human-like text. The project is
            using constraint trail credentials from OpenAI whose API provides
            access to GPT3.
          </p>
          <p className="mt-3 text-xl text-gray-700">
            This project runs limited credit OpenAI API calls. If you want to{" "}
            <span className="border-b-2 border-gray-700 hover:bg-yellow-200">
              sponser
            </span>{" "}
            or{" "}
            <span className="border-b-2 border-gray-700 hover:bg-yellow-200">
              donate
            </span>{" "}
            your API keys to run this project longer, please connect with{" "}
            <span className="border-b-2 border-gray-700 hover:bg-yellow-200 cursor-pointer">
              <a href="https://twitter.com/herkuch"> Khushal</a>
            </span>{" "}
            or{" "}
            <span className="border-b-2 border-gray-700 hover:bg-yellow-200 cursor-pointer">
              <a href="https://twitter.com/parthpandyappp"> Parth</a>
            </span>
            .
          </p>
          <p className="mt-3 text-xl text-gray-700">
            To know more about this project, visit our{" "}
            <span className="border-b-2 border-gray-700 hover:bg-yellow-200 cursor-pointer">
              <a href="https://github.com/logan1x/unselected"> github</a>
            </span>{" "}
            repository.
          </p>
        </section>
      </main>

      <footer className="flex h-16 w-full items-center justify-around border-t text-sm lg:text-lg">
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

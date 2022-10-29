import Head from "next/head";
import { useReducer } from "react";
import type { NextPage } from "next";
import { Configuration, OpenAIApi } from "openai";
import { reducerFunc, initFunc } from "../reducers";

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducerFunc, initFunc);

  const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log(process.env["NEXT_PUBLIC_TEST_MODE"]);

    dispatch({ type: "OPENAI_OUTPUT", payload: "" });

    const promptString = `Write a cover letter to ${state.emailingTo} from ${state.yourName} for a ${state.roleName} job at ${state.companyName}. I have experience in ${state.experienceIn} I am excited about the job because ${state.excitedAboutJobBecause} I am passionate about ${state.passionateAbout}`;

    // const op = await openai.createCompletion({
    //   model: "text-davinci-002",
    //   prompt: promptString,
    //   temperature: 0.7,
    //   max_tokens: 2080,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });

    const op = {
      data: {
        choices: [
          {
            text: "\n\nDear Technical Hiring Manager,\n\nI am writing in …me and consideration.\n\nSincerely,\n\nKhushal Sharma",
          },
        ],
      },
    };

    console.log(op);

    const prompt = op.data.choices[0].text
      .split("\n")
      .map((str, i) => <p key={i}>{str}</p>);

    dispatch({
      type: "OPENAI_OUTPUT",
      payload: prompt,
    });
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>unselected</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center md:px-20 text-center">
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

        <p className="mt-3 text-2xl">Let AI write your cover letter </p>

        <div className="w-full lg:w-2/4 border border-slate-500 px-2 py-2 mx-4 my-4 rounded">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Google"
                value={state.companyName}
                onChange={(e) => {
                  dispatch({ type: "COMPANY_NAME", payload: e.target.value });
                }}
                className="border px-1 py-1 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                What role you are applying for?
              </label>
              <input
                type="text"
                placeholder="Machine Learning Engineer"
                value={state.roleName}
                onChange={(e) => {
                  dispatch({ type: "ROLE_NAME", payload: e.target.value });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                Who are you emailing?
              </label>
              <input
                type="text"
                placeholder="John Cena"
                value={state.emailingTo}
                onChange={(e) => {
                  dispatch({ type: "EMAILING_TO", payload: e.target.value });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                What is your name?
              </label>
              <input
                type="text"
                placeholder="Khushal Sharma"
                value={state.yourName}
                onChange={(e) => {
                  dispatch({ type: "YOUR_NAME", payload: e.target.value });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                I have experience in...
              </label>
              <input
                type="text"
                placeholder="natural language processing, fraud detection, statistical modeling, and machine learning algorithms."
                value={state.experienceIn}
                onChange={(e) => {
                  dispatch({ type: "EXPERIENCE_IN", payload: e.target.value });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                I am excited about the job because...
              </label>
              <input
                type="text"
                placeholder="this role will allow me to work on technically challenging problems and create impactful solutions while working with an innovative team."
                value={state.excitedAboutJobBecause}
                onChange={(e) => {
                  dispatch({
                    type: "EXCITED_ABOUT_JOB_BECAUSE",
                    payload: e.target.value,
                  });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <div className="flex flex-col items-start px-3 py-1 w-full">
              <label htmlFor="" className="text-xs text-gray-400">
                I am passionate about...
              </label>
              <input
                type="text"
                placeholder="solving problems at the intersection of technology and social good."
                value={state.passionateAbout}
                onChange={(e) => {
                  dispatch({
                    type: "PASSIONATE_ABOUT",
                    payload: e.target.value,
                  });
                }}
                className="border px-1 py-2 my-1 rounded bg-slate-100 w-full text-sm"
              />
            </div>
            <button
              type="submit"
              className="border border-blue-700 px-6 py-2 rounded transition ease-in-out delay-100 hover:bg-blue-700 hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="w-full lg:w-3/6 px-2 py-2 mx-2 my-4 rounded text-left">
          {state.openAIOutput.length > 0 ? state.openAIOutput : ""}
        </div>
      </main>

      <footer className="flex h-16 w-full items-center justify-around border-t">
        <p>
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4 transition ease-in-out delay-100">
            <a href="/about">about</a>
          </span>
        </p>
        <p>
          a project by{" "}
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4 transition ease-in-out delay-100">
            <a href="https://twitter.com/herkuch"> @herkuch</a>
          </span>{" "}
          and{" "}
          <span className="border-b-2 border-gray-700 hover:border-blue-600 hover:border-b-4 transition ease-in-out delay-100">
            <a href="https://twitter.com/parthpandyappp"> @parthpandyappp</a>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default Home;

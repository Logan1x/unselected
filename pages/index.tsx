import Head from "next/head";
import { useReducer, Fragment, useState } from "react";
import type { NextPage } from "next";
import { reducerFunc, initFunc } from "../reducers";

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducerFunc, initFunc);
  const [btnText, setBtnText] = useState("Copy to Clipboard");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    dispatch({
      type: "TOGGLE_LOADER",
    });

    dispatch({ type: "OPENAI_OUTPUT", payload: "" });
    dispatch({ type: "OPENAI_OUTPUT_COPY2CLIPBOARD", payload: "" });
    setBtnText("Copy to Clipboard");

    try {
      const response = await fetch("/api/generate-cover-letter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          emailingTo: state.emailingTo,
          yourName: state.yourName,
          roleName: state.roleName,
          companyName: state.companyName,
          experienceIn: state.experienceIn,
          excitedAboutJobBecause: state.excitedAboutJobBecause,
          passionateAbout: state.passionateAbout,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate cover letter");
      }

      const data = await response.json();

      const prompt = data.content
        ?.split("\n")
        .map((str, i) => <p key={i}>{str}</p>);

      dispatch({
        type: "OPENAI_OUTPUT_COPY2CLIPBOARD",
        payload: data.content,
      });

      dispatch({
        type: "OPENAI_OUTPUT",
        payload: prompt,
      });

      dispatch({
        type: "TOGGLE_LOADER",
      });
      dispatch({
        type: "TOGGLE_OUTPUT",
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: "TOGGLE_ERROR",
      });
    }
  };

  return (
    <Fragment>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>unselected</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex w-full flex-1 flex-col items-center justify-center px-2 md:px-20 text-center">
          <h1 className="text-3xl md:text-5xl font-medium text-blue-600 flex items-center">
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

          <p className="mt-3 text-lg md:text-2xl">
            Let AI write your cover letter{" "}
          </p>

          {!state.isError ? (
            state.loader ? (
              <div className="mt-6">
                <p>Loading...(takes 1-2 mins)</p>
              </div>
            ) : (
              <div className="w-full lg:w-2/4 border border-slate-500 px-2 py-2 mx-2 my-2 rounded">
                {state.renderResult ? (
                  <>
                    <div className="px-4 py-2 mx-2 my-4 rounded text-justify">
                      {state.openAIOutput.length > 0 ? state.openAIOutput : ""}
                    </div>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "TOGGLE_OUTPUT",
                        })
                      }
                      className="border border-blue-700 px-6 py-2 rounded transition ease-in-out delay-100 hover:bg-blue-700 hover:text-white"
                    >
                      Start Over
                    </button>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(
                          state.openAIOutputCopy2Clipboard
                        );
                        setBtnText("Copied!");
                      }}
                      className="mx-2 border border-blue-700 px-6 py-2 rounded transition ease-in-out delay-100 bg-blue-700 hover:bg-blue-600 text-white"
                    >
                      {btnText}
                    </button>
                  </>
                ) : (
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
                          dispatch({
                            type: "COMPANY_NAME",
                            payload: e.target.value,
                          });
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
                          dispatch({
                            type: "ROLE_NAME",
                            payload: e.target.value,
                          });
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
                          dispatch({
                            type: "EMAILING_TO",
                            payload: e.target.value,
                          });
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
                          dispatch({
                            type: "YOUR_NAME",
                            payload: e.target.value,
                          });
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
                          dispatch({
                            type: "EXPERIENCE_IN",
                            payload: e.target.value,
                          });
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
                )}
              </div>
            )
          ) : (
            <div className="mt-6 w-full lg:w-2/5 bg-red-300 px-2 py-6 text-xl rounded">
              <p>There is an error. Please try again later</p>
            </div>
          )}
        </main>

        <footer className="flex h-16 w-full items-center justify-around border-t text-sm lg:text-lg">
          <p className="flex gap-3">
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
    </Fragment>
  );
};

export default Home;

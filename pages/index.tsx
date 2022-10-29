import Head from "next/head";
import { useReducer } from "react";
import type { NextPage } from "next";
import { reducerFunc, initFunc } from "../reducers";

const Home: NextPage = () => {
  const [state, dispatch] = useReducer(reducerFunc, initFunc);
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

        <div className="w-2/5 border border-slate-500 p-2 py-2 mx-2 my-4 rounded">
          <form>
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
              className="border px-3 py-2 rounded transition ease-in-out delay-100 hover:bg-black hover:text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div>{state.openAIOutput.length > 0 ? state.openAIOutput : ""}</div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        a project by <a href="https://twitter.com/herkuch"> @herkuch</a> and{" "}
        <a href="https://twitter.com/parthpandyappp"> @parthpandyappp</a>
      </footer>
    </div>
  );
};

export default Home;

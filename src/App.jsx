import "./App.css";
import { Trans } from "@lingui/macro";

function App() {
  return (
    <>
      <header className="flex items-center justify-around">
        <div className="flex items-center gap-8 justify-center">
          <a className="hover:text-primary" href="/">
            <Trans> Home</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans> Courses</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans> About</Trans>
          </a>
          <a className="hover:text-primary" href="/">
            <Trans>Blog</Trans>
          </a>
        </div>
        <div className="flex items-center gap-8 justify-center">
          <button className="py-2 px-6 bg-primary rounded-lg text-white font-bold">
            {" "}
            <Trans> Log in</Trans>
          </button>
          <button className="py-2 px-6 bg-primary rounded-lg text-white font-bold">
            <Trans> Sign Up</Trans>
          </button>
        </div>
      </header>
      <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl font-bold pb-4 ">
          <Trans>Learning with Open Innovation MOOCs</Trans>
        </h1>
        <div className="text-xl leading-8">
          <Trans>
            Localisation follows after Internationalization it focus on the
            details of the translation process, it involves ensuring that the
            translated language reflects the culture of the user in terms of
            content, page displayed , text direction without losing it's
            original meaning.
          </Trans>
        </div>
      </main>
    </>
  );
}
export default App;
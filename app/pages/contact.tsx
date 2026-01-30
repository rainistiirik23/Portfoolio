import { HeaderBar } from "~/components/headerBar";
import { PageNavigationBar } from "~/components/pageNavigationBar";

export function Contact() {
  return (
    <>
      <head>
        <HeaderBar />
      </head>
      <main>
        <div>
          <ul>
            <li>
              <img src="" alt="github profile logo" />
            </li>
            <li>
              <img src="" alt="github profile linked in logo" />
            </li>
            <li>
              <img src="" alt="email logo" />
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <PageNavigationBar />
      </footer>
    </>
  );
}

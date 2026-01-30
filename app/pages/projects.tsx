import { HeaderBar } from "~/components/headerBar";
import { PageNavigationBar } from "~/components/pageNavigationBar";

export function Projects() {
  return (
    <>
      <head>
        <HeaderBar />
      </head>
      <main>
        <div>
          <h1>Projektid</h1>
        </div>
        <div>
          <ul>
            <li>
              <div>
                <h2>Title</h2>
                <p>description</p>
                <div>
                  <ul>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                    <li>html</li>
                  </ul>
                </div>
                <div>
                  <img src={undefined} alt="" />
                </div>
              </div>
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

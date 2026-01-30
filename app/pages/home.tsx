import { PageNavigationBar } from "~/components/pageNavigationBar";
import { HeaderBar } from "~/components/headerBar";
export function Welcome() {
  return (
    <>
      <head>
        <HeaderBar />
      </head>
      <main>
        <div>
          <h2>Minu nimi on Rainis</h2>
          <h2>Ma olen nooremtarkvaraarendaja</h2>
        </div>
        <div>
          <ul>
            <li>
              <img src={undefined} alt="github profile logo" />
            </li>
            <li>
              <img src={undefined} alt="github profile linked in logo" />
            </li>
            <li>
              <img src={undefined} alt="email logo" />
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

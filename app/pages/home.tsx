import { PageNavigationBar } from "~/components/pageNavigationBar";
import { HeaderNavigation } from "~/components/headerNavigation";
import { ReactSVG } from "react-svg";
import emailIcon from "~/src/assets/icons/email.svg";
import linkedInIcon from "~/src/assets/icons/LinkedIn.svg";
import githubIcon from "~/src/assets/icons/portfolio-github-repository-icon.svg";

export function Welcome() {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <div className="introduction-container">
          <div className="introduction-headers-container">
            <h2>Minu nimi on Rainis</h2>
            <h2 className="introduction-headers-second">
              Ma olen nooremtarkvaraarendaja
            </h2>
          </div>
          <div>
            <ul className="introduction-container-unordered-icon-links-list">
              <li>
                <ReactSVG src={linkedInIcon}></ReactSVG>
              </li>
              <li>
                <ReactSVG src={githubIcon}></ReactSVG>
              </li>
              <li>
                <ReactSVG src={emailIcon}></ReactSVG>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <PageNavigationBar />
    </>
  );
}

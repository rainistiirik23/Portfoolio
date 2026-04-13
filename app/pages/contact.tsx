import { ReactSVG } from "react-svg";
import { HeaderNavigation } from "~/components/headerNavigation";
import { PageNavigationBar } from "~/components/pageNavigationBar";
import githubIcon from "~/src/assets/icons/portfolio-github-repository-icon.svg";
import mailIcon from "~/src/assets/icons/email.svg";
import linkedInIcon from "~/src/assets/icons/LinkedIn.svg";
export function Contact() {
  return (
    <>
      <header>
        <HeaderNavigation />
      </header>
      <main>
        <div className="page-heading-container">
          <h1 className="page-heading">Soovite ühendust võtta?</h1>
        </div>
        <div className="contact-links-container">
          <ul className="contact-links-unordered-list">
            <li>
              <div className="contact-links-unordered-list-item-container">
                <ReactSVG className="contact-icon" src={githubIcon}></ReactSVG>
                <a href="https://github.com/rainistiirik23" target="_blank" className="contact-link">Github</a>
              </div>
            </li>
            <li>
              <div className="contact-links-unordered-list-item-container">
                <ReactSVG className="contact-icon" src={mailIcon}></ReactSVG>
                <span onClick={()=>{
                      navigator.clipboard.writeText("rainis.tiirik9@gmail.com")
                }}
                className="contact-link">rainis.tiirik9@gmail.com
                </span>
              </div>
            </li>
            <li>
              <div className="contact-links-unordered-list-item-container">
                <ReactSVG className="contact-icon" src={linkedInIcon}></ReactSVG>
                <a href="www.linkedin.com/in/rainis-ross-tiirik"  className="contact-link">LinkedIn</a>
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

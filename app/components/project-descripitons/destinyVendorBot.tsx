import { ReactSVG } from "react-svg";
import exitIcon from "~/src/assets/icons/exitIcon.svg";
import type { projectDescriptionProps } from "~/utils/types";
export function DestinyVendorBot(props: projectDescriptionProps) {
  return (
    <div className="project-description-container">
      <nav className="project-description-navigation">
        <ReactSVG
          onClick={() => {
            props.setSelectedProjectFunction(null);
          }}
          className="project-description-exit-button"
          src={exitIcon}
        ></ReactSVG>
      </nav>
      <div className="project-description-main-header-paragraph-container">
        <h1 className="project-description-main-header">main title</h1>
        <p className="project-description-main-paragraph">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
      <ul className="project-description-sub-header-paragraph-undordered-list">
        <li>
          <h2 className="project-description-sub-header">Sub title</h2>
          <p className="project-description-sub-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </li>
        <li>
          <h2 className="project-description-sub-header">Sub title</h2>
          <p className="project-description-sub-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </li>
        <li>
          <h2 className="project-description-sub-header">Sub title</h2>
          <p className="project-description-sub-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </li>
      </ul>
    </div>
  );
}

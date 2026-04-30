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
        <h1 className="project-description-main-header">Tutvustus</h1>
        <p className="project-description-main-paragraph">
          Projekt on seotud mänguga Destiny 2, kes on loonud Bungie.Selles mängus sa võitled tulnukate vastu,võitlemise käigus saab endale relvi.Isegi kui saad relvad kätte sinul ei pruugi olla selline versioon relvast, mis sulle võib meeldida.Relvadel on pergid ehk mõju tegurid, mis teevad relva efektiivsemaks:Lae relva kiiremini, tulista kiiremini ja/või pane kuulid plahvatama, põhimõte on see, et see teeb relva tugevamaks mitmel moel.Relval on ka "masterwork", kuid see ei ole nii tugev kui perk, sellegipoolest see teeb ka relva paremaks.
        </p>
        <p className="project-description-main-paragraph">
          Relvad tulevad tavaliselt tulnukate käest, aga ka tegelased müüvad relvi ja nendel on ka erinevad pergid, samal moel need võivad üksteisest erineda.Hetkel ainuüksik tegelane müüb pidevalt relvi, projekt põhinebki sellel tegelase peal, kelle nimi on Banshee-44.
        </p>
        <p className="project-description-main-paragraph">
        Eesmärk on luua keskkond, kus saab vaadata mida tegelane müüb,luua soovinimekirja ja teavitada kui tegelane müüb just seda relva teatud perkidega ja masterworgiga mida kasutaja tahab.
        </p>
      </div>
      <ul className="project-description-sub-header-paragraph-undordered-list">
        <li>
          <h2 className="project-description-sub-header">Backend</h2>
          <p className="project-description-sub-paragraph">
            Destiny 2 api kaudu saab teada missuguseid relvi Banshee-44 müüb, kuid mõned probleemid tulevad esile.Ühe api requestiga ei ole võimalik kätte saada kõikide relvade andmeid(nimi,pergid ja masterworgid) ning iga pergi ja masterworgi kohta oleks ka vaja teha api requeste, et teada mis nende nimed ja kirjeldused on.Põhjus selleks on see, et api endpoint, mis annab Banshee-44 inventuuri, näitab ainult relva nime asemel hash väärtusi ja sama tõke kui tahad teada, millised pergid ja masterworgid relvadel on või millised võivad olla.Teada on vaja mida Banshee-44 müüb iga nädal ja mida ta võib müüa iga nädal, kõik see tähendaks et oleks vaja teha mitukümmend requesti selleks et saada kõik vajaliku info kätte.
          </p>
          <p className="project-description-sub-paragraph">Eeltoodud probleemide lahenduseks oli vaja teha api.Enda api kaudu saab alla laadida destiny 2 apist manifesti, kus on kõik vajalik info relvadest,perkidest ja masterworkidest.Info mida manifestist on vaja läheb andmebaasi ja sealt saab info kätte kui seda on vaja front endis või discord botil.</p>
        </li>
        <li>
          <h2 className="project-description-sub-header">Front end</h2>
          <p className="project-description-sub-paragraph">
            Remixi põhjal tehtud veebileht, siin saab näha mida tegelane müüb(hetkel ainult üks tegelane) ja teha enda soovinimekirja.Selleks et teha soovinimekirja on vaja discordi kontot. Vajutades "Log into discord" nuppu peale viib sind lehele, kus tuleb sisse logida oma discord kontoga, sellega annad luba discord aplikatsioonile näha enda discord konto id väärtust.Pärast seda discord viib tagasi lehe peale, kus saab soovinimekirja luua.
          </p>
        </li>
        <li>
          <h2 className="project-description-sub-header">Discord bot</h2>
          <p className="project-description-sub-paragraph">
            Discord bot samuti saab näidata mida tegelane müüb aga selle peamine eesmärk on sind teavitada, kui tegelane müüb midagi mis vastab sinu soovinimekirja nõuetele.
          </p>
        </li>
      </ul>
    </div>
  );
}

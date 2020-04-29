import React from "react";
import Dropdown, { DropdownDivider } from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import ReactHtmlParser from "react-html-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from 'uuid';

interface Props {}

interface State {
  id: Number;
  title: string;
  date: string;
  text: string;
}

class BlogEntry extends React.Component<Props, State> {
  state: State = {
    id: 1,
    title: "Drodzy parafianie",
    date: "sobota, 18 kwietnia 2020r.",
    text: `<p>
      W trosce o zdrowie wiernych w zaistniałej sytuacji ks,. Biskup
      Ordynariusz wydal dekret, którego zasady z dniem 20 kwietnia 2020
      roku obowiązują do odwołania w Diecezji Opolskiej.
    </p>
    <ol>
      <li>
        Przedłużona jest dyspensa od uczestnictwa w niedzielnych i
        świątecznych mszach św.
      </li>
      <li>
        W obrzędach religijnych może uczestniczyć określona liczba
        wiernych: 1 osoba na 15 m kw. (Informacja o liczbie osób
        mogących jednorazowo znajdować się w naszej świątyni wywieszona
        jest na drzwiach kościoła )
      </li>
      <li>
        Na placu wokół kościoła i na cmentarzu nie obowiązuje żaden
        przelicznik, należy jednak zachować minimum 2 m. odległość od
        siebie.
      </li>
      <li>
        Wierni mają obowiązek zakrywania ust i nosa w kościele i jego
        otoczeniu. Przystępując do Komunii św. powinni odsłonić usta nie
        dotykając zewnętrznej części elementu ochronnego.
      </li>
      <li>
        Codziennie o 15.00 wystawiany będzie Przenajświętszy Sakrament i
        w tym czasie udzielana będzie Komunia św. wszystkim, którzy
        pragną ją przyjąć,
      </li>
      <li>
        Wierni maja prawo w każdej chwili poprosić o przystąpienie do
        Sakramentu Pokuty.
      </li>
    </ol>

    <p>
      Bardzo proszę wszystkich o dostosowanie się do wymienionych zasad.
    </p>

    <p class="text-right">
      Z modlitewną pamięcią
      <br />
      Wasz proboszcz
      <br />
      R.Kała
    </p>`,
  };

  render() {
    return (
      // <Card className="shadow p-2 m-3">
      // {/* // <Card className="border-top-0 border-right-0 border-left-0"> */}
      <div className="p-3">
        <DropdownButton
          alignRight
          id={`${uuidv4()}`}
          className="float-right"
          variant="secondary"
          title={<FontAwesomeIcon icon="cog" />}
        >
          <Dropdown.Item href="#/action-1">
            <FontAwesomeIcon icon="edit" /> Edytuj
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <FontAwesomeIcon icon="eye-slash" /> Ukryj
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2" className="text-danger">
            <FontAwesomeIcon icon="trash-alt" /> Usuń
          </Dropdown.Item>
        </DropdownButton>
        <h2>
          <a href="#" className="text-reset font-weight-bold">
            {this.state.title}
          </a>
        </h2>
        <div className="mb-2 text-muted">{this.state.date}</div>
        <div className="text-justify">{ReactHtmlParser(this.state.text)}</div>
      </div>
    );
  }
}

export { BlogEntry };

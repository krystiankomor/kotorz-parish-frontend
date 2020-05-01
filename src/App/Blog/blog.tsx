import React from "react";
import { BlogEntry } from "./BlogEntry";

interface Entry {
  id: number;
  title: string;
  date: string;
  text: string;
  hidden: boolean;
}

interface State {
  entries: Entry[];
}

export class Blog extends React.Component {
  state: State = {
    entries: [],
  };

  componentDidMount() {
    this.putBlogEntriesToState(10);
    console.log(this.state);
  }

  putBlogEntriesToState(amount: number): void {
    const entries: Entry[] = [];

    for (var i = 0; i < amount; i++) {
      entries.push({
        id: i,
        title: "Drodzy parafianie" + i,
        date: "sobota, 18 kwietnia 2020r.",
        hidden: i % 3 === 0,
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
      });
    }

    this.setState({ entries: entries });
  }

  render() {
    return (
      <div>
        {this.state.entries.map((el) => (
          <BlogEntry
            id={el.id}
            title={el.title}
            date={el.date}
            text={el.text}
            hidden={el.hidden}
          />
        ))}
      </div>
    );
  }
}

import React from "react";
import { BlogEntry } from "./Post";
import { IPostEntry } from "./interfaces/IPostEntry";
import { BASE_API_URL, BLOG_URL } from "../settings";
import { CreatePostModal } from "./modals/CreatePostModal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface State {
  entries: IPostEntry[];
  showCreatePostModal: boolean;
}

export class Blog extends React.Component {
  state: State = {
    entries: [],
    showCreatePostModal: false,
  };

  emptyBlogEntry: IPostEntry = {
    id: undefined,
    title: undefined,
    slug: undefined,
    date: undefined,
    body: "",
    extraBody: "",
    onDelete: () => {}
  };

  makeRequestAndUpdateState(): void {
    fetch(`${BASE_API_URL}${BLOG_URL}`)
      .then((response) => response.json())
      .then((data) => this.setState({ entries: data }));
  }

  componentDidMount(): void {
    // this.putBlogEntriesToState(5);
    this.makeRequestAndUpdateState();
  }

  // putBlogEntriesToState(amount: number): void {
  //   const entries: IBlogEntry[] = [];

  //   for (var i = 0; i < amount; i++) {
  //     entries.push({
  //       id: i,
  //       title: "Drodzy parafianie" + i,
  //       slug: "aaa",
  //       date: "sobota, 18 kwietnia 2020r.",
  //       body: `<p>
  //       W trosce o zdrowie wiernych w zaistniałej sytuacji ks,. Biskup
  //       Ordynariusz wydal dekret, którego zasady z dniem 20 kwietnia 2020
  //       roku obowiązują do odwołania w Diecezji Opolskiej.
  //     </p>
  //     <ol>
  //       <li>
  //         Przedłużona jest dyspensa od uczestnictwa w niedzielnych i
  //         świątecznych mszach św.
  //       </li>
  //       <li>
  //         W obrzędach religijnych może uczestniczyć określona liczba
  //         wiernych: 1 osoba na 15 m kw. (Informacja o liczbie osób
  //         mogących jednorazowo znajdować się w naszej świątyni wywieszona
  //         jest na drzwiach kościoła )
  //       </li>
  //       <li>
  //         Na placu wokół kościoła i na cmentarzu nie obowiązuje żaden
  //         przelicznik, należy jednak zachować minimum 2 m. odległość od
  //         siebie.
  //       </li>
  //       <li>
  //         Wierni mają obowiązek zakrywania ust i nosa w kościele i jego
  //         otoczeniu. Przystępując do Komunii św. powinni odsłonić usta nie
  //         dotykając zewnętrznej części elementu ochronnego.
  //       </li>
  //       <li>
  //         Codziennie o 15.00 wystawiany będzie Przenajświętszy Sakrament i
  //         w tym czasie udzielana będzie Komunia św. wszystkim, którzy
  //         pragną ją przyjąć,
  //       </li>
  //       <li>
  //         Wierni maja prawo w każdej chwili poprosić o przystąpienie do
  //         Sakramentu Pokuty.
  //       </li>
  //     </ol>
  
  //     <p>
  //       Bardzo proszę wszystkich o dostosowanie się do wymienionych zasad.
  //     </p>
  
  //     <p class="text-right">
  //       Z modlitewną pamięcią
  //       <br />
  //       Wasz proboszcz
  //       <br />
  //       R.Kała
  //     </p>`,
  //       extraBody: "",
  //     });
  //   }

  //   this.setState({ entries: entries });
  // }

  render() {
    return (
      <>
        <Button
          variant="success"
          onClick={() => this.setState({ showCreatePostModal: true })}
          className="my-3"
        >
          <FontAwesomeIcon icon="plus" /> Dodaj wpis
        </Button>

        <CreatePostModal
          post={this.emptyBlogEntry}
          showModal={this.state.showCreatePostModal}
          onHide={() => this.setState({ showCreatePostModal: false })}
          afterUpdate={() => this.makeRequestAndUpdateState()}
        />

        {this.state.entries.map((el) => (
          <BlogEntry
            id={el.id}
            key={el.id}
            title={el.title}
            slug={el.slug}
            date={el.date}
            body={el.body}
            extraBody={el.extraBody}
            onDelete={() => this.makeRequestAndUpdateState()}
          />
        ))}
      </>
    );
  }
}

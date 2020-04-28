import React from "react";
import Card from "react-bootstrap/Card";

class Blog extends React.Component {
  render() {
    return (
      <Card className="shadow p-2 m-3">
        <Card.Body>
          <Card.Title as={'h3'}><a href="#">Drodzy parafianie</a></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            sobota, 18 kwietnia 2020r.
          </Card.Subtitle>
          <Card.Text as={'div'}>
            <p>
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

            <p className="text-right">
              Z modlitewną pamięcią
              <br />
              Wasz proboszcz
              <br />
              R.Kała
            </p>
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Blog;

import { Helmet } from 'react-helmet';
import Teaser from './Teaser';

const Games = () => {
  const sendGameRequest = e => {
    e.preventDefault();

    const name = e.target[0].value;
    const game = e.target[1].value;

    const link = document.createElement('a');
    link.href = `mailto:eliasbruhn123@gmail.com?subject=Regarding%20new%20game%20rule%20request:%20${game}&body=Hello,%20my%20name%20is%20${name},%20and%20I%20would%20like%20to%20request%20rules%20for%20"${game}"%20on%20your%20Game%20Rules%20site.`;
    setTimeout(() => {
      link.click();
    }, 1000);

    document.querySelector('.success').style.display = 'block';
    document.querySelector(
      '.success'
    ).innerText = `You successfully requested rules for "${game}"`;

    e.target.reset();

    setTimeout(() => {
      window.location.reload();
    }, 20000);
  };

  return (
    <>
      <Helmet>
        <title>Games | Game Rules</title>
      </Helmet>
      <h1>Games</h1>

      <div className="teasers">
        <Teaser
          imgUrl="matador/matador.jpg"
          title="Matador"
          text="Man begynder ved “START” og flytter brikkerne venstre om ifølge
            terningkast. Når en spillerbrik lander på et felt, der ikke allerede
            ejes af nogen anden deltager, kan spilleren købe det af ban..."
          link="/matador"
        />
        <Teaser
          imgUrl="ludo/ludo.png"
          title="Ludo"
          text="Ludo is a very simple game which can be played by 2 – 4 players. It
            is easy to play and understand, which makes it popular among
            children. This game has some rules and regulations that you need to
            know..."
          link="/ludo"
        />
        <Teaser
          imgUrl="dart/dart.jpeg"
          title="Dart"
          text="Being a “sport” – many argue it is a game – mainly played in pubs
            and requiring little or no physical fitness, darts is one activity
            at which Britain excels! Darts is thought to have been created when
            soldie..."
          link="/dart"
        />
        <Teaser
          imgUrl="bang/bang.jpeg"
          title="BANG!"
          text="BANG! is a shootout game, in Spaghetti Western style, between a
            group of Outlaws and the Sheriff, who is their primary target. The
            Deputies incognitos help the Sheriff, but there is also a Renegade
            pursuing his own goal! In BANG! each player plays one..."
          link="/bang"
        />
      </div>

      <div className="line"></div>

      <form onSubmit={sendGameRequest}>
        <h2>Can not find the game you're looking for?</h2>
        <h3 className="text-center">Submit a game request:</h3>
        <label htmlFor="name">Your name</label>
        <input required type="name" name="name" placeholder="Your name.." />
        <label htmlFor="game">Game</label>
        <input
          required
          type="text"
          name="game"
          placeholder="Game you want to request.."
        />
        <input type="submit" value="Submit" className="submit" />
      </form>
      <div className="success"></div>
    </>
  );
};

export default Games;

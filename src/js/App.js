import React from 'react';
import StoryBanner from './StoryBanner';
import Mapa from './Mapa';
import home_banner from '../images/vivas-libres.png';
import article_banner from '../images/galaxy.png';
import galaxy_izq from '../images/galaxy-izq.png';
import galaxy_der from '../images/galaxy-der.png';
import galaxy_small_izq from '../images/galaxy-small-izq.png';
import galaxy_small_der from '../images/galaxy-small-der.png';
// import viz1 from '../viz/v1.html';
import '../css/App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = { imageUrl: home_banner,
                    imageUrl2: article_banner,
                  width: window.innerWidth};
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  render() {
    return (
      <div className="App">
        <div className="home-container">
          <div className="home intro">
            <p className="home-intro"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </p>
          </div>
          <div className="home image">
            <img className="logo" src={home_banner} alt="Periodismo feminista de América Latina" />
          </div>
        </div>
        <div className="article">
          <div className="article-banner">
            <img className="galaxy" src={this.state.width > 800 ? galaxy_izq : galaxy_small_izq} alt="Ilustración de destellos" />
            <h3>Este es el título del artículo: Título del artículo</h3>
            <img className="galaxy" src={this.state.width > 800 ? galaxy_der : galaxy_small_der} alt="Ilustración de destellos" />
          </div>
          <div className="article-story">
            <StoryBanner upperTitle="Lorem ipsum dolor sit amet" lowerTitle="consectetuer adipiscing elit sed diam"
            // viz={viz1} vizTitle="Título de la gráfica"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
            />
            <StoryBanner upperTitle="Lorem ipsum dolor sit amet" lowerTitle="consectetuer adipiscing elit sed diam"
            // viz={viz1} vizTitle="Título de la gráfica"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
            />
            <StoryBanner noThunder upperTitle="Lorem ipsum dolor sit amet" lowerTitle="consectetuer adipiscing elit sed diam"
            // viz={viz1} vizTitle="Título de la gráfica"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
            />
          </div>
          <div id="mapa" className="map-container">
            <Mapa />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

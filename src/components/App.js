import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { images: [] };
  }

  onSearchSubmit = async (term) => {
    const result = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
    });
    this.setState({ images: result.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
        <div>
          Images found: {this.state.images.length}
        </div>
        <ImageList images={this.state.images} />
      </div>
    );
  };
}

export default App;
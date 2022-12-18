import { Component } from 'react';

class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: [],
      isLoaded: false,
    };
  }

  componentDidMount() {

    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          item: json,
        });
      });
  }


    render() {
      var { isLoaded, items} = this.state;

      if(!isLoaded){
        return <div>Loading...</div>
      }
      else{
        console.log(items);
        return(
          <ul>
            {items.map(item => (
              <li key = {item.id}>
                Name: {item.name} || Email: {item.email} || 
              </li>
            ))};
          </ul>
        );
      } 
    }
}

export default Weather;

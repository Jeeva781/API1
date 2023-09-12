import React from "react";
import './App.css';
class App extends React.Component {
  
    // Constructor
    constructor(props) {
        super(props);
  
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
  
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
  
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>{
                items.map((item) => (
                <ol key = { item.id } ><br></br>
                  <strong>UserId:</strong>   { item.userId },<br></br>
                   <strong>Id:</strong>  { item.id },<br></br>
                   <strong>Title:</strong> { item.title },<br></br>
                   <strong>Body:</strong> {item.body}<br></br>

                </ol>
                ))
            }
        </div>
    );
}
}
  
export default App;
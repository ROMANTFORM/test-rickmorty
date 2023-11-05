
import Card from "../components/Card";
import { Component } from "react";
import axios from 'axios';
import Filter from "../components/Filter";


class Home extends Component {
    state = {
        isVisible: false,
        results: [],
        info: [],
        pageNum: 3,
        filter: ''
    }
    makeVisibleFilter = () => {this.setState((prevState) => ({isVisible: !prevState.isVisible}))}

    filterHandler = (data) => {
        this.setState({filter: data.character})
    }

   async componentDidMount() {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`);
        this.setState({results: response.data.results, info: response.data.info})
    }

    render() {
        const {results, filter, isVisible} = this.state;
        const normalizedFilter = filter.toLocaleLowerCase();

        const filteredData = results.filter(item => item.name.toLowerCase().includes(normalizedFilter));
        console.log("filter", filteredData)

       return (
        <div className="home-page__container">
            <div className="home-page__filter-container">
                <button type="button" onClick={this.makeVisibleFilter} className="home-page__btn-filter">Filter</button>
                {isVisible && <Filter onFilter={this.filterHandler}/>}
            </div>
            
            <ul className="home-page__list">
                {filteredData.map(item => (
                    <li key={item.id}>
                        <Card results={item}/>
                    </li>
                ))}
                
                
            </ul>
        </div>
    ) 
    }
    
};

export default Home;
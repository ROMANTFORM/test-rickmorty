import Card from "../components/Card";
import { Component } from "react";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import ReactLoading from 'react-loading';
import { connect } from "react-redux";
import axios from "axios";


class Home extends Component {
    state = {
        results: [],
        info: [],
        pageNum: 1,
        isVisible: false,
        isLoading: false,
        filterValue: ''
    }
 
    makeVisibleFilter = () => {
        this.setState((prevState) => ({isVisible: !prevState.isVisible}))
    }

    filterHandler = (data) => {
        this.setState({filterValue: data})
    }

   async componentDidMount() {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${this.state.pageNum}`)
        .then( (response) => {
            this.setState({results: response.data.results, info: response.data.info})
        })
        .catch( (error) => {
        console.log(error);
        })
        .finally( () => {
        this.setState({isLoading: false})
        });
    }

   async componentDidUpdate(prevProps, prevState){
        if(prevProps.pageNum !== prevState.pageNum){
            const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${this.props.pageNum.pageNumber}`);
            this.setState({results: response.data.results, info: response.data.info})
        }
    }

    render() {
        const {isVisible, results, isLoading} = this.state;
        // const normalizedFilter = this.props.filterValue;
        // console.log("filter --->", normalizedFilter)
        // const filteredData = results.filter(item => item.name.toLowerCase().includes(normalizedFilter));
        // console.log("fetch --->", this.props.fetchData)

       return (
        <div className="home-page__container">
            {isLoading && <ReactLoading type={ReactLoading.balls} color={'#fff'} height={120} width={100} />}
            
            <div className="home-page__filter-container">
                <button type="button" onClick={this.makeVisibleFilter} className="home-page__btn-filter">Filter</button>
                {isVisible && <Filter onChange={this.filterHandler}/>}
            </div>
            
            <ul className="home-page__list">
                {results.map(item => (
                    <li key={item.id}>
                        <Card results={item}/>
                    </li>
                ))}  
            </ul>

            <Pagination />
        </div>
        ) 
    }     
};

const mapStateToProps = state => {
    return {
        pageNum: state.paginationState,
        filter: state.filterState.filter,
        isLoading: state.dataState.isLoading
    }
}

export default connect(mapStateToProps)(Home);
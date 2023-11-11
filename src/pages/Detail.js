import DetailCard from '../components/DetailCard';

const Detail = (props) => {
   const {id} = props.match.params
    return (
        <DetailCard id={id}/>
    )
};

export default Detail;
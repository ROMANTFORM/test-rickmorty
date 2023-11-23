import DetailCard from '../components/DetailCard';

const Detail = (props) => {
   const {id} = props.match.params
   console.log(id)
    return (
        <DetailCard id={id}/>
    )
};

export default Detail;
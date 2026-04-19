import { ThreeDots } from "react-loader-spinner";

const Spinner = () => {
    return (
    <ThreeDots
visible={true}
height="100"
width="120"
color="#000000 "
radius="6"
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClass=""
/>
    )
}

export default Spinner;
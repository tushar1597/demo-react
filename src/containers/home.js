import { connect } from "react-redux";
import { setLoading } from "../actions/util.action";
import "../styles/home.css";

function Home(props) {
    return (
        <>
            <h1>Home Page</h1>
            <button
                className={props.loading ? "green" : "red"}
                onClick={props.setLoading}
            >
                Click
            </button>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.util.loading,
});

const mapDispatchToProps = {
    setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

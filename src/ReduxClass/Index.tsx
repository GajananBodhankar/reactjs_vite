import { Component } from "react";
import { connect } from "react-redux";
interface IndexState {}
interface IndexProps {
  data: [];
  status: string;
  apiCall: () => void;
}
function apiCall() {
  return async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: "loading" });
    try {
      let result = await fetch("https://jsonplaceholder.typicode.com/todos");
      let data = await result.json();
      dispatch({ type: "success", payload: data });
    } catch (error) {
      dispatch({ type: "failed" });
    }
  };
}
class Index extends Component<IndexProps, IndexState> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount(): void {
    this.props.apiCall();
    console.log(this.props);
  }
  render() {
    const { data, status } = this.props;
    console.log(data, status);
    return <div>hello, {status}</div>;
  }
}

const mapStateToProps = (state: {
  reducerApiCall: { data: any; status: any };
}) => ({
  data: state.reducerApiCall.data,
  status: state.reducerApiCall.status,
});

const mapDispatchToProps = { apiCall };

export default connect(mapStateToProps, mapDispatchToProps)(Index);

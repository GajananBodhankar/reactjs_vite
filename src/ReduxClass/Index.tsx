import React, { Component } from "react";
import { connect } from "react-redux";
interface IndexState {}
interface IndexProps {
  data: [];
  status: string;
  apiCall: () => void;
}
function apiCall() {
  return async (dispatch) => {
    dispatch({ type: "loading" });
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((e) => e.json())
      .then((i) => dispatch({ type: "success", payload: i }))
      .catch((e) => dispatch({ type: "failed" }));
    //   let data = await result.json();
    //   dispatch({ type: "success", payload: data });
    // } catch (error) {
    //   dispatch({ type: "failed" });
    // }
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

const mapStateToProps = (state) => ({
  data: state.reducerApiCall.data,
  status: state.reducerApiCall.status,
});

const mapDispatchToProps = { apiCall };

export default connect(mapStateToProps, mapDispatchToProps)(Index);

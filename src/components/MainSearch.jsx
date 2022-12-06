import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_SEARCH_RESULTS,
  CHANGE_SEARCH_IS_LOADING,
  handleSubmitAction,
} from "../redux/actions";

import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  const Jobs = useSelector((state) => state.searchResults.content);
  const loadingJobs = useSelector((state) => state.searchResults.isLoading);

  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (e.target.value === "") {
      dispatch({
        type: ADD_SEARCH_RESULTS,
        payload: [],
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(handleSubmitAction(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        {/* {errorJobs && (
          <Alert variant="danger">We couldn't fetch the data</Alert>
        )} */}
        <Col xs={10} className="mx-auto mb-5">
          <>
            <div>
              {loadingJobs && (
                <Spinner animation="border" variant="info" className="ml-2" />
              )}
            </div>
            <div>
              {!loadingJobs &&
                Jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
            </div>
          </>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;

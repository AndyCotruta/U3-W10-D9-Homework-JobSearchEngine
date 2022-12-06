import { Row, Col, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Job = ({ data }) => {
  const loadingJobs = useSelector((state) => state.searchResults.isLoading);
  return (
    <Row
      className="mx-0 mt-3 p-3 text-center"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      {loadingJobs && (
        <Spinner animation="border" variant="info" className="ml-2" />
      )}
      <Col xs={3} md={6}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9} md={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;

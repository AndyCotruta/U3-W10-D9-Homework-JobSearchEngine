import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { addToFavourites, getJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const jobs = useSelector((state) => state.jobs.content);
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobsAction(baseEndpoint, params.companyName);
  }, []);

  // const dispatch = useDispatch();

  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.companyName);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col>
          <div className="d-flex align-items-center justify-content-center">
            <h1>{params.companyName}</h1>
            <Button
              className="favButton mx-3"
              onClick={() => {
                addToFavourites(params.companyName);
                // dispatch({
                //   type: "ADD_TO_FAVOURITES",
                //   payload: params.companyName,
                // });
              }}
            >
              Add to favourites
            </Button>
          </div>

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;

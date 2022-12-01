import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FavouriteCompanies = () => {
  const favCompaniesArray = useSelector((state) => state.favCompanies.content);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto text-center my-3">
          <h1>Favourite Companies List</h1>
          <ul className="favCompList">
            {" "}
            {favCompaniesArray.map((favCompany, i) => (
              <li
                key={i}
                className="d-flex justify-content-center align-items-center"
              >
                <Link to={"/" + favCompany} className="compLinks">
                  {i + 1}. {favCompany}
                </Link>
                <FaTrashAlt
                  className="deleteCompany mx-2"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVOURITES",
                      payload: i,
                    });
                  }}
                />
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteCompanies;

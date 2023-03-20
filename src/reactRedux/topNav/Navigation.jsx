import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Nav className="bg-danger">
      <ul className="d-flex list-unstyled p-3 fs-4 m-0">
        <li className="ms-2">
          <Link to={"/products"} className="text-decoration-none">
            Products
          </Link>
        </li>
        <li className="ms-5">
          <Link to={"/buy"} className="text-decoration-none">
            Shop
          </Link>
        </li>
      </ul>
    </Nav>
  );
};

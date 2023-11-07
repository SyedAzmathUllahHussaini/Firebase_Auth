import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card>
        <Card.Body>
          <div className="p-4 box mt-3 text-center">
            Hello Welcome <br />
            {user && user.email}
          </div>
          <div></div>
          <div className="d-grid gap-2">
            <Button className="mt-3px" variant="primary" onClick={handleLogout}>
              Log out
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Home;

import { useContext, useEffect, useState } from "react";
import { ButtonContainer } from "./style";
import followApi from "../../services/followApi.js";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Follow({ id }) {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const [follow, setFollow] = useState(false);

  function postFollow() {
    setDisabled(true);
    followApi
      .postFollowButton(id, user.id, token)
      .then((res) => {
        getFollow();
        setDisabled(false);
      })
      .catch((err) => {
        toast.error("Could not perform the operation");
        setDisabled(false);
      });
  }

  function deleteFollow() {
    setDisabled(true);
    followApi
      .deleteFollowButton(id, user.id, token)
      .then((res) => {
        getFollow();
        setDisabled(false);
      })
      .catch((err) => {
        toast.error("Could not perform the operation");
        setDisabled(false);
      });
  }

  function getFollow() {
    followApi
      .getFollowButton(id, user.id, token)
      .then((res) => setFollow(res.data))
      .catch((err) => toast.error("Could not perform the operation"));
  }
  // eslint-disable-next-line
  useEffect(getFollow, []);

  return (
    <>
      <ToastContainer />
      <ButtonContainer
        data-test="follow-btn"
        disabled={disabled}
        follow={follow}
        onClick={follow ? deleteFollow : postFollow}
      >
        {follow ? "Unfollow" : "Follow"}
      </ButtonContainer>
    </>
  );
}

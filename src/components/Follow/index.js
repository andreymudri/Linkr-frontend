import { useContext, useEffect, useState } from "react";
import { ButtonContainer } from "./style";
import followApi from "../../services/followApi.js";
import UserContext from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Follow({ id, follow, setFollow }) {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);

  function postFollow() {
    setDisabled(true);
    followApi
      .postFollowButton(id, user.id)
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
      .deleteFollowButton(id, user.id)
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
      .getFollowButton(id, user.id)
      .then((res) => {
        // eslint-disable-next-line
        setFollow(res.data.length != 0 ? true : false);
      })
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
        onClick={follow === true ? deleteFollow : postFollow}
      >
        {follow === true ? "Unfollow" : "Follow"}
      </ButtonContainer>
    </>
  );
}

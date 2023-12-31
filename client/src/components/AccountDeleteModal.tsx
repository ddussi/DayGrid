import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { closeModal } from "../store/modal/modalSlice";
import { useMutation } from "@tanstack/react-query";
import { deleteUserInfo } from "../utils/http";
import { useNavigate } from "react-router-dom";
import Modal from "./common/Modal";
import classes from "../styles/AccountDeleteModal.module.css";

function AccountDeleteModal(): JSX.Element | null {
  const isOpen = useSelector((state: RootState) => state.modal.modalType);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteInfoMutation = useMutation({
    mutationFn: deleteUserInfo,
    onSuccess: () => {
      navigate("/info");
    },
  });

  if (isOpen !== "accountDelete") {
    return null;
  }

  function handleDeleteInfo() {
    deleteInfoMutation.mutate();
  }

  return (
    <Modal>
      <div className={classes.mypage__delete_modal_con}>
        <div>정말로 탈퇴하시겠습니까?</div>
        <div className={classes.mypage__delete_modal_btn_con}>
          <button onClick={handleDeleteInfo}>예</button>
          <button onClick={() => dispatch(closeModal())}>아니오</button>
        </div>
      </div>
    </Modal>
  );
}

export default AccountDeleteModal;

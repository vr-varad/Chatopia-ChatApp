/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button, Dialog, DialogTitle, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleChats";
import UserItem from "../../components/shared/UserItem";

const AddMember = ({
  open,
  handleClose,
  addMember,
  isLoadingAddMember,
  chatId,
}) => {
  const [members, setMembers] = useState(sampleUsers);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) => {
      if (selectedMembers.includes(id)) {
        return prev.filter((member) => member !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const addFriendHandler = () => {};

  const addNewMemberSubmitHandler = () => {};

  const closeHandler = () => {
    handleClose();
  };

  return (
    <Dialog open={open} onClose={closeHandler}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {sampleUsers.length > 0 ? (
            sampleUsers.map((user) => {
              return (
                <UserItem
                  key={user._id}
                  user={user}
                  handler={selectMemberHandler}
                  isAdded={selectedMembers.includes(user._id)}
                />
              );
            })
          ) : (
            <Typography>No Friends</Typography>
          )}
        </Stack>
        <Stack
          direction={"row"}
          alignContent={"center"}
          justifyContent={"space-evenly"}
        >
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button onClick={addNewMemberSubmitHandler} variant="contained">
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMember;

/* eslint-disable no-unused-vars */
import {
  Dialog,
  DialogTitle,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { sampleUsers } from "../../constants/sampleChats";
import UserItem from "../shared/UserItem";
import { useInputValidation } from "6pp";

const NewGroup = () => {
  const groupName = useInputValidation("");

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

  const handleSubmit = () => {
    console.log(groupName.value);
  };

  const handleClose = () => {
    console.log("close");
  };

  return (
    <Dialog open onClose={handleClose}>
      <Stack
        p={{
          xs: "1rem",
          sm: "3rem",
        }}
        spacing={"2rem"}
        width={"25rem"}
      >
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>
        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />
        <Typography variant="body1">Members</Typography>
        <Stack>
          {members.map((user, index) => (
            <UserItem
              key={index}
              user={user}
              handler={selectMemberHandler}
              isAdded={selectedMembers.includes(user._id)}
            />
          ))}
        </Stack>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="text" color="error" size="large">
            Cancel
          </Button>
          <Button variant="contained" size="large" onClick={handleSubmit}>
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;

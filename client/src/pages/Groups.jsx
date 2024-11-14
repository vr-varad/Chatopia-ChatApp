/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
  Menu as MenuIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import {
  Backdrop,
  Box,
  Button,
  Drawer,
  Grid2,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleUsers } from "../constants/sampleChats";
const ConfirmDelete = lazy(() => import("../components/dialogs/ConfirmDelete"));
const AddMember = lazy(() => import("../components/dialogs/AddMember"));

const isAddMember = false;

const Groups = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdated, setGroupNameUpdated] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [confirmAddMemberDialog, setConfirmAddMemberDialog] = useState(false);

  const navigateBack = () => {
    navigate(-1);
  };

  const handleMobile = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMobileClose = () => {
    setIsMobileMenuOpen(false);
  };

  const updateGroupName = () => {
    setIsEdit(false);
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
    console.log("Delete Group");
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openConfirmAddMemberHandler = () => {
    setConfirmAddMemberDialog(true);
  };

  const closeConfirmAddMemberHandler = () => {
    setConfirmAddMemberDialog(false);
  };


  const deleteHandler = () => {
    console.log("Delete Group");
    closeConfirmDeleteHandler();
  };

  useEffect(() => {
    setGroupName(`Group Name ${chatId}`);
    setGroupNameUpdated(`Group Name ${chatId}`);

    setIsEdit(false);
  }, [chatId]);

  return (
    <Grid2 container height={"100vh"}>
      <Grid2
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
        }}
        size={{ xs: 12, sm: 4 }}
        bgcolor={"greenyellow"}
      >
        <GroupList myGroups={sampleUsers} chatId={chatId} />
      </Grid2>
      <Grid2
        item
        size={{ xs: 12, sm: 8 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          padding: "1rem 3rem",
        }}
        bgcolor={"#D4BDAC"}
      >
        <>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "none",
                position: "fixed",
                right: "1rem",
                top: "1rem",
              },
            }}
          >
            <Tooltip title="Menu">
              <IconButton onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Tooltip title="Back">
            <IconButton
              sx={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                bgcolor: "rgba(0,0,0,0.1)",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.2)",
                },
              }}
              onClick={navigateBack}
            >
              <KeyboardBackspaceIcon />
            </IconButton>
          </Tooltip>
        </>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          spacing={1}
          padding={"3rem"}
        >
          {/* Group Header */}
          {groupName &&
            (isEdit ? (
              <>
                <TextField
                  value={groupNameUpdated}
                  onChange={(e) => setGroupNameUpdated(e.target.value)}
                />
                <IconButton onClick={updateGroupName}>
                  <SaveIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Typography variant={"h5"}>{groupName}</Typography>
                <IconButton onClick={() => setIsEdit(true)}>
                  <EditIcon />
                </IconButton>
              </>
            ))}
        </Stack>
        {/* Group Members */}
        <Typography margin={"2rem"} alignSelf={"flex-start"} variant="body1">
          Group Members
        </Typography>
        <Stack
          maxWidth={"45rem"}
          width={"100%"}
          boxSizing={"border-box"}
          padding={{
            xs: "0rem",
            sm: "1rem",
            md: "1rem 2rem",
          }}
          spacing={"2rem"}
          bgcolor="greenyellow"
          height={"50vh"}
          overflow={"auto"}
        ></Stack>
        {/* Button */}
        <Stack
          direction={{
            xs: "column-reverse",
            sm: "row",
          }}
          spacing={"1rem"}
          padding={{
            xs: "0",
            sm: "1rem",
            md: "1rem 4rem",
          }}
        >
          <Button
            size="large"
            color="error"
            variant="outlined"
            startIcon={<DeleteIcon />}
            onClick={openConfirmDeleteHandler}
          >
            Delete Group
          </Button>
          <Button
            size="large"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={openConfirmAddMemberHandler}
          >
            Add Member
          </Button>
        </Stack>
      </Grid2>
      {confirmAddMemberDialog && (
        <Suspense fallback={<Backdrop open />}>
          <AddMember
            open={confirmAddMemberDialog}
            handleClose={closeConfirmAddMemberHandler}
          />
        </Suspense>
      )}
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDelete
            open={confirmDeleteDialog}
            handleClose={closeConfirmDeleteHandler}
            deleteHandler={deleteHandler}
          />
        </Suspense>
      )}
      <Drawer
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileClose}
      >
        <GroupList w={"50vw"} myGroups={sampleUsers} chatId={chatId} />
      </Drawer>
    </Grid2>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => {
  return (
    <Stack width={w}>
      {myGroups.length > 0 ? (
        myGroups.map((group, index) => (
          <GroupListItem key={index} group={group} chatId={chatId} />
        ))
      ) : (
        <Typography textAlign={"center"} padding={"1rem"}>
          No Groups Found..
        </Typography>
      )}
    </Stack>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups;

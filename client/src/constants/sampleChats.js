export const chats = [
  {
    avatar: "",
    name: "John Doe",
    _id: "1",
    groupChat: false,
    sameSender: false,
    isOnline: true,
    newMessageAlert: { count: 1 },
    members: ["1", "2"],
  },
  {
    avatar: "",
    name: "Jane Doe",
    _id: "2",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["1", "2"],
  },
  {
    avatar: "",
    name: "John Doe",
    _id: "3",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["1", "2", "3"],
  },
  {
    avatar: "",
    name: "Jane Doe",
    _id: "4",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["1", "2", "3", "4"],
  },
  {
    avatar: "",
    name: "John Doe",
    _id: "5",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["5", "6", "7", "8"],
  },
  {
    avatar: "",
    name: "Jane Doe",
    _id: "6",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["5", "6", "7", "8"],
  },
  {
    avatar: "",
    name: "John Doe",
    _id: "7",
    groupChat: false,
    sameSender: false,
    isOnline: false,
    newMessageAlert: { count: 0 },
    members: ["5", "6", "7", "8"],
  },
];

export const sampleUsers = [
  {
    name: "John Doe",
    _id: "1",
    avatar: ["https://randomuser.me/api", "https://randomuser.me/api"],
  },
  {
    name: "Jane Doe",
    _id: "2",
    avatar: ["https://randomuser.me/api", "https://randomuser.me/api"],
  },
];

export const sampleNotifications = [
  {
    sender: {
      name: "John Doe",
      avatar: "https://randomuser.me/api",
    },
    _id: "1",
  },
  {
    sender: {
      name: "Jane Doe",
      avatar: "https://randomuser.me/api",
    },
    _id: "2",
  },
];

export const sampleMessage = [
  {
    attachments: [
      {
        public_id: "1",
        url: "https://randomuser.me/api",
      },
    ],
    content: "Hello World",
    _id: "1",
    sender: {
      name: "John Doe",
      _id: "2",
    },
    chat: "chatId",
    createdAt: "2021-09-20T00:00:00.000Z",
  },
  {
    attachments: [
      {
        public_id: "1",
        url: "https://dummyimage.com/300.png",
      },
    ],
    content: "Hello World",
    _id: "2",
    sender: {
      name: "Jabe Doe",
      _id: "1",
    },
    chat: "avrwvawv",
    createdAt: "2021-09-20T00:00:00.000Z",
  },
];

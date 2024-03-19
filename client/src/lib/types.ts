export type User = {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
  gender?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type Message = {
  _id: string;
  senderId: string;
  receiverId?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  shouldShake?: boolean;
  __v: number;
};

export type Chat = {
  _id: string;
  name?: string;
  participants: string[];
  messages: string[];
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Conversation = {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// export type GroupChat = {
//   _id: string;
//   name: string;
//   participants: string[]; // Changed from User[] to string[]
//   messages: Message[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

// export type GroupChat = {
//   _id: string;
//   name: string;
//   participants: User[];
//   messages: Message[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

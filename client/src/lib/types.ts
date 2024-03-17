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
  receiverId: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

// export type Conversation = {
//   _id: string;
//   participants: string[];
//   messages: string[];
//   createdAt: string;
//   updatedAt: string;
//   __v: number;
// };

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

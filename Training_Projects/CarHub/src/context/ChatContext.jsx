import { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";

const ChatContext = createContext();

export const useChatContext = () => useContext(ChatContext);

const data = [
  {
    id: 2,
    owner: {
      id: 2,
      name: "Sneha Gupta",
      email: "sneha@gmail.com",
      phoneNumber: "+91 9876543210",
      password: "sneha@121",
      city: "Delhi",
      state: "Delhi",
    },
    car: {
      id: 5,
      brand: "Tata",
      model: "Safari",
      year: 2021,
      price: 1800000,
      mileage: 40000,
      fuelType: "Diesel",
      transmission: "Automatic",
      description:
        "The Tata Safari is a spacious and comfortable SUV designed for family adventures.",
      owner: 2,
      owner_id: 12,
      status: "live",
      bodyType: "SUV",
    },
    user: {
      id: 1,
    },
    messages: [
      { sender: true, content: "Hello Is this available?", time: Date.now() },
    ],
  },
  {
    id: 1,
    owner: {
      id: 1,
      name: "Sneha Gupta",
      email: "sneha@gmail.com",
      phoneNumber: "+91 9876543210",
      password: "sneha@121",
      city: "Delhi",
      state: "Delhi",
    },
    car: {
      id: 77,
      brand: "Volvo",
      model: "XC90",
      year: 2021,
      price: 5200000,
      mileage: 25000,
      fuelType: "Diesel",
      transmission: "Automatic",
      description:
        "The Volvo XC90 is a premium SUV with a spacious cabin, advanced safety systems, and powerful performance.",
      owner: 2,
      owner_id: 10,
      status: "live",
      bodyType: "SUV",
    },
    user: { id: 1 },
    messages: [
      { sender: true, content: "Hello Is this available?", time: Date.now() },
    ],
  },
  {
    id: 3,
    owner: {
      id: 5,
      name: "Anuj Sharma",
      email: "anuj@gmail.com",
      phoneNumber: "+91 2345678901",
      password: "anuj@121",
      city: "Chennai",
      state: "Tamil Nadu",
    },
    car: {
      id: 73,
      brand: "Audi",
      model: "A6",
      year: 2019,
      price: 4200000,
      mileage: 27000,
      fuelType: "Petrol",
      transmission: "Automatic",
      description:
        "The Audi A6 is a luxury executive sedan known for its sophisticated design and advanced technology.",
      owner: 1,
      owner_id: 16,
      status: "live",
      bodyType: "Sedan",
    },
    user: { id: 1 },
    messages: [
      {
        sender: true,
        content: "Hello Is this available? I am Interested",
        time: Date.now(),
      },
    ],
  },
];

export const ChatProvider = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const [chats, setChats] = useState(data);
  const [curr, setCurr] = useState(null);

  const getChat = (id) => {
    setCurr(chats.find((chat) => chat.id === id));
  };

  const createChat = (car, owner) => {
    let chat = chats.find(
      (c) =>
        c.car.id === car.id && c.owner.id === owner.id && c.user.id === user.id
    );
    if (chat) {
      setCurr(chat);
      return;
    }
    let newChat = {
      id: chats.length + 1,
      car,
      owner,
      user,
      messages: [],
      buying: true,
    };
    setChats([newChat, ...chats]);
    setCurr(newChat);
  };

  const sendMsg = (id, msg, opp) => {
    const message = {
      sender: opp,
      content: msg,
      time: Date.now(),
    };
    const chat = { ...curr, messages: [...curr.messages, message] };
    setCurr(chat);
    setChats(chats.map((c) => (c.id === id ? chat : c)));
  };

  return (
    <ChatContext.Provider value={{ chats, curr, getChat, createChat, sendMsg }}>
      {children}
    </ChatContext.Provider>
  );
};

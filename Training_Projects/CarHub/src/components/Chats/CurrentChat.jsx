import { Box, Divider, Paper, Typography } from "@mui/material";
import { useChatContext } from "../../context/ChatContext";
import CurrChatHeader from "./CurrChatHeader";
import { useEffect } from "react";
import { useRef } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";

export default function CurrentChat() {
  const containerRef = useRef(null);
  const { curr } = useChatContext();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [curr]);
  return (
    <Paper
      elevation={3}
      sx={{
        flexGrow: 1,
        borderRadius: 5,
        ml: 1,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {curr ? (
        <>
          <CurrChatHeader />
          <Divider />
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "scroll",
              p: 1,
              display: "flex",
              flexDirection: "column",
            }}
            ref={containerRef}
          >
            {curr && curr.messages.length > 0 ? (
              curr.messages.map((msg, i) => (
                <Message msg={msg} key={i} curr={curr} />
              ))
            ) : (
              <Typography align="center">No messages to display</Typography>
            )}
          </Box>
          <ChatInput />
        </>
      ) : (
        <Box
          sx={{
            height: 1,
            width: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            className="car"
            width="102"
            height="40"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              transform="translate(2 1)"
              stroke="lightgray"
              fill="transparent"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                className="car__body"
                d="M47.293 2.375C52.927.792 54.017.805 54.017.805c2.613-.445 6.838-.337 9.42.237l8.381 1.863c2.59.576 6.164 2.606 7.98 4.531l6.348 6.732 6.245 1.877c3.098.508 5.609 3.431 5.609 6.507v4.206c0 .29-2.536 4.189-5.687 4.189H36.808c-2.655 0-4.34-2.1-3.688-4.67 0 0 3.71-19.944 14.173-23.902zM36.5 15.5h54.01"
                strokeWidth="3"
              />
              <ellipse
                className="car__wheel--left"
                strokeWidth="3.2"
                cx="83.493"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
              <ellipse
                className="car__wheel--right"
                strokeWidth="3.2"
                cx="46.511"
                cy="30.25"
                rx="6.922"
                ry="6.808"
              />
              <path
                className="car__line car__line--top"
                d="M22.5 16.5H2.475"
                strokeWidth="3"
              />
              <path
                className="car__line car__line--middle"
                d="M20.5 23.5H.4755"
                strokeWidth="3"
              />
              <path
                className="car__line car__line--bottom"
                d="M25.5 9.5h-19"
                strokeWidth="3"
              />
            </g>
          </svg>
          <Divider variant="fullWidth" sx={{ width: "60%", mb: 1 }} />
          <Typography color="gray">select any chat to continue...</Typography>
        </Box>
      )}
    </Paper>
  );
}

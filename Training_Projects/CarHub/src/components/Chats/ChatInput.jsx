import { Box, Chip, IconButton, Input, Slide } from "@mui/material";
import { useChatContext } from "../../context/ChatContext";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
  SendRounded,
} from "@mui/icons-material";

import { useRef, useState } from "react";

import { useSelector } from "react-redux";
import styled from "@emotion/styled";

const StyledInput = styled(Input)({
  "&.MuiInput-underline": {
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
    "&:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
  },
});

const Suggestions = [
  "Is it available?",
  "Yes, It is available.",
  "Sorry, It's already been sold.",
  "Where can I see it?",
  "Can you please call me?",
  "Is it negotiable?",
  "Yes, It is negotiable.",
  "Deal done.",
];
export default function ChatInput() {
  const { darkMode } = useSelector((state) => state.user);

  const { curr, sendMsg } = useChatContext();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(true);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleSend = (e, send) => {
    if (!message) return;
    if (e.key === "Enter") {
      sendMsg(curr.id, message, false);
      setMessage("");
    }
    if (send) {
      sendMsg(curr.id, message, true);
      setMessage("");
    }
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - event.currentTarget.offsetLeft);
    setScrollLeft(event.currentTarget.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.clientX - event.currentTarget.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed here
    event.currentTarget.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <>
      <Box ref={containerRef}>
        <Slide
          direction="up"
          in={open}
          timeout={200}
          container={containerRef.current}
        >
          <Box
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            sx={{
              display: "flex",
              maxWidth: { md: 600, lg: 710 },
              mx: "auto",
              overflowX: "scroll",
            }}
          >
            {Suggestions.map((s, i) => (
              <Chip
                key={i}
                label={s}
                sx={{ mr: 1 }}
                onClick={() => setMessage(s)}
              />
            ))}
          </Box>
        </Slide>
      </Box>

      <Box sx={{ my: 1, display: "flex", justifyContent: "space-evenly" }}>
        <IconButton onClick={handleClick}>
          {open ? (
            <KeyboardArrowDownRounded fontSize="large" />
          ) : (
            <KeyboardArrowUpRounded fontSize="large" />
          )}
        </IconButton>
        <Box
          sx={{
            bgcolor: darkMode ? "primary.dark" : "primary.light",
            width: "90%",
            borderRadius: 8,
            display: "flex",
          }}
        >
          <StyledInput
            sx={{ pl: 3 }}
            size="small"
            placeholder="enter your message..."
            autoFocus
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleSend}
          />
          <IconButton
            color={message && "secondary"}
            onClick={(e) => handleSend(e, true)}
          >
            <SendRounded fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}

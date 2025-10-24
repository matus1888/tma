import { Box, Modal, Stack, TextareaAutosize } from "@mui/material";
import { useCallback, useState } from "react";
import { AddIcon, CloseIcon } from "../../assets";
import { useMainContext } from "../../hooks";
import { Btn } from "../Btn";
import { Txt } from "../Txt";
import styles from "./TextArea.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "16px",
  transform: "translate(-50%, -50%)",
  color: "rgba(255, 255, 255, 0.5)",
  bgcolor: "rgba(0, 0, 0, 0.85)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  boxShadow: 24,
  width: "80%",
  gap: "16px",
  padding: "20px 22px",
  "&:focus-visible": {
    outline: "none",
  },
};

export const CreativeOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setStartTimes } = useMainContext();
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <>
      <Box
        padding="18.5px 17px"
        border="0.3px solid rgba(255, 255, 255, 0.12)"
        borderRadius="16px"
        bgcolor="rgba(137, 137, 137, 0.05)"
        width="100%"
        sx={{ color: "rgba(255, 255, 255, 0.5)" }}
        display="flex"
        gap="16px"
        onClick={toggleOpen}
      >
        <AddIcon />
        <Box display="flex" justifyContent="center" width="100%">
          <Txt>Заказать креатив</Txt>
        </Box>
      </Box>
      <Modal
        BackdropProps={{
          style: {
            backdropFilter: "blur(3px)",
            backgroundColor: "transparent",
          },
        }}
        open={isOpen}
      >
        <Stack sx={style}>
          {/* Header */}
          <Box
            display="flex"
            alignSelf="center"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            color="white"
          >
            <Txt size="l">Опишите вашу акцию</Txt>
            <Box>
              <CloseIcon
                sx={{ cursor: "pointer" }}
                onClick={() => setIsOpen(false)}
              />
            </Box>
          </Box>
          {/* Content */}
          <Box
            borderRadius="16px"
            border="1px solid rgba(255, 255, 255, 0.05)"
            bgcolor="rgba(0, 0, 0, 0.55)"
            padding="16px"
          >
            <TextareaAutosize
              id="task"
              className={styles.textArea}
              minRows={4}
              placeholder="Например: Только сегодня второй тортик в подарок"
            />
          </Box>
          {/* Actions */}
          <Box display="flex" justifyContent="center">
            <Btn
              onClick={() => {
                const element = document.getElementById(
                  "task"
                ) as unknown as HTMLTextAreaElement | null;
                const value = element?.value;
                if (value) {
                  console.log(
                    "Здесь вероятно надо отправить данные о новом заказе",
                    value
                  );
                  setStartTimes((prev) => [...prev, Date.now()]);
                  setIsOpen(false);
                }
              }}
            >
              Заказать
            </Btn>
          </Box>
        </Stack>
      </Modal>
    </>
  );
};

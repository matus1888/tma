import { Box } from "@mui/material";
import { useMainContext } from "../../hooks";
import { StageEnum } from "../../constants";

export const Creative = ({ group }: { group: string[] }) => {
  const { setCurrentGroup, setStage } = useMainContext();
  const [src] = group;
  return (
    <>
      <Box
        width="45%"
        height="calc(--width)*1.5"
        paddingX="2.5%"
        paddingY="5%"
        display="inline-flex"
        borderRadius="9px"
        flexDirection="column"
        onClick={() => {
          setCurrentGroup(group);
          setStage(StageEnum.GROUP);
        }}
      >
        <Box
          sx={{ transform: "scale(0.9)" }}
          bgcolor="rgba(38, 36, 36, 1)"
          zIndex={1}
          height="10px"
          marginBottom="-1px"
          borderRadius="9px 9px 0 0"
        />
        <Box
          sx={{ transform: "scale(0.95)" }}
          borderRadius="9px 9px 0 0"
          bgcolor="rgba(58, 56, 56, 1)"
          zIndex={2}
          height="10px"
        />
        <img
          width="100%"
          height="calc(--width)*1.5"
          style={{
            borderRadius: "9px",
            display: "block",
            zIndex: 3,
            backgroundColor: "white",
          }}
          alt={src}
          src={src}
        />
        {/* </Box> */}
      </Box>
    </>
  );
};

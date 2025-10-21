import { Box } from "@mui/material";
import { PresentIcon } from "../assets";
import { CreativeOrder, InfoBanner, Progressbar, Txt } from "../components";
import { Creative } from "../components/Creative";
import { useMainContext } from "../hooks";

const creatives = [
  { group: 1, src: "image1.png" },
  { group: 1, src: "default.png" },
  { group: 1, src: "default.png" },
  { group: 1, src: "default.png" },
  { group: 1, src: "default.png" },
  { group: 2, src: "image7.png" },
  { group: 2, src: "default.png" },
  { group: 2, src: "default.png" },
  { group: 2, src: "default.png" },
  { group: 2, src: "default.png" },
  { group: 3, src: "image12.png" },
  { group: 3, src: "default.png" },
  { group: 3, src: "default.png" },
  { group: 3, src: "default.png" },
  { group: 3, src: "default.png" },
  { group: 4, src: "image16.png" },
  { group: 4, src: "default.png" },
  { group: 4, src: "default.png" },
  { group: 4, src: "default.png" },
  { group: 5, src: "image20.png" },
  { group: 5, src: "default.png" },
].reduce((acc, item) => {
  const key = String(item.group);
  // console.log(acc[key]);
  // @ts-ignore
  if (Array.isArray(acc[key])) {
    // console.log(key);
  // @ts-ignore
    acc[key].push(item.src);
  } else {
  // @ts-ignore
    acc[key] = [item.src];
  }
  return acc;
}, {});

export const MainPage = () => {
  const { startTime } = useMainContext();
  const radius = 80;
  return (
    <>
      <Box
        sx={{
          borderRadius: radius,
          width: radius,
          height: radius,
          background: "white",
          zIndex: -1,
          filter: `blur(${radius}px)`,
          position: "fixed",
          top: "-50px",
        }}
      ></Box>
      <CreativeOrder />
      {startTime && <Progressbar startTime={startTime} />}
      {Object.values(creatives).length && (
        <Box display="flex" justifyContent="flex-start" width="100%">
          <Txt>Мои креативы</Txt>
        </Box>
      )}
      <Box>
        {Object.entries(creatives)?.map(([, srcs]) => {
          if (Array.isArray(srcs)) return <Creative group={srcs} />;
        })}
      </Box>
      {!Object.values(creatives).length && (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
            gap="8px"
          >
            <PresentIcon />
            <Txt color="secondary">Первый креатив бесплатно</Txt>
          </Box>
          <InfoBanner>Здесь будут собраны ваши лучшие креативы..</InfoBanner>
        </>
      )}
    </>
  );
};

import { Avatar, Box } from "@mui/material";
import { useState } from "react";

export const Ava = ({
  src,
  name,
  size = 35,
}: {
  src: string;
  name: string;
  size?: number;
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getInitials = (fullName: string) => {
    if (!fullName) return "?";
    return fullName
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Box sx={{ position: "relative", width: size, height: size }}>
      {/* Буквенный аватар (всегда на заднем плане) */}
      <Avatar
        variant="square"
        sx={{
          width: size,
          height: size,
          bgcolor: "primary.main",
          fontSize: size * 0.4,
          borderRadius: "16px",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: imageLoaded ? 0 : 1,
          transition: "opacity 0.3s ease",
          zIndex: 1,
        }}
      >
        {getInitials(name)}
      </Avatar>

      {src && !imageError && (
        <Avatar
          src={src}
          sx={{
            width: size,
            height: size,
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "16px",
            opacity: imageLoaded ? 1 : 0,
            transition: "opacity 0.3s ease",
            zIndex: 2,
          }}
          onLoad={handleImageLoad}
          onError={handleImageError}
          alt={name}
        />
      )}
    </Box>
  );
};

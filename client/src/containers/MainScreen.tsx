import useAuth from "hooks/useAuth";
import usePlayer from "hooks/usePlayer";

import Top from "containers/Top";
import Bottom from "containers/Bottom";

import "assets/css/MainScreen.css";
import { useState } from "react";

export default function MainScreen() {
  useAuth();

  usePlayer();

  const [pbImgBottom, setPbImgBottom] = useState(true);

  return (
    <div className="main-screen">
      <Top pbImgBottom={pbImgBottom} setPbImgBottom={setPbImgBottom} />
      <Bottom pbImgBottom={pbImgBottom} setPbImgBottom={setPbImgBottom} />
    </div>
  );
}

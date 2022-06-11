import Sidebar from "containers/Sidebar";
import MainContent from "containers/MainContent";

import Split from "react-split";

import "assets/css/Top.css";

interface TopProps {
  pbImgBottom: boolean;
  setPbImgBottom: (pbImgBottom: boolean) => void;
}

export default function Top({ pbImgBottom, setPbImgBottom }: TopProps) {
  return (
    <Split
      className="top"
      gutterSize={1}
      sizes={[17, 84]}
      minSize={[129, 0]}
      maxSize={[393, Infinity]}
      snapOffset={0}
    >
      <Sidebar pbImgBottom={pbImgBottom} setPbImgBottom={setPbImgBottom} />
      <MainContent />
    </Split>
  );
}

import { PlaybackImage } from "components/Playback/Image"

import {
  EpisodesIcon,
  HomeIcon,
  LibraryIcon,
  LikedSongsIcon,
  PlusIcon,
  SearchIcon,
  SpotifyIcon,
} from "assets/svg"

interface SidebarProps {
  pbToggleImg: boolean
  setPbToggleImg: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Sidebar({ pbToggleImg, setPbToggleImg }: SidebarProps) {
  return (
    <nav className="split-left flex flex-col justify-between relative bg-[#000101] mr-0.5">
      <div className="h-full w-full px-6 pt-6 text-sm">
        <div className="pb-[26px]">{SpotifyIcon}</div>
        <ul>
          <li>
            <a href="" className="nav-li">
              {HomeIcon}
              <span className="ellipsis">Home</span>
            </a>
          </li>
          <li className="nav-li">
            {SearchIcon}
            <span className="ellipsis">Search</span>
          </li>
          <li className="nav-li">
            {LibraryIcon}
            <span className="ellipsis">Your Library</span>
          </li>
        </ul>
        <ul className="font-bold text-[#ffffffb3] mt-6">
          <li className="nav-li group">
            <div className="bg-[#ffffffb3] group-hover:bg-white rounded-sm div-center h-6 w-6 shrink-0 fill-black">
              {PlusIcon}
            </div>
            <span className="ellipsis">Create Playlist</span>
          </li>
          <li className="nav-li group">
            <div
              className="bg-gradient-to-br from-[#3d00f5] to-[#81b398] 
              group-hover:from-[#450af5] group-hover:to-[#c4efd9]  
              rounded-sm div-center h-6 w-6 shrink-0 fill-[#b2b2b2] group-hover:fill-white"
            >
              {LikedSongsIcon}
            </div>
            <span className="ellipsis">Liked Songs</span>
          </li>
          <li className="nav-li group">
            <div
              className="bg-[#003127] group-hover:bg-[#004638]
              fill-[#0f692f] group-hover:fill-[#159643]
              rounded-sm div-center h-6 w-6 shrink-0"
            >
              {EpisodesIcon}
            </div>
            <span className="ellipsis">Your Episodes</span>
          </li>
        </ul>
      </div>
      {pbToggleImg && (
        <div className="w-full max-w-full bottom-0 absolute">
          <PlaybackImage
            isToggled={pbToggleImg}
            setIsToggled={setPbToggleImg}
          />
        </div>
      )}
    </nav>
  )
}

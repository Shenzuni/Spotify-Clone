import { ToggleIcon, InvertedToggleIcon } from "assets/svg"

interface PlaybackImageProps {
  isToggled: boolean
  setIsToggled: React.Dispatch<React.SetStateAction<boolean>>
  track: Spotify.Track
}

export function PlaybackImage({
  isToggled,
  setIsToggled,
  track,
}: PlaybackImageProps) {
  return (
    <div className="group flex items-end relative h-[inherit] w-[inherit]">
      <button
        className="toggle-pb-img invisible flex justify-center items-center absolute top-[5px] right-[5px] z-1 h-6 w-6 
          rounded-full bg-[#000000b3] hover:scale-[1.1] hover:bg-[#000000cc] group-hover:visible"
        onClick={() => {
          setIsToggled((prev) => !prev)
        }}
      >
        {!isToggled ? ToggleIcon : InvertedToggleIcon}
      </button>
      <a className="h-[inherit] w-[inherit]" href={track.album.uri}>
        <img
          className="h-[inherit] w-[inherit] hover:cursor-pointer"
          alt="album"
          src={track.album.images[isToggled ? 0 : 1].url}
          title={track.album.name}
        />
      </a>
    </div>
  )
}

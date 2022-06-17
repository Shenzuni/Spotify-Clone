import { ReactIcon, WheelIcon } from "assets/svg/cards"

export function Default() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[32px] font-bold mb-4">Spotify-clone</h1>
        <div className="card-grid">
          <div className="card-item">
            <h2>
              This application utilizes spotify's API and SDK to mimic their GUI
              behavior. I've utilized React and Node for development.
            </h2>
          </div>
          <div className="card-item">
            {WheelIcon}
            <p>
              I tried my best to keep a balance of not reinventing the wheel and
              not abstracting my application too much.
            </p>
          </div>
          <div className="card-item">
            {ReactIcon}
            <p>
              I've learned a lot about React, but close to nothing about Node.
              It is only needed for authenticating my API to spotify's API.
            </p>
          </div>
          <div className="card-item">
            {ReactIcon}
            <p>
              I've learned to use a lot of hooks: useState, useEffect,
              useContext, useCallback and a little of useReducer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

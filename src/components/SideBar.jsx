function SideBar() {
  return (
    <aside className="flex rounded-xl bg-[#1f1f1f] p-5 col-span-1 flex-col items-center gap-y-4">
      <div className="size-10 relative bg-white/30 rounded-full duration-300 flex items-center justify-center">
        <input
          className="absolute h-full w-full opacity-0 z-30"
          type="checkbox"
          id="playlist_add_Menu"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          className="size-6 rotate-0 duration-300"
        >
          <path
            strokeLinecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>

        {/* <!-- --------------------playlist model---------------- --> */}
        <div
          id="list_modal"
          className="w-[340px] rounded-xl hidden p-4 bg-[#3a3a3a] absolute top-[20%] left-14"
        >
          {/* <!-- ---------list cards--------  --> */}
          <div className="flex items-center justify-end text-white gap-x-2 flex-row-reverse w-full">
            <div className="flex flex-col justify-start">
              <h5 className="text-lg font-semibold capitalize">playlist</h5>
              <p>create playlist with song or episode</p>
            </div>
            <div className="size-10 bg-[#1f1f1f] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- -------------songs section-------- --> */}
      <div
        id="aside_song_section"
        className="max-h-[70vh] flex flex-col items-center justify-center gap-5 overflow-y-scroll"
      >
        <div className="h-16 w-16 aspect-square bg-white/30 rounded-lg">
          <img
            className="h-full w-full object-cover"
            src="
https://i.scdn.co/image/ab67616d00001e02d998c880f085f08c7ddeeafc"
            alt="poster"
          />
        </div>
      </div>
      {/* <!-- ----------------song section--------------- --> */}
    </aside>
  );
}


export default SideBar
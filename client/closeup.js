import { getByID, GET_TVSHOW_BY_ID } from "./networkHandler.js";

// TODO: Store showIMGs in DB (incl. aria and alt)
const showImgs = [
  "fallout.webp",
  "aot.webp",
  "thewitcher.webp",
  "drwho.webp",
  "bluey.webp",
  "firefly.webp",
  "cowboy.webp",
  "scrubs.webp",
  "reddwarf.webp",
  "mha.webp",
];

let params = location.href.split("?")[1].split("&");
let showID = params[0].split("=")[1];
showID = showID.split("}")[0];

getByID(GET_TVSHOW_BY_ID, showID, (data) => {
  console.log(data);
  const img = document.getElementById("closeup-img");
  const header = document.getElementById("closeup-header");
  const desc = document.getElementById("closeup-desc");
  img.src = showImgs[data[0].imgID];
  header.textContent = data[0].name;
  desc.textContent = data[0].desc;
});

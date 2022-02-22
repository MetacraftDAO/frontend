let skins = [
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/13/----b-l-o-s-s-o-m----rce-----19888506.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/13/manhunt-ultimate-v2-19888229.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/11/sweetdreams---19877530.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/12/sunrise-19886443.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/12/miles-morales--spider-man-p-t-16--19884590.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/13/patel-unicorn-vibes---rq-19891530.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/13/tuxedo-rex-19888110.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/11/skeppy-19881314.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/11/---valentines-day-skin-19878894.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/11/--gaston---19880758.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/08/ficreeper-creeper-on-front-19861564.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/12/m-e-l-a-n-i-e-19886771.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/15/-*mushroom*--19904058.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/17/bill----19911284.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/19/--d-a-r-k---s-u-n----taking-requests--19920518.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/21/gon-freecss--19935592.png?v437",
    "https://www.minecraftskins.com/uploads/preview-skins/2022/02/19/--d-a-r-k---s-u-n----taking-requests--19920518.png?v437",
]

export const randomSkin = () => {
    const idx = Math.floor(Math.random() * skins.length);
    let skin = skins[idx];
    return skin;
}
const emojis = [
  "😄",
  "😃",
  "😀",
  "😊",
  "☺",
  "😉",
  "😍",
  "😘",
  "😚",
  "😗",
  "😙",
  "😜",
  "😝",
  "😛",
  "😳",
  "😁",
  "😔",
  "😌",
  "😒",
  "😞",
  "😣",
  "😢",
  "😂",
  "😭",
  "😪",
  "😥",
  "😰",
  "😅",
  "😓",
  "😩",
  "😫",
  "😨",
  "😱",
  "😠",
  "😡",
  "😤",
  "😖",
  "😆",
  "😋",
  "😷",
  "😎",
  "😴",
  "😵",
  "😲",
  "😟",
  "😦",
  "😧",
  "😈",
  "👿",
  "😮",
  "😬",
  "😐",
  "😕",
  "😯",
  "😶",
  "😇",
  "😏",
  "😑",
  "👲",
  "👳",
  "👮",
  "👷",
  "💂",
  "👶",
  "👦",
  "👧",
  "👨",
  "👩",
  "👴",
  "👵",
  "👱",
  "👼",
  "👸",
  "😺",
  "😸",
  "😻",
  "😽",
  "😼",
  "🙀",
  "😿",
  "😹",
  "😾",
  "👹",
  "👺",
  "🙈",
  "🙉",
  "🙊",
  "💀",
  "👽",
  "💩",
  "🔥",
  "✨",
  "🌟",
  "💫",
  "💥",
  "💢",
  "💦",
  "💧",
  "💤",
  "💨",
  "👂",
  "👀",
  "👃",
  "👅",
  "👄",
  "👍",
  "👎",
  "👌",
  "👊",
  "✊",
  "✌",
  "👋",
  "✋",
  "👐",
  "👆",
  "👇",
  "👉",
  "👈",
  "🙌",
  "🙏",
  "☝",
  "👏",
  "💪",
  "🚶",
  "🏃",
  "💃",
  "👫",
  "👪",
  "👬",
  "👭",
  "💏",
  "💑",
  "👯",
  "🙆",
  "🙅",
  "💁",
  "🙋",
  "💆",
  "💇",
  "💅",
  "👰",
  "🙎",
  "🙍",
  "🙇",
  "🎩",
  "👑",
  "👒",
  "👟",
  "👞",
  "👡",
  "👠",
  "👢",
  "👕",
  "👔",
  "👚",
  "👗",
  "🎽",
  "👖",
  "👘",
  "👙",
  "💼",
  "👜",
  "👝",
  "👛",
  "👓",
  "🎀",
  "🌂",
  "💄",
  "💛",
  "💙",
  "💜",
  "💚",
  "❤",
  "💔",
  "💗",
  "💓",
  "💕",
  "💖",
  "💞",
  "💘",
  "💌",
  "💋",
  "💍",
  "💎",
  "👤",
  "👥",
  "💬",
  "👣",
  "💭",
  "🐶",
  "🐺",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐸",
  "🐯",
  "🐨",
  "🐻",
  "🐷",
  "🐽",
  "🐮",
  "🐗",
  "🐵",
  "🐒",
  "🐴",
  "🐑",
  "🐘",
  "🐼",
  "🐧",
  "🐦",
  "🐤",
  "🐥",
  "🐣",
  "🐔",
  "🐍",
  "🐢",
  "🐛",
  "🐝",
  "🐜",
  "🐞",
  "🐌",
  "🐙",
  "🐚",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🐄",
  "🐏",
  "🐀",
  "🐃",
  "🐅",
  "🐇",
  "🐉",
  "🐎",
  "🐐",
  "🐓",
  "🐕",
  "🐖",
  "🐁",
  "🐂",
  "🐲",
  "🐡",
  "🐊",
  "🐫",
  "🐪",
  "🐆",
  "🐈",
  "🐩",
  "🐾",
  "💐",
  "🌸",
  "🌷",
  "🍀",
  "🌹",
  "🌻",
  "🌺",
  "🍁",
  "🍃",
  "🍂",
  "🌿",
  "🌾",
  "🍄",
  "🌵",
  "🌴",
  "🌲",
  "🌳",
  "🌰",
  "🌱",
  "🌼",
  "🌐",
  "🌞",
  "🌝",
  "🌚",
  "🌑",
  "🌒",
  "🌓",
  "🌔",
  "🌕",
  "🌖",
  "🌗",
  "🌘",
  "🌜",
  "🌛",
  "🌙",
  "🌍",
  "🌎",
  "🌏",
  "🌋",
  "🌌",
  "🌠",
  "⭐",
  "☀",
  "⛅",
  "☁",
  "⚡",
  "☔",
  "❄",
  "⛄",
  "🌀",
  "🌁",
  "🌈",
  "🌊",
  "🎍",
  "💝",
  "🎎",
  "🎒",
  "🎓",
  "🎏",
  "🎆",
  "🎇",
  "🎐",
  "🎑",
  "🎃",
  "👻",
  "🎅",
  "🎄",
  "🎁",
  "🎋",
  "🎉",
  "🎊",
  "🎈",
  "🎌",
  "🔮",
  "🎥",
  "📷",
  "📹",
  "📼",
  "💿",
  "📀",
  "💽",
  "💾",
  "💻",
  "📱",
  "☎",
  "📞",
  "📟",
  "📠",
  "📡",
  "📺",
  "📻",
  "🔊",
  "🔉",
  "🔈",
  "🔇",
  "🔔",
  "🔕",
  "📢",
  "📣",
  "⏳",
  "⌛",
  "⏰",
  "⌚",
  "🔓",
  "🔒",
  "🔏",
  "🔐",
  "🔑",
  "🔎",
  "💡",
  "🔦",
  "🔆",
  "🔅",
  "🔌",
  "🔋",
  "🔍",
  "🛁",
  "🛀",
  "🚿",
  "🚽",
  "🔧",
  "🔩",
  "🔨",
  "🚪",
  "🚬",
  "💣",
  "🔫",
  "🔪",
  "💊",
  "💉",
  "💰",
  "💴",
  "💵",
  "💷",
  "💶",
  "💳",
  "💸",
  "📲",
  "📧",
  "📥",
  "📤",
  "✉",
  "📩",
  "📨",
  "📯",
  "📫",
  "📪",
  "📬",
  "📭",
  "📮",
  "📦",
  "📝",
  "📄",
  "📃",
  "📑",
  "📊",
  "📈",
  "📉",
  "📜",
  "📋",
  "📅",
  "📆",
  "📇",
  "📁",
  "📂",
  "✂",
  "📌",
  "📎",
  "✒",
  "✏",
  "📏",
  "📐",
  "📕",
  "📗",
  "📘",
  "📙",
  "📓",
  "📔",
  "📒",
  "📚",
  "📖",
  "🔖",
  "📛",
  "🔬",
  "🔭",
  "📰",
  "🎨",
  "🎬",
  "🎤",
  "🎧",
  "🎼",
  "🎵",
  "🎶",
  "🎹",
  "🎻",
  "🎺",
  "🎷",
  "🎸",
  "👾",
  "🎮",
  "🃏",
  "🎴",
  "🀄",
  "🎲",
  "🎯",
  "🏈",
  "🏀",
  "⚽",
  "⚾",
  "🎾",
  "🎱",
  "🏉",
  "🎳",
  "⛳",
  "🚵",
  "🚴",
  "🏁",
  "🏇",
  "🏆",
  "🎿",
  "🏂",
  "🏊",
  "🏄",
  "🎣",
  "☕",
  "🍵",
  "🍶",
  "🍼",
  "🍺",
  "🍻",
  "🍸",
  "🍹",
  "🍷",
  "🍴",
  "🍕",
  "🍔",
  "🍟",
  "🍗",
  "🍖",
  "🍝",
  "🍛",
  "🍤",
  "🍱",
  "🍣",
  "🍥",
  "🍙",
  "🍘",
  "🍚",
  "🍜",
  "🍲",
  "🍢",
  "🍡",
  "🍳",
  "🍞",
  "🍩",
  "🍮",
  "🍦",
  "🍨",
  "🍧",
  "🎂",
  "🍰",
  "🍪",
  "🍫",
  "🍬",
  "🍭",
  "🍯",
  "🍎",
  "🍏",
  "🍊",
  "🍋",
  "🍒",
  "🍇",
  "🍉",
  "🍓",
  "🍑",
  "🍈",
  "🍌",
  "🍐",
  "🍍",
  "🍠",
  "🍆",
  "🍅",
  "🌽",
  "🏠",
  "🏡",
  "🏫",
  "🏢",
  "🏣",
  "🏥",
  "🏦",
  "🏪",
  "🏩",
  "🏨",
  "💒",
  "⛪",
  "🏬",
  "🏤",
  "🌇",
  "🌆",
  "🏯",
  "🏰",
  "⛺",
  "🏭",
  "🗼",
  "🗾",
  "🗻",
  "🌄",
  "🌅",
  "🌃",
  "🗽",
  "🌉",
  "🎠",
  "🎡",
  "⛲",
  "🎢",
  "🚢",
  "⛵",
  "🚤",
  "🚣",
  "⚓",
  "🚀",
  "✈",
  "💺",
  "🚁",
  "🚂",
  "🚊",
  "🚉",
  "🚞",
  "🚆",
  "🚄",
  "🚅",
  "🚈",
  "🚇",
  "🚝",
  "🚋",
  "🚃",
  "🚎",
  "🚌",
  "🚍",
  "🚙",
  "🚘",
  "🚗",
  "🚕",
  "🚖",
  "🚛",
  "🚚",
  "🚨",
  "🚓",
  "🚔",
  "🚒",
  "🚑",
  "🚐",
  "🚲",
  "🚡",
  "🚟",
  "🚠",
  "🚜",
  "💈",
  "🚏",
  "🎫",
  "🚦",
  "🚥",
  "⚠",
  "🚧",
  "🔰",
  "⛽",
  "🏮",
  "🎰",
  "♨",
  "🗿",
  "🎪",
  "🎭",
  "📍",
  "🚩",
  "⬆",
  "⬇",
  "⬅",
  "➡",
  "🔠",
  "🔡",
  "🔤",
  "↗",
  "↖",
  "↘",
  "↙",
  "↔",
  "↕",
  "🔄",
  "◀",
  "▶",
  "🔼",
  "🔽",
  "↩",
  "↪",
  "ℹ",
  "⏪",
  "⏩",
  "⏫",
  "⏬",
  "⤵",
  "⤴",
  "🆗",
  "🔀",
  "🔁",
  "🔂",
  "🆕",
  "🆙",
  "🆒",
  "🆓",
  "🆖",
  "📶",
  "🎦",
  "🈁",
  "🈯",
  "🈳",
  "🈵",
  "🈴",
  "🈲",
  "🉐",
  "🈹",
  "🈺",
  "🈶",
  "🈚",
  "🚻",
  "🚹",
  "🚺",
  "🚼",
  "🚾",
  "🚰",
  "🚮",
  "🅿",
  "♿",
  "🚭",
  "🈷",
  "🈸",
  "🈂",
  "Ⓜ",
  "🛂",
  "🛄",
  "🛅",
  "🛃",
  "🉑",
  "㊙",
  "㊗",
  "🆑",
  "🆘",
  "🆔",
  "🚫",
  "🔞",
  "📵",
  "🚯",
  "🚱",
  "🚳",
  "🚷",
  "🚸",
  "⛔",
  "✳",
  "❇",
  "❎",
  "✅",
  "✴",
  "💟",
  "🆚",
  "📳",
  "📴",
  "🅰",
  "🅱",
  "🆎",
  "🅾",
  "💠",
  "➿",
  "♻",
  "♈",
  "♉",
  "♊",
  "♋",
  "♌",
  "♍",
  "♎",
  "♏",
  "♐",
  "♑",
  "♒",
  "♓",
  "⛎",
  "🔯",
  "🏧",
  "💹",
  "💲",
  "💱",
  "©",
  "®",
  "™",
  "〽",
  "〰",
  "🔝",
  "🔚",
  "🔙",
  "🔛",
  "🔜",
  "❌",
  "⭕",
  "❗",
  "❓",
  "❕",
  "❔",
  "🔃",
  "🕛",
  "🕧",
  "🕐",
  "🕜",
  "🕑",
  "🕝",
  "🕒",
  "🕞",
  "🕓",
  "🕟",
  "🕔",
  "🕠",
  "🕕",
  "🕖",
  "🕗",
  "🕘",
  "🕙",
  "🕚",
  "🕡",
  "🕢",
  "🕣",
  "🕤",
  "🕥",
  "🕦",
  "✖",
  "➕",
  "➖",
  "➗",
  "♠",
  "♥",
  "♣",
  "♦",
  "💮",
  "💯",
  "✔",
  "☑",
  "🔘",
  "🔗",
  "➰",
  "🔱",
  "🔲",
  "🔳",
  "◼",
  "◻",
  "◾",
  "◽",
  "▪",
  "▫",
  "🔺",
  "⬜",
  "⬛",
  "⚫",
  "⚪",
  "🔴",
  "🔵",
  "🔻",
  "🔶",
  "🔷",
  "🔸",
  "🔹",
];

const getEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

export default getEmoji;

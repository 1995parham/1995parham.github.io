// Inline SVG icons, read straight from the Font Awesome package at build time.
// Nothing from Font Awesome ships to the browser except the paths used here,
// which replaces the old ~100 KB icon stylesheet and its webfonts.
import github from "@fortawesome/fontawesome-free/svgs/brands/github.svg?raw";
import reddit from "@fortawesome/fontawesome-free/svgs/brands/reddit.svg?raw";
import stackOverflow from "@fortawesome/fontawesome-free/svgs/brands/stack-overflow.svg?raw";
import telegram from "@fortawesome/fontawesome-free/svgs/brands/telegram.svg?raw";
import whatsapp from "@fortawesome/fontawesome-free/svgs/brands/whatsapp.svg?raw";
import youtube from "@fortawesome/fontawesome-free/svgs/brands/youtube.svg?raw";
import arrowLeft from "@fortawesome/fontawesome-free/svgs/solid/arrow-left.svg?raw";
import external from "@fortawesome/fontawesome-free/svgs/solid/arrow-up-right-from-square.svg?raw";
import building from "@fortawesome/fontawesome-free/svgs/solid/building.svg?raw";
import calendar from "@fortawesome/fontawesome-free/svgs/solid/calendar.svg?raw";
import envelope from "@fortawesome/fontawesome-free/svgs/solid/envelope.svg?raw";
import fileDown from "@fortawesome/fontawesome-free/svgs/solid/file-arrow-down.svg?raw";
import graduationCap from "@fortawesome/fontawesome-free/svgs/solid/graduation-cap.svg?raw";
import key from "@fortawesome/fontawesome-free/svgs/solid/key.svg?raw";
import location from "@fortawesome/fontawesome-free/svgs/solid/location-dot.svg?raw";
import memory from "@fortawesome/fontawesome-free/svgs/solid/memory.svg?raw";
import moon from "@fortawesome/fontawesome-free/svgs/solid/moon.svg?raw";
import newspaper from "@fortawesome/fontawesome-free/svgs/solid/newspaper.svg?raw";
import rss from "@fortawesome/fontawesome-free/svgs/solid/rss.svg?raw";
import star from "@fortawesome/fontawesome-free/svgs/solid/star.svg?raw";
import sun from "@fortawesome/fontawesome-free/svgs/solid/sun.svg?raw";

export const icons = {
	"arrow-left": arrowLeft,
	building,
	calendar,
	envelope,
	external,
	"file-down": fileDown,
	github,
	"graduation-cap": graduationCap,
	key,
	location,
	memory,
	moon,
	newspaper,
	reddit,
	rss,
	"stack-overflow": stackOverflow,
	star,
	sun,
	telegram,
	whatsapp,
	youtube,
} as const;

export type IconName = keyof typeof icons;

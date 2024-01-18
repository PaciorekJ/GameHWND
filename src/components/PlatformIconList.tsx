import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";

interface Props {
	platforms: Platform[];
}

const iconMap: { [key: string]: IconType } = {
	pc: FaWindows,
	playstation: FaPlaystation,
	xbox: FaXbox,
	nintendo: SiNintendo,
	mac: FaApple,
	linux: FaLinux,
	android: FaAndroid,
	ios: MdPhoneIphone,
	web: BsGlobe,
};

const PlatformIconList = ({ platforms }: Props) => {
	return (
		<HStack marginY={2}>
			{platforms.map((platform) => {
				if (!iconMap[platform.slug]) return null;
				return (
					<Icon
						key={platform.id}
						as={iconMap[platform.slug]}
						color={"gray.500"}></Icon>
				);
			})}
		</HStack>
	);
};

export default PlatformIconList;

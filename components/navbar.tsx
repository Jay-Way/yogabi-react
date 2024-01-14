'use client'

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem, NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { Logo } from "@/components/icons";
import {ThemeSwitch} from "@/components/theme-switch";
import {useState} from "react";

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<NextUINavbar isMenuOpen={isMenuOpen}
					  onMenuOpenChange={setIsMenuOpen}  maxWidth="full" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="center">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="pl-3 font-bold text-inherit">Yogabi</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>
			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ThemeSwitch />
			</NavbarContent>
			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<NextLink
								onClick={() => {setIsMenuOpen(false)}}
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

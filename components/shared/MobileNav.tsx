"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<header className="header">
			<Link href="/" className="flex items-center gap-2 md:py-2">
				<Image
					src="/assets/images/logo-text.svg"
					alt="lpgo"
					width={150}
					height={20}
				/>
			</Link>
			<nav className="flex gap-2 ">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
					<Sheet>
						<SheetTrigger>
							<Image
								src="/assets/icons/menu.svg"
								alt="menu"
								className=" cursor-pointer"
								width={30}
								height={30}
							/>
						</SheetTrigger>
						<SheetContent className="sheet-content sm:w-64">
							<>
								<Image
									src="/assets/images/logo-text.svg"
									alt="logo"
									width={150}
									height={18}
								/>
								<ul className="header-nav_elements">
									{navLinks.map((link) => {
										const isActive =
											pathname === link.route;
										return (
											<li
												key={link.route}
												className={`${
													isActive && "gradient-text"
												} p-18 whitespace-nowrap flex text-gray-700  `}
											>
												<Link
													href={link.route}
													className=" cursor-pointer sidebar-link"
												>
													<Image
														src={link.icon}
														alt="icon"
														width={24}
														height={24}
													/>
													{link.label}
												</Link>
											</li>
										);
									})}
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>
				<SignedOut>
					<Button
						asChild
						className=" button bg-purple-gradient bg-cover"
					>
						<Link href="/sign-in" className="">
							Login
						</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};

export default MobileNav;

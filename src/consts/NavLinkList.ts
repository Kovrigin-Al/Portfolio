
import { Bars3Icon, UserIcon, EnvelopeIcon, ChartBarIcon, CommandLineIcon } from "@heroicons/react/24/outline";

export interface INavLink {
    navLinkId: NavLinkId;
    scrollToId: SectionName;
    icon: typeof Bars3Icon | null;
}

export enum NavLinkId {
    home = 'Home',
    about='About',
    skills='Skills',
    projects='Projects',
    contact = 'Contact'
}

export enum SectionName {
    home = 'homeContainer',
    about='aboutContainer',
    skills='skillsContainer',
    projects='projectsContainer',
    contact = 'contactContainer'
}

export const NavLinkList: INavLink[] = [
    { icon: UserIcon, navLinkId: NavLinkId.about, scrollToId: SectionName.about },
    { icon: ChartBarIcon, navLinkId: NavLinkId.skills, scrollToId: SectionName.skills },
    { icon: CommandLineIcon, navLinkId: NavLinkId.projects, scrollToId: SectionName.projects },
    { icon: EnvelopeIcon, navLinkId: NavLinkId.contact, scrollToId: SectionName.contact },
];

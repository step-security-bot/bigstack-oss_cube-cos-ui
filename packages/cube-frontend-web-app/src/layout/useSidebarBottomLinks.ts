import { SideBarBottomLinkProps } from '@cube-frontend/ui-library'

export const useSidebarBottomLinks = (): SideBarBottomLinkProps[] => {
  const links: SideBarBottomLinkProps[] = [
    {
      text: 'Help',
      href: 'https://www.bigstack.co/contact-form/support',
    },
  ]

  return links
}

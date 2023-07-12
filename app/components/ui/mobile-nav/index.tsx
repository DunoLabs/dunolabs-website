"use client";

import { cn } from "@/lib/cn";
import { Menu as HamburgerMenuIcon } from "lucide-react";
import { ButtonHTMLAttributes, MouseEventHandler, useState } from "react";
import Button from "../buttons";

interface MobileNavigationProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuTitle: string;
  menuActions: Array<{
    menuHeading: string | React.ReactNode;
    menuHeadingURL?: string;
    menSubOptions: Array<{
      subOptionHeading: string | React.ReactNode;
      subMenuOptionURL: string;
    }>;
  }>;
};

const MobileNavigation: React.FC<MobileNavigationProps> = ({ menuTitle="menu", menuActions, className, ...props }) => {
  /**
   * @description state-manager for handling the toggle functionality of the menu 
   * @type boolean
   * @nameOfStateValue {isMenuOpen}
   * @nameOfStateManager {setIsMenuOpen}
   * @params none
   * @returns nothing as it's a state-manager function, has to be void
   * */
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  /**
   * @description the toggle effect has an issue: when the UI renders,
   * the conditional animation (on closing the menu-button),
   * also the "decrease-menu-button-size" CSS runs, 
   * thus to handle this issue, we're using a interaction-identifier
   * that can be used to check that the button as been interacted 
   * once or not -- and apply the animations accordingly
   * 
   * @example
   *  - when the UI renders for the first time, there's gonna be no "decrease-menu-button-size" animation
   *  - when the user clicks (or interacts) with the menu-button, then the "increase-menu-button-size" animation renders
   *  - on toggling the mneu-button to be closed, then the "decrease-menu-button-size" animation will render
   * 
   * @type: boolean
   * @nameOfStateValue {hasInteracted}
   * @nameOfStateManager {setHasInteracted}
   * @oarams none
   * @returns nothing as it's a state-manager function, has to be void
   */
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  /**
   * @description: handling method to manage the events on clicking the menu-button
   * @type: void
   * @nameOfMethod {handleMenuAction}
   * @params Event / onClick event properties
   * @paramsType React.MouseEventHandler<HTMLAnchorElement>
   * @returns: nothing as the type is void
   */
  const handleMenuAction = function (e: MouseEventHandler<HTMLAnchorElement> | any): void {
    // checking if it's the first interaction with the menu-button
    if (!hasInteracted) setHasInteracted(true);
    // toggling the current menu state
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Button 
      variant={"subtle"}
      className={cn(
        "mobile-navigation flex flex-row items-center justify-center gap-2 p-6 border-4 border-zinc-500 transition-all fixed transform -translate-x-1/2 bottom-8 left-1/2 md:hidden", 
        className, (isMenuOpen ? "increase-menu-button-size": (hasInteracted ? "decrease-menu-button-size": "")))}
      onClick={handleMenuAction}
    >
      <span className="mobile-navigation-menu-title-wrapper text-base">
        {menuTitle}
      </span>
      <span className="mobile-navigation-menu-title-leadingIcon-wrapper text-xl">
        {"🌱"}
      </span>
    </Button>
  )
};

export default MobileNavigation;
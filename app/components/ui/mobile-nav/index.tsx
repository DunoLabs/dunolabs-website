'use client';

import { cn } from '@/lib/cn';
import { Menu as HamburgerMenuIcon, Menu, Wind } from 'lucide-react';
import { ArrowUpRight as LinkArrowIndentifierIcon } from 'lucide-react';
import Link from 'next/link';
import {
  ButtonHTMLAttributes,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import Button from '../buttons';

interface MobileNavigationProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  menuTitle: string;
  menuActions: Array<{
    menuHeading: string | React.ReactNode;
    menuHeadingURL?: string;
    menuSubOptions: Array<{
      subOptionHeading: string | React.ReactNode;
      subMenuOptionURL: string;
    }>;
  }>;
}

/**
 * @param menuTitle
 * @param menuActions
 * @param className
 * @param props of type React.ButtonHTMLAttributes<HTMLButtonElement>
 *
 * @description Renders a Mobile Navigation component for mobile devices with all the options and sub-options
 */
const MobileNavigation: React.FC<MobileNavigationProps> = ({
  menuTitle = 'menu',
  menuActions,
  className,
  ...props
}) => {
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
  // ...
  const handleMenuAction = function (
    e: MouseEventHandler<HTMLAnchorElement> | any,
  ): void {
    if (!hasInteracted) setHasInteracted(true);
    setIsMenuOpen(!isMenuOpen);

    // Toggle body overflow to prevent background scrolling
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  useEffect(() => {
    if (isMenuOpen) {
      handleMenuKeyboardEvents();
      // Disable body scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    // Cleanup effect
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  /**
   * handler method to constantly look for keyboard events related to
   * mobile-navigation component. to handle events like ESC, keydown/keyup etc.
   */
  const handleMenuKeyboardEvents = function (): void {
    // checking if the window object is invalid, if yes, do nothing
    if (typeof window === 'undefined' || !isMenuOpen) return;
    // checking for multive keyboard events possible inside window instance
    window.addEventListener('keydown', function (event): void {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setIsMenuOpen(false);
      }
    });
  };

  useEffect(() => {
    // checking if the menu is open, if yes then only perform event driven actions
    if (isMenuOpen) {
      // constantly checking at every window event when menu is open
      handleMenuKeyboardEvents();
    }
  });

  return (
    <>
      <div
        className={cn(
          'mobile-navigation-body-content-wrapper p-6 fixed rounded-xl bg-zinc-800 transform -translate-x-1/2 bottom-24 left-1/2 md:hidden ',
          isMenuOpen ? 'increase-menu-body-size' : 'decrease-menu-body-size',
          isMenuOpen ? 'visible' : 'hidden',
          'max-h-60vh overflow-y-auto', // Added class for scrollability
        )}>
        {menuActions?.map((menuAction, menuActionIndex) => (
          <div
            className={cn('menu-action-content-wrapper')}
            key={menuActionIndex}>
            {!menuAction?.menuHeadingURL ? (
              <h4
                className={cn(
                  'menu-action-item-heading text-white font-medium flex flex-row transition-all items-center justify-start gap-1 hover:text-zinc-200 hover:gap-1.5',
                )}>
                {menuAction?.menuHeading}
                <LinkArrowIndentifierIcon className="w-4 h-4" />
              </h4>
            ) : (
              <Link href={menuAction?.menuHeadingURL}>
                <h4
                  className={cn(
                    'menu-action-item-heading text-white font-medium flex flex-row transition-all items-center justify-start gap-1 hover:text-zinc-200 hover:gap-1.5',
                  )}>
                  {menuAction?.menuHeading}
                  <LinkArrowIndentifierIcon className="w-4 h-4" />
                </h4>
              </Link>
            )}
            <div
              className={cn(
                'menu-action-item-suboptions-wrapper border-dashed border-l border-zinc-500 my-3 pl-3',
                'max-h-40vh overflow-y-auto', // Added class for scrollability
              )}>
              {menuAction?.menuSubOptions?.map((subOption, subOptionIndex) => (
                <Link
                  href={subOption?.subMenuOptionURL}
                  // closing the menu component when a inline page link is opened
                  onClick={() => setIsMenuOpen(false)}
                  key={subOptionIndex}>
                  <div
                    className={cn(
                      'suboption-item-content-wrapper my-4 relative text-sm font-normal text-zinc-400 hover:text-zinc-400 flex flex-row items-center justify-start gap-2',
                    )}>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 absolute -left-[15.5px]" />
                    <p className="suboption-item-heading-text-wrapper">
                      {subOption?.subOptionHeading}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        <Button
          variant={'subtle'}
          className={cn(
            'mobile-navigation flex flex-row items-center justify-between hover:scale-100 p-6 border-4 border-zinc-500 transition-all fixed transform -translate-x-1/2 bottom-8 left-1/2 md:hidden rounded-xl sm:px-10 w-100  px-7',
            className,
            isMenuOpen
              ? 'increase-menu-button-size'
              : hasInteracted
              ? 'decrease-menu-button-size'
              : '',
          )}
          onClick={handleMenuAction}>
          <span className="flex flex-row items-center justify-between gap-3">
            <span className="text-base mobile-navigation-menu-title-wrapper">
              {menuTitle}
            </span>
            <span className="mt-1 text-xl mobile-navigation-menu-title-leadingIcon-wrapper">
              {isMenuOpen ? '' : <Menu className="w-4 h-4 " />}
            </span>
          </span>
          {isMenuOpen && (
            // <span className="text-xs">
            //   <kbd className="p-1 rounded-md bg-zinc-800 text-zinc-50">esc</kbd>{' '}
            //   to close
            // </span>
            <Menu className="w-4 h-4 " />
          )}
        </Button>
      </div>
    </>
  );
};

export default MobileNavigation;

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { nanoid } from "nanoid";
import { FC, forwardRef } from "react";
import { Button } from "../Elements/Button";

export interface DropDownData {
  id?: number;
  label: string;
  dropDownItemList: DropDownItemData[];
}

export interface DropDownItemData {
  id?: number;
  label: string;
  url: string;
}

export interface DropDownProps {
  dropDownData: DropDownData;
}

interface DropDownItemButtonProps {
  active: boolean;
  dropDownItem: DropDownItemData;
}

const DropDownItemButton: FC<DropDownItemButtonProps> = forwardRef<
  HTMLButtonElement,
  DropDownItemButtonProps
>(({ active, dropDownItem }, ref) => {

  return (
    <Button
      ref={ref}
      colorVariant="none"
      // onClick={onClick}
      className={clsx(
        "w-full right-0 m-0  hover:bg-opacity-30 hover:bg-black text-left",
        { "bg-opacity-30 bg-black ": active },
        { "": !active}
        )
      }
    >
      {dropDownItem.label}
    </Button>
  );
});


export const DropDown: FC<DropDownProps> = ({ dropDownData }) => {
  return (
    <Menu as="div" className="text-left inline-block">
      <div className="w-full">
        <Menu.Button
          as={Button}
          className="inline-flex justify-between"
        >
          <span>
            {dropDownData.label}
          </span>
          <ChevronDownIcon className="h-5 w-5 mx-1" />
        </Menu.Button>
        <Menu.Items className="flex flex-col w-56 bg-black bg-opacity-5 rounded-md p-1">
          {dropDownData.dropDownItemList.map((dropDownItem, index) => (
            <Menu.Item key={dropDownItem.id ?? nanoid()}>
              {({ active }: { active: boolean }) => (
                <DropDownItemButton
                  active={active}
                  dropDownItem={dropDownItem}
                />
              )}
              {/* <button>
                {dropDownItem.label}
              </button> */}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

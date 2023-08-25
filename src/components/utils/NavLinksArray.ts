export interface NavLinkIten {
    label: string;
    href: string;
    isDropDown: boolean;
}

export const NavLinkArray: Array<NavLinkIten> = [
    {
        label: "Male",
        href: "/male",
        isDropDown: false
    },
    {
        label: "Female",
        href: "/female",
        isDropDown: false
    },
    {
        label: "Kids",
        href: "/kids",
        isDropDown: false
    },
    {
        label: "All Products",
        href: "/all-products",
        isDropDown: false
    },

]
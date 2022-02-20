# 1. What icons are compatible with this component?
- Viewbox "0 0 24 24": From where you're exporting from, please make sure the icon is using viewBox="0 0 24 24" before downloading/exporting. Not doing so will result in incorrect icon scaling

# 2. How to add a new icon?
**2.1 Sanitising the icon**
1. Create a file (use icon name) in `@/common/components/CustomIcon/svg`
2. Duplicate a current icon template and rename it accordingly. 
3. Replace the markup with your SVG markup (make sure it complies with the above section's rule)
4. Depending on the svg you pasted...
    A. If the `<svg>` has only 1 child, remove the `<svg>` parent entirely so you only have the path left
    B. If your component has more than 1 paths, rename `<svg>` tag with the `<g>` tag. Then, remove all attributes of this `<g>` tag so that it's just `<g>`
5. Replace all fill/stroke color with `currentColor`. E.g. <path d="..." fill="currentColor">. Leave the other attributes without removing them.

**2.2 Creating the icon export**
6. Go to @/common/components/CustomIcon/index.tsx
7. Import the component you created in 2.1 e.g. `import BellSvg from "@/common/components/CustomIcon/svg/Bell"`
8. From the 2nd last block of code where we `export const XIcon...`, duplicate the whole block and rename accordingly by using your icon svg
9. Make sure to provide a name to the `<CustomIcon>` component for accessibility sake
10. Done!

**2.3 Use your newly imported icon**
11. Simply use your component like this: `<BellIcon />` after importing from `import { BellIcon } from "@/common/components/CustomIcon"`
12. You can change simply use `<BellIcon size="32" />` to quickly change both width and height with the same value (square). For custom viewBox, width and height, simply provide all three props.
13. Coloring the icon: Simply add a className with text color. E.g. `<BellIcon className="text-gray-500" />`
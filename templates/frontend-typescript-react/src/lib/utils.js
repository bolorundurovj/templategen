"use strict";
 % ;
if (!shadcn) {
     %  > _SKIP_FILE_ <  % ;
}
else {
     %  > ;
    import { type ClassValue, clsx } from "clsx";
    import { twMerge } from "tailwind-merge";
    export function cn(...inputs) {
        return twMerge(clsx(inputs));
    }
     % ;
}
 %  >
;
//# sourceMappingURL=utils.js.map
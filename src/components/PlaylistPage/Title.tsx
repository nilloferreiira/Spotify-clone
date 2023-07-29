import { Clock } from "phosphor-react";

export function Title() {
    return (
        <div className="grid items-center grid-cols-4 text-zinc-400 text-sm uppercase w-full">
        <span className="flex justify-start"># TITLE</span>
        <span className="flex justify-center">album</span>
        <span className="flex justify-center">DATE ADDED</span>
        <span className="flex justify-end">
          <Clock size={16} />
        </span>
      </div>
    )
}
import { Circle } from "./Circle"
import { Square } from "./square"
import { Triangle } from "./Triangle"

export const GeoForm = () => {
    return (
        <div>
            <div className=" bg-cyan-500 flex gap-4 border-2 border-cyan-900 border-dotted p-3 justify-center items-center">
                <Circle/>
                <Triangle/>
                <Square/>
            </div>
        </div>
    )
}
import {useEffect} from "react";
import { useLocalStorage } from "./useLocalStorage";

export const UseDarkMode = (isToggled) => {

    // const x = document.querySelector("body")
    // console.log(x)
    const [someValue, setSomeValue] = useLocalStorage("darkMode", isToggled)
    // changing the classname in the dom(?) and storing the flag for changing it
    // in the local storage
    // do we return a body dive?  the directions imply the body already exists
    useEffect(() => {
        const bodySelector = document.querySelector("body")
        if(someValue === true) {
            bodySelector.classList.add("dark-mode")
            // If it's true, add the class dark-mode to the body element.
        } else {
            // If it's false, remove the class from the body element. (If you don't quite remember how to do this from ages and ages ago, Google will be your friend here 😉)
            bodySelector.classList.remove("dark-mode")

        }
    }, [someValue])

    return [someValue, setSomeValue]
}


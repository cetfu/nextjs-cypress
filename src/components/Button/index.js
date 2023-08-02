import styles from "./Button.module.css"
import {useCallback} from "react";
import config from "@/components/Button/button.config";

const Button = ({variant = "primary", children = "", ...props}) =>{

    const variantClassName = () =>{
        const {primary, warning} = config
        switch (variant){
            case "primary":
                return primary.className
            case "warning":
                return warning.className
        }
    }



    return (
        <button className={`${styles.button} ${styles[variantClassName()]}`} {...props}>
            {children}
        </button>
    )
}

export default Button
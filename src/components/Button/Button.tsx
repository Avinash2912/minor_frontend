
// import { useState } from "react";
// import ReactiveButton from "reactive-button";

// type ButtonProps = {
//     onClick: (e: React.MouseEvent<Element, MouseEvent>) => Promise<void>;
//     className?: string;
//     children: string; 
    
// };

// const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
//     const [state, setState] = useState("idle");

//     const onClickHandler = async (e: React.MouseEvent) => {
//         setState("loading");
//         await onClick(e); // Call the passed onClick prop
//         setState("success");
//     };

//     return (
//         <ReactiveButton
//             buttonState={state}
//             idleText={children}
//             loadingText="Loading"
//             successText="Done"
//             onClick={onClickHandler}
//             className={className} // Add the className prop
//             color="blue"
//         />
//     );
// };

// export default Button;






import { useState } from "react";
import ReactiveButton from "reactive-button";

type ButtonProps = {
    onClick: (e: React.MouseEvent<Element, MouseEvent>) => Promise<void>;
    className?: string;
    children: string; 
};

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
    const [state, setState] = useState("idle");

    const onClickHandler = async (e: React.MouseEvent) => {
        setState("loading");
        await onClick(e); // Call the passed onClick prop
        setState("success");
    };

    return (
        <ReactiveButton
            buttonState={state}
            idleText={children}
            loadingText="Loading"
            successText="Done"
            onClick={onClickHandler}
            className={className} // Add the className prop
            color="blue"
        />
    );
};

export default Button;


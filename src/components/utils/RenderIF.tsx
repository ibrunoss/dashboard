import React from "react";

export interface RenderIFProps {
    condition: boolean;
    children: React.ReactNode;
}

const RenderIF = ({ condition, children }: RenderIFProps) => {
    return condition ? <>{children}</> : <></>;
};

export default RenderIF;

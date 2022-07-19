import { ControlsLayout, ControlsTitle } from "./styles"

interface ControlsBoxProps{
    title?: string
    children?: React.ReactNode
    flexDirection?: "row" | "column";
    alignItems?: 'flex-start' | 'center' | 'flex-end';
}

const ControlsBox = ({
    title, 
    children, 
    flexDirection,
    alignItems,
}: ControlsBoxProps) => {
    return (
        <ControlsLayout 
            flexDirection={flexDirection}
            alignItems={alignItems}
        >
            { title && 
                <ControlsTitle>{title}</ControlsTitle>
            }
            {children}
        </ControlsLayout>
    )
}
export default ControlsBox
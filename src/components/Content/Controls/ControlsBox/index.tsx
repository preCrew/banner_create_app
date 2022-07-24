import { ControlsLayout, ControlsTitle } from "./styles"

interface ControlsBoxProps{
    title?: string
    children?: React.ReactNode
    flexDirection?: "row" | "column";
    alignItems?: 'flex-start' | 'center' | 'flex-end';
    justifyContent?: 'space-between' | 'space-around';
}

const ControlsBox = ({
    title, 
    children, 
    flexDirection,
    alignItems,
    justifyContent
}: ControlsBoxProps) => {
    return (
        <ControlsLayout 
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
        >
            { title && 
                <ControlsTitle>{title}</ControlsTitle>
            }
            {children}
        </ControlsLayout>
    )
}
export default ControlsBox
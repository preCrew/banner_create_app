import { ControlsLayout, ControlsTitle } from "./styles"

interface ControlsBoxProps{
    title: string
    children?: React.ReactNode
    layoutStyle?: string
}

const ControlsBox = ({title, children, layoutStyle}: ControlsBoxProps) => {
    return (
        <ControlsLayout className={layoutStyle}>{/*열이면 col 추가*/}
            <ControlsTitle>{title}</ControlsTitle>
            {children}
        </ControlsLayout>
    )
}

export default ControlsBox